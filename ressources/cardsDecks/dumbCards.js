import { GameModeId } from "./../gameModes";
import { CardsColors } from "../../constants/Colors";
import {
  dumbQuestion,
  player,
  number,
  WORD,
  QUESTION,
  ANSWER
} from "./cardDatas";

export default [
  {
    title: "Dumb Unit Test",
    text:
      "Chaque joueur doit répondre à la question suivante : " +
      QUESTION +
      " \n" +
      "Interdit de chercher sur internet ! Un shooter en cas de tentatriche !\n" +
      "Suite à la prochaine carte !",
    author: "Pierre",
    nbPlayers: 2,
    nbOccurences: 3,
    color: CardsColors.game,
    gameMode: [GameModeId.DUMB],
    followingCard: {
      title: "Dumb Unit Test : La solution",
      drawDelay: 1,
      text:
        " La réponse était : " +
        ANSWER +
        ". \n" +
        "Si quelqu'un à eu la réponse exact, il distribue un shooter \n " +
        "Sinon, la personne la plus proche de la réponse distribue 3 gorgées",
      author: "Etienne",
      color: CardsColors.game
    },
    questions: dumbQuestion
  },
  {
    title: "Jean-Michel à peu près",
    text:
      player(1) +
      " doit chanter/parler une chanson connue en n'utilisant que des synonymes (où en la traduisant depuis l'anglais)." +
      " Il à 1 minute pour la faire deviner. \n" +
      player(1) +
      " ainsi que le premier joueur ayant trouvé la chanson distribuent chacun 3 gorgées. \n" +
      "Si personne ne trouve la chanson, " +
      player(1) +
      " bois 3 gorgées ",
    author: "Pierre",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    timer: 60,
    gameMode: [GameModeId.DUMB]
  },
  {
    title: "Joe l'acrobate",
    text:
      player(1) +
      " doit " +
      WORD +
      ".\n" +
      "S'il n'y arrive pas, il boit 3 gorgées !!",
    words: [
      "toucher son nez avec son doigt, le tout en passant son bras sous sa jambe",
      "lecher son nez",
      "lecher son coude"
    ],
    author: "Thibault",
    color: CardsColors.game,
    nbPlayers: 1,
    nbOccurences: 2,
    gameMode: [GameModeId.DUMB]
  },
  {
    title: "Joke d'alcolo",
    text:
      player(1) +
      " et " +
      player(2) +
      " s'affrontent dans un concours de blague. Chacun leur tour, ils racontent une blague. Le premier à rire ou n'ayant plus de blague à raconter boit " +
      number(1) +
      " gorgées. " +
      player(2) +
      " commence.",
    ranges: [
      {
        min: 3,
        max: 5
      }
    ],
    author: "Richard",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.DUMB]
  },
  {
    title: "Le suceur",
    text:
      player(1) +
      " devient le suceur. À chaque fois qu'il fait un compliment à quelqu'un, la personne complimentée boit une gorgée.\n Aussi, à chaque compliment, " +
      player(1) +
      " boit une gorgée, pour faire passer le goût.",
    author: "Pierre",
    nbPlayers: 3,
    effect: { isUnique: true, text: player(1) + " est le suceur" },
    nbOccurences: 2,
    color: CardsColors.effect,
    gameMode: [GameModeId.DUMB]
  },
  {
    title: "Les Pourparlers",
    text:
      player(2) +
      " et " +
      player(3) +
      " choisissent 2 mots sans rapport apparent. \n" +
      player(1) +
      " à 15 secondes pour relier les deux mots avec des associations logiques (Cela doit faire du sens). \n" +
      " S'il réussit, il distribue 2 gorgées, s'il perd, il en prend 3.",
    author: "Pierre",
    timer: 15,
    nbPlayers: 5,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.DUMB]
  },
  {
    title: "I'm a Wild Men",
    text:
      player(1) +
      " donne un nom d'animal.\n" +
      player(2) +
      " boit autant de gorgées qu'il y a de syllabe dans le nom de l'animal sus-mentionné.\n Si " +
      player(1) +
      " donne un nom d'animal ayant déjà été donné au préalable, ce sera lui qui devra boire les gorgées.",
    author: "Jimmy",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.DUMB]
  },
  {
    title: "GO GO GO",
    text:
      "Le premier joueur qui " +
      WORD +
      " distribue " +
      number(1) +
      " gorgées.\n" +
      "Si personne ne le fait, tout le monde bois 1 gorgées.",
    words: [
      "lêche le pied de son voisin de droite",
      "prend une photo de ses trous de nez",
      "met une chaussure sur sa tête",
      "met sa main dans la poche de son voisin de gauche"
    ],
    ranges: [
      {
        min: 3,
        max: 5
      }
    ],
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.DUMB]
  },
  {
    title: "Avec des scies...",
    text:
      player(1) +
      " si " +
      WORD +
      ", bois " +
      number(1) +
      "gorgées.\n" +
      "Sinon, distribue les.",
    ranges: [
      {
        min: 2,
        max: 5
      }
    ],
    words: [
      "tu as déjà redoublé",
      "tu penses que tu es le plus intelligent de la soirée",
      "tu t'es déjà pris une vitre",
      "tu penses que ton voisin de droite est plus beau que toi"
    ],
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.DUMB]
  },
  {
    title: "Tu prefères",
    text:
      player(1) +
      " tu prefères " +
      WORD +
      "\n. Si tu n'arrives pas à répondre, tu bois 3 gorgées.",
    words: [
      "t'asseoir sur un penis et manger un gateau ou t'asseoir sur un gateau et manger un penis ?",
      "coucher avec ta mère ou coucher avec ton père",
      "passer un oral complètement nu devant des inconnus ou devoir aller une journée au travail complètement nu"
    ],
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.DUMB]
  },
  {
    title: "Designez le !",
    text:
      "Au top, les joueurs désignent du doigt la personne " +
      WORD +
      "La personne désigné à la majorité boit " +
      number(1) +
      " gorgées",
    ranges: [
      {
        min: 2,
        max: 5
      }
    ],
    words: [
      "la plus intelligente",
      "la plus chaude",
      "la mieux foutue",
      "la mieux membrées",
      "la plus enclin à prendre des shooters"
    ],
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.DUMB]
  }
];
