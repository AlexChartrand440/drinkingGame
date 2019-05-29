export const SELECT_GAMEMODE = "SELECT_GAMEMODE";
export const ADD_CARD = "ADD_CARD";
export const ADD_PLAYER = "ADD_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";
export const SET_PLAYER_NAME = "SET_PLAYER_NAME";

export function selectGameMode(gamemode) {
  return { type: SELECT_GAMEMODE, gamemode };
}

export function addCard(card) {
  return { type: ADD_CARD, card };
}

export function addPlayer() {
  return { type: ADD_PLAYER };
}

export function deletePlayer(index) {
  return { type: DELETE_PLAYER, index };
}

export function setPlayerName(index, name) {
  return { type: SET_PLAYER_NAME, index, name };
}
