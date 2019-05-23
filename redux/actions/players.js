export const ADD_PLAYER = "ADD_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";
export const SET_PLAYER_NAME = "SET_PLAYER_NAME";

export function addPlayer() {
  return { type: ADD_PLAYER };
}

export function deletePlayer(index) {
  return { type: DELETE_PLAYER, index };
}

export function setPlayerName(index, name) {
  return { type: SET_PLAYER_NAME, index, name };
}
