import {
  SELECT_GAMEMODE,
  ADD_CARD,
  ADD_PLAYER,
  DELETE_PLAYER,
  SET_PLAYER_NAME
} from "../actions/game";

const initialState = { cards: [], players: [{ name: "" }] };

export default function game(state = initialState, action) {
  switch (action.type) {
    /** GameMode */
    case SELECT_GAMEMODE:
      return {
        ...state,
        gamemode: action.gamemode,
        cards: [...initialState.cards]
      };
    /** Cards */
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.card] };
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
/** Player */
export const getPlayers = state => state.game.players;
export const hasPlayer = state =>
  state.game.players.some(player => player.name !== "");
