import { GameModeId } from "./gameModes";

export const introductionCards = [
  {
    title: "Bienvenue",
    text:
      "Bienvenue dans le Guet-apens, un jeu dont le but est de vous aider à vous enivrer dans vos soirées. NEXTLINE Ceci est une version de test, si vous rencontrez des erreurs, n'hésitez pas à les rapporter à la personne vous ayant fournis l'application !",
    author: "Jules",
    nbPlayer: 0,
    nbOccurence: 1,
    gameMode: [GameModeId.ANY]
  }
];
export default [
  {
    title: "Tuboi",
    text: "Bois 2 gorgées",
    author: "Jules",
    nbPlayer: 1,
    gameMode: [GameModeId.ANY]
  }
];
