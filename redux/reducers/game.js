import { SELECT_GAMEMODE } from "../actions/game";

const initialState = {};

export default function game(state = initialState, action) {
  switch (action.type) {
    case SELECT_GAMEMODE:
      return { ...state, gamemode: action.gamemode };
    default:
      return state;
  }
}

export const getGamemode = state => state.game.gamemode;
