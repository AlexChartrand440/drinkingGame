export const GameModeId = {
  ANY: "any",
  MAIN: "main",
  HARDCORE: "Hardcore",
  TEST: "Test",
  DUMB: "Dumb"
};

export default [
  {
    id: GameModeId.MAIN,
    icon: "md-wine",
    name: "Classique",
    description: "Des cartes variées, pas de bassine à prévoir."
  },
  {
    id: GameModeId.HARDCORE,
    icon: "md-medal",
    name: "Les anciens combattant",
    description:
      "Si ce n'est pas votre première soirée, et que vous êtes prêt à en découdre, ce mode est fait pour vous."
  },

  {
    id: GameModeId.DUMB,
    icon: "md-happy",
    name: "Pas bien malin",
    description:
      "Si vous pensez que le QI cumulé des joueurs ne dépasse pas les deux chiffres, ce mode est pour vous !"
  }
];
