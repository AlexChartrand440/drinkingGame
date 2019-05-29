import { SELECT_GAMEMODE, ADD_CARD } from "../actions/game";

const initialState = { cards: [] };

export default function game(state = initialState, action) {
  switch (action.type) {
    case SELECT_GAMEMODE:
      return { ...state, gamemode: action.gamemode };
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.card] };
    default:
      return state;
  }
}

export const getGamemode = state => state.game.gamemode;
export const getCards = state => state.game.cards;
