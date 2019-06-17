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
  number,
  QUESTION,
  ANSWER
} from "../../ressources/cards";
import { GameModeId } from "../../ressources/gameModes";
import { nbCardsMax } from "../../constants/Game";

const initialState = {
  cards: [],
  upcomingCards: [],
  players: [{ name: "", errors: [] }],
  currentCardIndex: 0
};

//TODO : Reflechir à une solution pour simplifier ce reducer trop complexe
export default function game(state = initialState, action) {
  switch (action.type) {
    /** GameMode */
    case SELECT_GAMEMODE:
      let { introCards, deck, upcomingCards } = initializeGameMode(
        action.gamemode,
        state.players
      );

      return {
        ...state,
        gamemode: action.gamemode,
        cards: [...introCards],
        deck: [...deck],
        currentCardIndex: initialState.currentCardIndex,
        upcomingCards
      };
    /** Cards */
    case INCREMENT_CURRENT_CARD:
      /** Lorsqu'on se deplace sur la carte suivante */
      let newCurrentCard = state.currentCardIndex + 1;
      /** Si cette carte est l'avance dernière des cartes déjà prête */
      if (
        newCurrentCard >= state.cards.length - 1 &&
        state.cards[newCurrentCard].title !== endCard.title
      ) {
        /** On prépare une nouvelle carte */
        let { nextCard, newDeck, newUpcomingCards } = generateNextCard(
          state.players,
          state.deck,
          state.cards,
          state.upcomingCards
        );
        return {
          ...state,
          currentCardIndex: newCurrentCard,
          cards: [...state.cards, { ...nextCard }],
          deck: [...newDeck],
          upcomingCards: [...newUpcomingCards]
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
      let { introCards, deck, upcomingCards } = initializeGameMode(
        state.gamemode,
        newPlayers
      );
      return {
        cards: [...introCards],
        deck: [...deck],
        currentCardIndex: initialState.currentCardIndex,
        upcomingCards: [...upcomingCards]
      };
      //Sinon on regenère seulement la dernière carte
    } else {
      let { newDeck, newUpcomingCards, newCards } = regenerateLastCard(
        newPlayers,
        state.deck,
        [...state.cards],
        state.upcomingCards
      );
      return {
        cards: [...newCards],
        deck: [...newDeck],
        upcomingCards: [...newUpcomingCards]
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
function regenerateLastCard(players, deck, cards, upcomingCards) {
  let newCards = [...cards];
  let newDeck = [...deck];
  let indexOfLastCard = newCards.length - 1;
  let lastCard = newCards[indexOfLastCard];
  let newUpcomingCards = [...upcomingCards];
  // Si la dernière carte générée est une followingCard, on ne regenère rien
  if (lastCard.isFollowingCard || players.length === 0) {
    return {
      nextCard: lastCard,
      newDeck,
      newUpcomingCards: upcomingCards,
      newCards
    };
  }
  let lastCardIndexInDeck = newDeck.findIndex(
    card => card.title === lastCard.title
  );
  let newCardInDeck = { ...newDeck[lastCardIndexInDeck] };
  newCardInDeck.nbOccurences++;
  /**
   * Si la carte qu'on regenère était une carte mot
   * on remet le mot dans la liste
   * afin de pouvoir retomber dessus
   */
  if (lastCard.wordSelected && newCardInDeck.words) {
    let newWords = [...newCardInDeck.words];
    newWords.push(lastCard.wordSelected);
    newCardInDeck.words = newWords;
  }
  /**
   * Pareil pour les questions
   */
  if (lastCard.questionSelected && newCardInDeck.questions) {
    let newQuestions = [...newCardInDeck.questions];
    newQuestions.push(lastCard.questionSelected);
    newCardInDeck.questions = newQuestions;
  }
  if (lastCard.followingCard) {
    let upComingCardToRemoveIndex = newUpcomingCards.findIndex(
      upCoCard => upCoCard.parentId === lastCard.id
    );
    newUpcomingCards.splice(upComingCardToRemoveIndex, 1);
  }

  newDeck[lastCardIndexInDeck] = newCardInDeck;
  newCards.splice(indexOfLastCard, 1);
  let result = generateNextCard(players, newDeck, newCards, newUpcomingCards);
  newCards.push(result.nextCard);

  return {
    newCards,
    newDeck: result.newDeck,
    newUpcomingCards: result.newUpcomingCards
  };
}
/**
 * Génére une nouvelle carte tirée dans le deck, crée en fonction des joueurus
 * Retour la carte, ainsi que le deck mis à jour ("retrait" de la carte tirée)
 * @param {*} players
 * @param {*} deck
 */
//FIXME : Trop longue, need refacto
function generateNextCard(players, deck, cards, upcomingCards) {
  let newDeck = [...deck];
  let cleanPlayers = removeEmptyPlayers(players);
  let possibleCards = newDeck.filter(
    card => card.nbPlayers <= cleanPlayers.length && card.nbOccurences > 0
  );
  let newCard;
  let followingCard;
  let newUpcomingCards = [...upcomingCards];
  if (newUpcomingCards.length > 0) {
    //On tries les upComingCards avant de les tirer
    //pour priorisé les cartes avec un drawDelay faible
    newUpcomingCards = [...newUpcomingCards].sort(
      (upcomingCards, nextUpcomingCard) => {
        return upcomingCards.drawDelay - nextUpcomingCard.drawDelay;
      }
    );
    let upcomingIndex = newUpcomingCards.findIndex(upcomingCard => {
      let indexOfNextCard = cards.length;
      return (
        upcomingCard.indexToBeDrawn <= indexOfNextCard ||
        (possibleCards.length === 0 || cards.length >= nbCardsMax)
      );
    });
    if (upcomingIndex >= 0) {
      newCard = newUpcomingCards[upcomingIndex];
      newUpcomingCards.splice(upcomingIndex, 1);
    }
  }

  if (!newCard) {
    if (possibleCards.length > 0 && cards.length < nbCardsMax) {
      let indexOfSelectedCard = Math.floor(
        Math.random() * possibleCards.length
      );
      let proccessedCard = proccessCard(
        possibleCards[indexOfSelectedCard],
        cleanPlayers
      );
      newCard = proccessedCard.newCard;
      followingCard = proccessedCard.followingCard;

      let indexInDeck = newDeck.findIndex(card => newCard.title === card.title);
      let newCardInDeck = { ...newDeck[indexInDeck] };
      let newNbOccurences = newCardInDeck.nbOccurences - 1;
      newCardInDeck.nbOccurences = newNbOccurences;
      /**
       * On met à jours les mots disponible pour la carte
       * dans le deck, afin de ne pas tomber
       * deux fois sur le même mot
       */
      if (newCard.wordSelected && newCard.words && newCard.words.length > 0) {
        let wordSelectedIndex = newCardInDeck.words.findIndex(
          word => word === newCard.wordSelected
        );
        let newWords = [...newCardInDeck.words];
        newWords.splice(wordSelectedIndex, 1);
        newCardInDeck.words = newWords;
      }
      /**
       * Pareil avec les questions
       */
      if (
        newCard.questionSelected &&
        newCard.questions &&
        newCard.questions.length > 0
      ) {
        let questionSelectedIndex = newCardInDeck.questions.findIndex(
          question =>
            question.question === newCard.questionSelected.question &&
            question.answer === newCard.questionSelected.answer
        );
        let newQuestions = [...newCardInDeck.questions];
        newQuestions.splice(questionSelectedIndex, 1);
        newCardInDeck.questions = newQuestions;
      }

      newDeck[indexInDeck] = newCardInDeck;
    } else {
      newCard = endCard;
    }
  }

  if (followingCard) {
    followingCard = { ...followingCard, parentId: newCard.id };
    newUpcomingCards.push(generateUpcommingCard(followingCard, cards));
  }
  return { nextCard: newCard, newDeck, newUpcomingCards };
}

/**
 * génère une upcommingCard
 * C'est à dire une carte qui liée à une autre
 * qui devra sortir à un index données
 * Index calculé à l'aide du drawdelay
 * @param {*} followingCard
 * @param {*} cards
 */
function generateUpcommingCard(followingCard, cards) {
  let indexOfNextCard = cards.length;
  if (followingCard) {
    return {
      ...followingCard,
      indexToBeDrawn: followingCard.drawDelay
        ? indexOfNextCard + followingCard.drawDelay
        : indexOfNextCard + 1
    };
  } else {
    return {};
  }
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
    proccessedIntroCards.push(proccessCard(card, cleanPlayers).newCard);
  });

  let deck = createDeck(gamemode);
  let upcomingCards = initialState.upcomingCards;
  while (proccessedIntroCards.length < 2) {
    let result = generateNextCard(
      cleanPlayers,
      deck,
      proccessedIntroCards,
      upcomingCards
    );
    deck = result.newDeck;
    upcomingCards = result.newUpcomingCards;
    proccessedIntroCards.push(result.nextCard);
  }
  return {
    introCards: proccessedIntroCards,
    deck,
    upcomingCards: [...upcomingCards]
  };
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
  let newCard = { ...card };
  newCard = generateCardId(newCard);
  newCard = proccessCardText(newCard, players);
  newCard = proccessCardPlayers(newCard, players);
  newCard = proccessCardNumber(newCard);
  newCard = proccessCardWords(newCard);
  newCard = proccessCardQuestions(newCard);
  if (newCard.followingCard) {
    return {
      newCard,
      followingCard: { ...newCard.followingCard, isFollowingCard: true }
    };
  } else {
    return { newCard };
  }
}

function generateCardId(card) {
  let newCard = { ...card };
  newCard.id = card.title + card.nbOccurences;
  return newCard;
}
/**
 * Determine si la carte passée en paramètre
 * possèdes dans son text le flag passé en parramètre
 * @param {text: String} card
 * @param String flag
 */
function needToBeFilledBy(card, flag) {
  if (card) {
    return card.text.includes(flag);
  } else {
    return false;
  }
}

/**
 * Retourne une nouvelle instance de la carte passée en paramètre
 * où toutes les itérations du flag ont étés remplacés par la value
 * @param {text:String} card
 * @param String flag
 * @param String value
 */
function fillCard(card, flag, value) {
  if (card) {
    return { ...card, text: card.text.split(flag).join(value) };
  } else {
    return card;
  }
}

/**
 * Remplace toutes les itérations de QUESTION et ANSWER
 * dans le texte de la carte par des données
 * tirées aléatoire dans le tableau questions de la carte
 * @param {text: String} card
 */
function proccessCardQuestions(card) {
  let newCard = { ...card };

  if (newCard.questions && newCard.questions.length > 0) {
    let index = Math.floor(Math.random() * newCard.questions.length);
    let { question, answer } = newCard.questions[index];
    newCard.questionSelected = { question, answer };
    if (needToBeFilledBy(newCard, QUESTION)) {
      newCard = fillCard(newCard, QUESTION, question);
    }
    if (needToBeFilledBy(newCard.followingCard, QUESTION)) {
      newCard.followingCard = fillCard(
        newCard.followingCard,
        QUESTION,
        question
      );
    }
    if (needToBeFilledBy(newCard, ANSWER)) {
      newCard = fillCard(newCard, ANSWER, answer);
    }
    if (needToBeFilledBy(newCard.followingCard, ANSWER)) {
      newCard.followingCard = fillCard(newCard.followingCard, ANSWER, answer);
    }
  }
  return newCard;
}

/**
 * Fonction permettant de reoturner une carte avec la valeur text
 * renseignée, dans le cas d'une cartes à textes multiples.
 */
function proccessCardText(card, players) {
  let newCard = { ...card };
  if (card.texts && card.texts.length > 0) {
    let newText = card.texts.find(elem => {
      let min = elem.range.min;
      let max = elem.range.max ? elem.range.max : 99999;
      return min <= players.length && max >= players.length;
    });
    newCard.text = newText.value;
  }
  return newCard;
}

/**
 * Fonction remplacement toutes les itérations de
 * PLAYER(X) par un joueur tiré aléatoirement dans la liste des joueurs
 * passés en paramètres
 */
function proccessCardPlayers(card, players) {
  let newCard = { ...card };
  let playersAvailable = [...removeEmptyPlayers(players)];
  let playerIndex = 1;
  let selectPlayer = () => {
    let index = Math.floor(Math.random() * playersAvailable.length);
    return { index, player: playersAvailable[index] };
  };
  let playerSelected;
  while (
    playersAvailable.length > 0 &&
    (needToBeFilledBy(newCard, player(playerIndex)) ||
      needToBeFilledBy(newCard.followingCard, player(playerIndex)))
  ) {
    playerSelected = selectPlayer();
    if (needToBeFilledBy(newCard, player(playerIndex))) {
      newCard = fillCard(
        newCard,
        player(playerIndex),
        playerSelected.player.name
      );
    }
    if (needToBeFilledBy(newCard.followingCard, player(playerIndex))) {
      newCard.followingCard = fillCard(
        newCard.followingCard,
        player(playerIndex),
        playerSelected.player.name
      );
    }
    playersAvailable.splice(playerSelected.index, 1);
    playerIndex++;
  }

  return newCard;
}
/**
 * Fonction remplacement toutes les itérations de
 * NUMBER(X) par un nombre tiré aléatoirement compris
 * entre le min et le max de la variable ranges de la carte
 */
function proccessCardNumber(card) {
  let newCard = { ...card };
  let numberIndex = 1;
  let getNumber = () => {
    let range = newCard.ranges[numberIndex - 1];
    return Math.floor(Math.random() * (range.max + 1 - range.min)) + range.min;
  };
  while (needToBeFilledBy(newCard, number(numberIndex))) {
    newCard = fillCard(newCard, number(numberIndex), getNumber());
    numberIndex++;
  }

  return newCard;
}

/**
 * Fonction remplacement toutes les itérations de
 * WORD par une chaine de caractère tiré aléatoirement
 * dans le tableau words présent dans la carte
 */
function proccessCardWords(card) {
  let newCard = { ...card };
  if (
    newCard.words &&
    newCard.words.length > 0 &&
    needToBeFilledBy(newCard, WORD)
  ) {
    let index = Math.floor(Math.random() * newCard.words.length);
    newCard = fillCard(newCard, WORD, newCard.words[index]);
    newCard.wordSelected = newCard.words[index];
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
    if (player.newName.length > 0 && accumulateur.includes(player.newName)) {
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
