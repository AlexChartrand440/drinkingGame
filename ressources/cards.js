import { GameModeId } from "./gameModes";
const PLAYER = "#PLAYER";
const NUMBER = "#NUMBER";

export function player(index) {
  return PLAYER + index;
}

export function number(index) {
  return NUMBER + index;
}

export const introductionCards = [
  {
    title: "Bienvenue",
    text:
      "Bienvenue dans le Guet-apens, un jeu dont le but est de vous aider à vous enivrer dans vos soirées. \n" +
      "Ceci est une version de test, si vous rencontrez des erreurs, n'hésitez pas à les rapporter à la personne vous ayant fournis l'application !",
    author: "Jules",
    color: "#3c6382",
    nbPlayers: 0,
    nbOccurences: 1,
    gameMode: [GameModeId.ANY]
  },
  {
    title: "Les règles de bases",
    text:
      "Si vous souhaitez rendre le jeu plus drôle, ajoutez ces règles de base :" +
      " Interdit de dire le mot boire, \n" +
      "Interdit de dire de gros mot, \n" +
      "Interdit de montrer du doigt. \n" +
      " Tout manquement à l'une de ces règles est punis d'une gorgée.",
    author: "Jules",
    nbPlayers: 0,
    nbOccurences: 1,
    gameMode: [GameModeId.ANY]
  },
  {
    title: "Le conseil des joueurs",
    text:
      player(1) +
      ", " +
      player(2) +
      " et " +
      player(3) +
      " sont maintenant membre du conseil des joueurs. Ils seront en charge de régler tout litige au cours de la partie. \n" +
      "A partir de maintenant, la loi, c'est eux !",
    author: "Jules",
    nbPlayers: 5,
    nbOccurences: 1,
    gameMode: [GameModeId.ANY]
  }
];
export default [
  {
    title: "Tuboi",
    text: player(1) + " bois " + number(1) + " gorgées.",
    author: "Jules",
    nbPlayers: 1,
    nbOccurences: 4,
    color: "#60a3bc",
    ranges: [
      {
        min: 1,
        max: 4
      }
    ],
    gameMode: [GameModeId.ANY]
  }
];

export const endCard = {
  title: "Fin de la partie",
  text:
    "La partie est finie ! Si vous tenez encore debout, n'hésitez pas à en démarrer une nouvelle",
  author: "Jules",
  nbPlayers: 0,
  color: "#b71540",
  nbOccurences: 1,
  gameMode: [GameModeId.ANY],
  end: true
};
