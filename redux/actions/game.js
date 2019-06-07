export const SELECT_GAMEMODE = "SELECT_GAMEMODE";
export const ADD_CARD = "ADD_CARD";
export const INCREMENT_CURRENT_CARD = "INCREMENT_CURRENT_CARD";
export const DECREMENT_CURRENT_CARD = "DECREMENT_CURRENT_CARD";
export const ADD_PLAYER = "ADD_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";
export const SET_PLAYER_NAME = "SET_PLAYER_NAME";

export function selectGameMode(gamemode) {
  return { type: SELECT_GAMEMODE, gamemode };
}

export function addCard(card) {
  return { type: ADD_CARD, card };
}

export function incrementCurrentCard() {
  return { type: INCREMENT_CURRENT_CARD };
}

export function decrementCurrentCard() {
  return { type: DECREMENT_CURRENT_CARD };
}

export function addPlayer() {
  return { type: ADD_PLAYER };
}

export function deletePlayer(index) {
  return { type: DELETE_PLAYER, index };
}

export function setPlayerName(index, name) {
  let { newName, errors } = controlePlayerName(name);
  return { type: SET_PLAYER_NAME, index, name: newName, errors };
}

function controlePlayerName(name) {
  let newName = name.trim();
  let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (newName.length < 1) {
    return { newName, errors: ["Le nom d'un joueur ne peux pas être vide"] };
  } else {
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
