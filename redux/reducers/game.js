import {
  SELECT_GAMEMODE,
  ADD_CARD,
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_PLAYER_NAME,
  INCREMENT_CURRENT_CARD,
  DECREMENT_CURRENT_CARD
} from "../actions/game";
import CardDeck, { introductionCards } from "../../ressources/cards";
import { GameModeId } from "../../ressources/gameModes";

const initialState = {
  cards: [],
  players: [{ name: "" }],
  currentCardIndex: 0
};

export default function game(state = initialState, action) {
  switch (action.type) {
    /** GameMode */
    case SELECT_GAMEMODE:
      return {
        ...state,
        gamemode: action.gamemode,
        cards: initializeGameMode(action.gamemode, state.players)
      };
    /** Cards */
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.card] };
    case INCREMENT_CURRENT_CARD:
      let newCurrentCard = state.currentCardIndex + 1;
      if (newCurrentCard >= state.cards.length - 2) {
        return {
          ...state,
          currentCardIndex: newCurrentCard,
          cards: [
            ...state.cards,
            generateNextCard(state.gamemode, state.players, state.cards)
          ]
        };
      } else {
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
      return { ...state, players: [...state.players, { name: "" }] };
    case DELETE_PLAYER:
      let newPlayers = [...state.players];
      newPlayers.splice(action.index, 1);
      return { ...state, players: newPlayers };
    case SET_PLAYER_NAME: {
      let newPlayers = [...state.players];
      newPlayers[action.index] = { name: action.name };
      return { ...state, players: newPlayers };
    }
    default:
      return state;
  }
}
/**GameMode */
export const getGamemode = state => state.game.gamemode;
/** Cards */
export const getCards = state => state.game.cards;
export const getCurrentCardIndex = state => state.game.currentCardIndex;
/** Player */
export const getPlayers = state => state.game.players;
export const hasPlayer = state =>
  state.game.players.some(player => player.name !== "");

function generateNextCard(gamemode, player, cards) {
  return CardDeck.filter(
    card =>
      card.gameMode.includes(gamemode) || card.gameMode.includes(GameModeId.ANY)
  ).find(() => true);
}

function initializeGameMode(gamemode, player) {
  let introCards = introductionCards.filter(
    card =>
      card.gameMode.includes(gamemode) || card.gameMode.includes(GameModeId.ANY)
  );
  while (introCards.length < 2) {
    introCards.push(generateNextCard(gamemode, player, introCards));
  }
  console.log(introCards);
  return introCards;
}
