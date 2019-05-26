export const SELECT_GAMEMODE = "SELECT_GAMEMODE";

export function selectGameMode(gamemode) {
  return { type: SELECT_GAMEMODE, gamemode };
}
