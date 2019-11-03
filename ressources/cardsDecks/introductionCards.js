import { GameModeId } from "./../gameModes";
import { CardsColors } from "../../constants/Colors";
import { player } from "./cardDatas";
export default [
  {
    title: "Bienvenue",
    text:
      "Bienvenue dans Alcolol, un jeu dont le but est de vous aider à vous enivrer dans vos soirées. \n" +
      "Ceci est une version de test, si vous rencontrez des erreurs, n'hésitez pas à les rapporter \n" +
      "(Mail disponible sur le Play Store) !",
    author: "Jules",
    color: CardsColors.main,
    nbPlayers: 0,
    nbOccurences: 1,
    gameMode: [GameModeId.ANY]
  },
  {
    title: "Les règles de bases",
    text:
      "Si vous souhaitez rendre le jeu plus drôle, ajoutez ces règles de base :\n" +
      "Interdit de dire le mot boire (à l'expection de la lecture des cartes), \n" +
      "Interdit de dire de gros mot, \n" +
      "Interdit de montrer du doigt. \n" +
      "Tout manquement à l'une de ces règles est punis d'une gorgée.",
    author: "Jules",
    color: CardsColors.main,
    nbPlayers: 0,
    nbOccurences: 1,
    gameMode: [GameModeId.ANY]
  },
  {
    title: "Le conseil des joueurs",
    texts: [
      {
        range: {
          min: 5,
          max: 6
        },
        value:
          player(1) +
          " et " +
          player(2) +
          " sont maintenant membre du conseil des joueurs.\n" +
          "Ils seront en charge de régler tout litige au cours de la partie. \n" +
          "A partir de maintenant, la loi, c'est eux !",
        effect: {
          text:
            player(1) +
            " et " +
            player(2) +
            " sont membre du conseil des joueurs."
        }
      },
      {
        range: {
          min: 7
        },
        value:
          player(1) +
          ", " +
          player(2) +
          " et " +
          player(3) +
          " sont maintenant membre du conseil des joueurs.\n" +
          "Ils seront en charge de régler tout litige au cours de la partie. \n" +
          "A partir de maintenant, la loi, c'est eux !",
        effect: {
          text:
            player(1) +
            ", " +
            player(2) +
            " et " +
            player(3) +
            " sont membre du conseil des joueurs. "
        }
      }
    ],
    author: "Jules",
    nbPlayers: 5,
    nbOccurences: 1,
    color: CardsColors.effect,
    gameMode: [GameModeId.ANY]
  }
];
