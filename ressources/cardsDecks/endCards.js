import { GameModeId } from "./../gameModes";
import { CardsColors } from "../../constants/Colors";

export default [
  {
    title: "Fin de la partie",
    text:
      "La partie est finie ! Si vous tenez encore debout, n'hésitez pas à en démarrer une nouvelle",
    author: "Jules",
    nbPlayers: 0,
    color: CardsColors.main,
    nbOccurences: 1,
    gameMode: [GameModeId.ANY],
    end: true
  }
];
