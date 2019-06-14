export const GameModeId = {
  ANY: "any",
  MAIN: "main",
  HARDCORE: "Hardcore"
};

export default [
  {
    id: GameModeId.MAIN,
    name: "Mode normal",
    description: "Mode de jeu classique, pas de bassine à prévoir"
  },
  {
    id: GameModeId.HARDCORE,
    name: "Boss de fin",
    description:
      "Si vous ne buvez pas pour vous amuser, mais pour prouver qui à les plus grosses, ce mode est pour vous (Bassine à prévoir !)"
  }
];
