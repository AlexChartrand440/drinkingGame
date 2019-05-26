import { ADD_PLAYER, DELETE_PLAYER, SET_PLAYER_NAME } from "../actions/players";

const initialState = {
  players: [{ name: "" }]
};

export default function player(state = initialState, action) {
  switch (action.type) {
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

export const getPlayers = state => state.player.players;
export const hasPlayer = state =>
  state.player.players.some(player => player.name !== "");
