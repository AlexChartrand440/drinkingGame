import {
  SELECT_GAMEMODE,
  ADD_CARD,
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_PLAYER_NAME,
  INCREMENT_CURRENT_CARD,
  DECREMENT_CURRENT_CARD
} from "../actions/game";
import CardDeck, {
  introductionCards,
  endCard,
  WORD,
  player,
  number
} from "../../ressources/cards";
import { GameModeId } from "../../ressources/gameModes";
import { nbCardsMax } from "../../constants/Game";

const initialState = {
  cards: [],
  players: [{ name: "", errors: [] }],
  currentCardIndex: 0
};

//TODO : Reflechir à une solution pour simplifier ce reducer trop complexe
export default function game(state = initialState, action) {
  switch (action.type) {
    /** GameMode */
    case SELECT_GAMEMODE:
      let { introCards, deck } = initializeGameMode(
        action.gamemode,
        state.players
      );
      return {
        ...state,
        gamemode: action.gamemode,
        cards: [...introCards],
        deck: [...deck],
        currentCardIndex: initialState.currentCardIndex
      };
    /** Cards */
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.card] };
    case INCREMENT_CURRENT_CARD:
      /** Lorsqu'on se deplace sur la carte suivante */
      let newCurrentCard = state.currentCardIndex + 1;
      /** Si cette carte est l'avance dernière des cartes déjà prête */
      if (
        newCurrentCard >= state.cards.length - 1 &&
        state.cards[newCurrentCard].title !== endCard.title
      ) {
        /** On prépare une nouvelle carte */
        let { nextCard, newDeck } = generateNextCard(
          state.players,
          state.deck,
          state.cards
        );
        return {
          ...state,
          currentCardIndex: newCurrentCard,
          cards: [...state.cards, ...nextCard],
          deck: [...newDeck]
        };
      } else {
        /** Sinon, on indique simplement qu'on est sur la carte suivante */
        return { ...state, currentCardIndex: newCurrentCard };
      }

    case DECREMENT_CURRENT_CARD:
      return {
        ...state,
        currentCardIndex:
          state.currentCardIndex > 0
            ? state.currentCardIndex - 1
            : state.currentCardIndex
      };
    /** Players */
    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, { name: "", errors: [] }]
      };
    case DELETE_PLAYER: {
      let newPlayers = [...state.players];
      newPlayers.splice(action.index, 1);
      newPlayers = controlAllPlayer(newPlayers);
      return {
        ...state,
        players: newPlayers,
        ...recalculateGameState(state, newPlayers)
      };
    }
    case SET_PLAYER_NAME: {
      let newPlayers = [...state.players];
      newPlayers[action.index] = { name: action.name };
      newPlayers = controlAllPlayer(newPlayers);
      return {
        ...state,
        players: newPlayers,
        ...recalculateGameState(state, newPlayers)
      };
    }
    //Si une partie est en cours, on va recalculé la dernière carte précalculée
    default:
      return state;
  }
}
/**GameMode */
export const getGamemode = state => state.game.gamemode;
/** Cards */
export const getCards = state => state.game.cards;
export const getCurrentCardIndex = state => state.game.currentCardIndex;
export const isGameFinished = state =>
  state.game.cards[state.game.cards.length - 1].title === endCard.title;
export const isEndCardSelected = state =>
  state.game.cards[state.game.currentCardIndex].title === endCard.title;
export const isFirstCardSelected = state => state.game.currentCardIndex === 0;
export const isInIntroduction = state =>
  state.game.cards[state.game.cards.length - 1].introCard;
/** Player */
export const getPlayers = state => state.game.players;
export const hasPlayer = state =>
  state.game.players.some(player => player.name !== "");
export const arePlayersNameCorrect = state =>
  !state.game.players.some(player => player.errors.length > 0);

/** FUNCTIONS */

/**
 * Fonction effectuant un recalcule de l'état du jeu en cas
 * de changement dans les joueurs
 */
function recalculateGameState(state, newPlayers) {
  //Si un mode de jeu est selectionné et que la partie n'est pas fini
  if (state.gamemode && !isGameFinished({ game: { ...state } })) {
    //Si on est encore dans les cartes d'introduction, on redemarre la partie
    if (isInIntroduction({ game: { ...state } })) {
      let { introCards, deck } = initializeGameMode(state.gamemode, newPlayers);
      return {
        cards: [...introCards],
        deck: [...deck],
        currentCardIndex: initialState.currentCardIndex
      };
      //Sinon on regenère seulement la dernière carte
    } else {
      let newCards = [...state.cards];
      let { nextCard, newDeck } = regenerateLastCard(
        newPlayers,
        state.deck,
        newCards
      );
      newCards.splice(newCards.length - 1, 1, nextCard);
      return {
        cards: [...newCards],
        deck: [...newDeck]
      };
    }
  } else {
    return {};
  }
}

/**
 * Permet de regenerer la dernière carte, c'est à dire
 * Modifier le deck en ajoutant 1 occurances à la dernière carte tirée
 * Puis retourne l'appel d'une generation de carte classique
 * @param {*} players
 * @param {*} deck
 * @param {*} cards
 */
function regenerateLastCard(players, deck, cards) {
  let newCards = [...cards];
  let newDeck = [...deck];
  let lastCard = newCards[newCards.length - 1];
  // Si la dernière carte générée est une followingCard, on ne regenère rien
  if (lastCard.isFollowingCard) {
    return { nextCard: lastCard, newDeck };
  }
  let lastCardIndexInDeck = newDeck.findIndex(
    card => card.title === lastCard.title
  );
  newDeck[lastCardIndexInDeck].nbOccurences++;

  return generateNextCard(players, deck, cards);
}
/**
 * Génére une nouvelle carte tirée dans le deck, crée en fonction des joueurus
 * Retour la carte, ainsi que le deck mis à jour ("retrait" de la carte tirée)
 * @param {*} players
 * @param {*} deck
 */
function generateNextCard(players, deck, cards) {
  let newDeck = [...deck];
  let cleanPlayers = removeEmptyPlayers(players);
  let possibleCards = newDeck.filter(
    card => card.nbPlayers <= cleanPlayers.length && card.nbOccurences > 0
  );
  let nextCard;
  if (possibleCards.length > 0 && cards.length < nbCardsMax) {
    let indexOfSelectedCard = Math.floor(Math.random() * possibleCards.length);
    nextCard = proccessCard(possibleCards[indexOfSelectedCard], cleanPlayers);
    let indexInDeck = newDeck.findIndex(
      card => nextCard[0].title === card.title
    );
    let cardInDeck = newDeck[indexInDeck];
    let newNbOccurences = cardInDeck.nbOccurences - 1;
    newDeck[indexInDeck] = {
      ...newDeck[indexInDeck],
      nbOccurences: newNbOccurences
    };
  } else {
    nextCard = [endCard];
  }
  return { nextCard, newDeck };
}

/**
 * Permet d'initialiser une partie à l'aide du mode de jeu et des joueurs
 * On va générer le deck de cartes,
 * et tirer les cartes d'introduction
 * Si on à moins de 2 cartes d'introduction pour ce mode de jeu
 * on va aller tirer des cartes dans le deck
 * @param {*} gamemode
 * @param {*} players
 */
function initializeGameMode(gamemode, players) {
  let cleanPlayers = removeEmptyPlayers(players);
  let introCards = introductionCards.filter(
    card =>
      isCardInGameMode(card, gamemode) && cleanPlayers.length >= card.nbPlayers
  );
  let proccessedIntroCards = [];
  introCards.forEach(card => {
    proccessCard(card, cleanPlayers).map(nCard => {
      proccessedIntroCards.push(nCard);
    });
  });

  let deck = createDeck(gamemode);
  while (proccessedIntroCards.length < 2) {
    let result = generateNextCard(cleanPlayers, deck, proccessedIntroCards);
    deck = result.newDeck;
    result.nextCard.map(nCard => {
      proccessedIntroCards.push(nCard);
    });
  }
  return { introCards: proccessedIntroCards, deck };
}

/**
 * Crée un deck à partir du mode de jeu
 * C'est à dire qu'on va récupérer dans la liste des cartes de l'application
 * les cartes correspondant à ce mode de jeu
 * @param {*} gamemode
 */
function createDeck(gamemode) {
  return CardDeck.filter(card => isCardInGameMode(card, gamemode));
}

/**
 * Fonction indiquant si la carte passé en paramètre corresponds au mode de jeu
 * lui aussi passé en paramètre
 * @param {*} card
 * @param {*} gamemode
 */
function isCardInGameMode(card, gamemode) {
  return (
    card.gameMode.includes(gamemode) || card.gameMode.includes(GameModeId.ANY)
  );
}

/**
 * Fonction permettant de retourner une carte où
 * les variables contenues dans son texte son alimenté
 * Il est possible de retourner plusieurs carte, si la carte calculée
 * possèdes une carte suivante obligatoire
 */
function proccessCard(card, players) {
  let newCard = proccessCardPlayers(card, players);
  newCard = proccessCardNumber(newCard);
  newCard = proccessCardWords(newCard);
  if (newCard.followingCard) {
    return [newCard, { ...newCard.followingCard, isFollowingCard: true }];
  } else {
    return [newCard];
  }
}

/**
 * Fonction permettant de retourner une carte où
 * les variables de joueur contenue dans son texte son alimenté
 */
function proccessCardPlayers(card, players) {
  let newCard = { ...card };
  let followingCard = newCard.followingCard
    ? { ...newCard.followingCard }
    : null;
  let playersAvailable = [...removeEmptyPlayers(players)];
  let playerIndex = 1;
  let selectPlayer = () => {
    let index = Math.floor(Math.random() * playersAvailable.length);
    return { index, player: playersAvailable[index] };
  };
  let needPlayer = () =>
    newCard.text.includes(player(playerIndex)) ||
    (followingCard && followingCard.text.includes(player(playerIndex)));
  let playerSelected;
  while (playersAvailable.length > 0 && needPlayer()) {
    playerSelected = selectPlayer();
    newCard.text = newCard.text
      .split(player(playerIndex))
      .join(playerSelected.player.name);
    if (followingCard) {
      followingCard.text = followingCard.text
        .split(player(playerIndex))
        .join(playerSelected.player.name);
    }
    playersAvailable.splice(playerSelected.index, 1);
    playerIndex++;
  }

  if (followingCard) {
    newCard.followingCard = followingCard;
  }

  return newCard;
}
/**
 * Fonction permettant de retourner une carte où
 * les variables de nombre aléatoire contenue dans son texte son alimenté
 */
function proccessCardNumber(card) {
  let newCard = { ...card };
  let numberIndex = 1;
  let getNumber = () => {
    let range = newCard.ranges[numberIndex - 1];
    return Math.floor(Math.random() * (range.max + 1 - range.min)) + range.min;
  };
  let needNumber = () => newCard.text.includes(number(numberIndex));
  while (needNumber()) {
    newCard.text = newCard.text.split(number(numberIndex)).join(getNumber());
    numberIndex++;
  }

  return newCard;
}

function proccessCardWords(card) {
  let newCard = { ...card };
  if (
    newCard.words &&
    newCard.words.length > 0 &&
    newCard.text.includes(WORD)
  ) {
    let index = Math.floor(Math.random() * newCard.words.length);
    newCard.text = newCard.text.split(WORD).join(newCard.words[index]);
  }
  return newCard;
}

/**
 * Retourne la liste des joueurs comportant un nom
 * @param {*} players
 */
function removeEmptyPlayers(players) {
  return [
    ...players.filter(player => {
      return player.name.length > 0;
    })
  ];
}

/**
 * Controle la liste des joueurs
 */

function controlAllPlayer(players) {
  let newPlayers = [...players];
  newPlayers.reduce((accumulateur, valeurCourante, index) => {
    let player = controlePlayerName(valeurCourante.name);
    let newAccumulateur;
    if (accumulateur.includes(player.newName)) {
      player.errors = [
        ...player.errors,
        "Deux joueurs ne peuvent pas avoir le même nom"
      ];
      newAccumulateur = [...accumulateur];
    } else {
      newAccumulateur = [...accumulateur, player.newName];
    }
    newPlayers[index] = {
      ...valeurCourante,
      name: player.newName,
      errors: player.errors
    };
    return newAccumulateur;
  }, []);
  return newPlayers;
}

/**
 * Contrôle le nom d'un joueur
 * @param {*} name
 */
function controlePlayerName(name) {
  let newName = name.trim();
  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (!(newName.length < 1)) {
    //Si des caractères spéciaux sont présents
    if (format.test(newName)) {
      return {
        newName,
        errors: ["Le nom d'un joueur ne peux pas contenir de caractère special"]
      };
    }
  }

  return { newName, errors: [] };
}
