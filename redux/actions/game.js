export const SELECT_GAMEMODE = "SELECT_GAMEMODE";
export const ADD_CARD = "ADD_CARD";

export function selectGameMode(gamemode) {
  return { type: SELECT_GAMEMODE, gamemode };
}

export function addCard(card) {
  return { type: ADD_CARD, card };
}
