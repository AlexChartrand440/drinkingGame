import { GameModeId } from "./gameModes";
export const PLAYER = "#PLAYER";
export const introductionCards = [
  {
    title: "Bienvenue",
    text:
      "Bienvenue dans le Guet-apens, un jeu dont le but est de vous aider à vous enivrer dans vos soirées. NEXTLINE Ceci est une version de test, si vous rencontrez des erreurs, n'hésitez pas à les rapporter à la personne vous ayant fournis l'application !",
    author: "Jules",
    nbPlayers: 0,
    nbOccurences: 1,
    gameMode: [GameModeId.ANY]
  }
];
export default [
  {
    title: "Tuboi",
    text: PLAYER + "1" + " bois 2 gorgées",
    author: "Jules",
    nbPlayers: 1,
    nbOccurences: 4,
    gameMode: [GameModeId.ANY]
  }
];

export const endCard = {
  title: "Fin de la partie",
  text:
    "La partie est finie ! Si vous tenez encore debout, n'hésitez pas à en démarrer une nouvelle",
  author: "Jules",
  nbPlayers: 0,
  gameMode: [GameModeId.ANY],
  end: true
};
