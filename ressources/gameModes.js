export const GameModeId = {
  ANY: "any",
  MAIN: "main",
  HARDCORE: "Hardcore",
  TEST: "Test"
};

export default [
  {
    id: GameModeId.MAIN,
    name: "Classique",
    description: "Des cartes variées, pas de bassine à prévoir"
  },
  {
    id: GameModeId.HARDCORE,
    name: "Les anciens combattant",
    description:
      "Si ce n'est pas votre première soirée, et que vous êtes prêt à en découdre, ce mode est fait pour vous"
  }
];
