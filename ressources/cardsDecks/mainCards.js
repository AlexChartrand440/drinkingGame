import { GameModeId } from "./../gameModes";
import { CardsColors } from "../../constants/Colors";
import { player, number, WORD } from "./cardDatas";

export default [
  {
    title: "Le Shifumi",
    text:
      "Les regards de " +
      player(1) +
      " et " +
      player(2) +
      " se sont croisés. C'est l'heure du duel ! Ils s'affrontent au Shifumi (Premier à deux points). Le perdant boit " +
      number(1) +
      " gorgées.",
    author: "Richard",
    nbPlayers: 2,
    nbOccurences: 2,
    ranges: [
      {
        min: 2,
        max: 4
      }
    ],
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "Le comité des anciens nazis",
    text:
      "Depuis combien d'années " +
      player(1) +
      " et " +
      player(2) +
      " se connaissent-ils ? Ils partagent entre eux le nombre d'année en gorgées (1 gorgée minimum). \n" +
      " S'ils racontent leur rencontre, ils choissent un joueur qui boira avec eux.",
    author: "Pierre",
    nbPlayers: 3,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN, GameModeId.HARDCORE]
  },
  {
    title: "Le mot le plus long",
    text:
      "Chaque joueur doit dire une lettre qui, à la suite des lettres précédentes, forme le debut d'un mot ou un mot complet. " +
      "Le joueur qui ne trouve pas bois " +
      number(1) +
      " gorgées. " +
      player(1) +
      " commence.",
    ranges: [
      {
        min: 2,
        max: 4
      }
    ],
    author: "Yann",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "Le Mix'n'Twist",
    text:
      "Chaque joueur à 5 secondes pour trouver 2 ingrédients bons séparément mais mauvais si mixés ensemble. \n" +
      "Le jeu tourne dans le sens horaire. \n" +
      "Le premier joueur à ne pas trouver dans le temps imparti ou à reprendre un ingrédient précédemment dit boit 2 gorgées. " +
      player(1) +
      " commence.",
    author: "Pierre",
    nbPlayers: 2,
    nbOccurences: 2,
    timer: 5,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "Le chef d'orchestre",
    text:
      player(1) +
      " doit mimer la chanson de son choix. Il a 30 secondes pour la faire deviner. \n" +
      "Si la chanson est retrouvée, " +
      player(1) +
      " et la personne ayant trouvé distribuent 2 gorgées chacun. Sinon il en boit 1. \n" +
      "(Il y a une pénalité de 3 gorgées par bruit émis par " +
      player(1) +
      " pendant le temps du mime)",
    author: "Pierre",
    nbPlayers: 2,
    nbOccurences: 2,
    timer: 30,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "You're the luckyone",
    text:
      player(1) +
      " dispose désormais d'une carte de protection. Cette dernière est à usage unique, et lui permet de changer la cible d'une carte dont il est victime.",
    author: "Jimmy",
    nbPlayers: 2,
    nbOccurences: 2,
    effect: {
      text: player(1) + " dispose d'une carte de protection",
      isUsable: true
    },
    color: CardsColors.goodEffet,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "La réplique",
    text:
      player(1) +
      " sort une réplique de film. Le premier joueur qui trouve le film donne " +
      number(1) +
      " gorgées . \nSi personne ne trouve (ou fait semblant de ne pas trouver) " +
      player(1) +
      " boit " +
      number(1) +
      " gorgées.",
    ranges: [
      {
        min: 2,
        max: 4
      }
    ],
    author: "Mathias",
    nbPlayers: 3,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "L'ostracisme",
    text:
      "Jusqu'à nouvel ordre, " +
      player(1) +
      " n'a pas le droit de parler sauf si une question lui est directement posé par un autre joueur. \n" +
      "Si il venait à prendre la parole sans en avoir le droit il devra prendre 1 gorgées par intenvention non autorisée.",
    author: "Silab",
    nbPlayers: 2,
    nbOccurences: 1,
    color: CardsColors.effect,
    gameMode: [GameModeId.MAIN],
    effect: { text: player(1) + " n'a plus de droit de parler" },
    followingCard: {
      title: "La rébélion",
      text:
        player(1) +
        " peux désormais parler même si aucune question ne lui à été posé",
      drawDelay: 6,
      author: "Etienne",
      effect: { removeParentEffect: true },
      color: CardsColors.effect
    }
  },
  {
    title: "Le Bad Plot",
    text:
      player(1) +
      " doit raconter un scénario de film le plus mal possible (tout en ne disant que des choses vraies) pendant 1 minutes. \n" +
      "Si personne ne trouve, tout le monde boit une gorgée sauf " +
      player(1) +
      "\n" +
      "Si le film est trouvé, " +
      player(1) +
      " boit 3 gorgées.",
    author: "Pierre",
    nbPlayers: 2,
    nbOccurences: 3,
    timer: 60,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "Jeu de la chanson",
    text:
      "A tour de rôle, les joueurs doivent chanter un extrait d'une chanson contenant un mot choisi par " +
      player(1) +
      ".\n" +
      " Si le joueur ne trouve pas de chansons ou se trompe, il prends 3 gorgées. " +
      player(1) +
      " commence.",
    author: "Silab",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "Le Mara(dic)thon",
    text:
      player(1) +
      " a 5 secondes pour citer un dicton/expression. \n" +
      "Le jeu tourne dans le sens horaire. \n" +
      "Le premier joueur à ne pas trouver dans le temps imparti ou à reprendre une phrase précédemment dite boit " +
      number(1) +
      " gorgées.",
    ranges: [
      {
        min: 2,
        max: 4
      }
    ],
    timer: 5,
    author: "Pierre",
    nbPlayers: 1,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "Action/Vérité",
    text:
      "Retour en enfance ! " +
      player(1) +
      " lance un Action/Vérite à " +
      player(2) +
      ". S'il/elle refuse de faire l'action ou de répondre à la question, il/elle boit 5 gorgées.",
    author: "Ugo",
    nbPlayers: 2,
    nbOccurences: 1,
    gameMode: [GameModeId.MAIN],
    color: CardsColors.game
  },
  {
    title: "Fait le !",
    text:
      player(1) + " doit " + WORD + ".\n" + "S'il refuse, il boit 3 gorgées !",
    words: [
      "ajouter du sel dans son verre",
      "manger la première choise qu'on lui donnera",
      "ajouter un diluant dans son verre"
    ],
    author: "Thibault",
    color: CardsColors.game,
    nbPlayers: 1,
    nbOccurences: 2,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "GO GO GO",
    text:
      "Le premier joueur qui " +
      WORD +
      " distribue " +
      number(1) +
      " gorgées\n" +
      "Si personne ne le fait, tout le monde bois 1 gorgées.",
    words: [
      "trouve un briquet",
      "ajoute un diluant dans son verre",
      "se lève",
      "touche une ampoule"
    ],
    ranges: [
      {
        min: 2,
        max: 4
      }
    ],
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "Le coupable",
    text:
      "Le dernier joueur  " +
      WORD +
      " bois " +
      number(1) +
      " gorgées\n" +
      "Si cela ne concernes personne, tout le monde bois 1 gorgées.",
    words: [
      "ayant été aux toilettes",
      "ayant fumé une cigarette",
      "ayant volé un briquet",
      "ayant dansé",
      "s'étant servi un verre",
      "arrivé à la soirée"
    ],
    ranges: [
      {
        min: 2,
        max: 3
      }
    ],
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "Avec des scies...",
    text:
      player(1) +
      " si " +
      WORD +
      ", bois " +
      number(1) +
      "\n" +
      "Sinon, distribue les.",
    ranges: [
      {
        min: 2,
        max: 5
      }
    ],
    words: [
      "la soirée se passe chez toi",
      "tu penses que ton voisin de droite ne bois pas assez",
      "tu es fumeur",
      "tu comptes te mettre minable ce soir"
    ],
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  },
  {
    title: "Battle de dance",
    text:
      player(1) +
      " et " +
      player(2) +
      " nous montrent leurs plus beaux pas de dance. Le plus aimé du publique donnes 3 gorgées" +
      ". 5 gorgées en cas de refus",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
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
        min: 1,
        max: 3
      }
    ],
    words: [
      "la plus bordélique",
      "la plus mélomane",
      "la plus fleur bleue",
      "la plus aventurière",
      "la plus droguée",
      "la plus junkie",
      "la moins sociable"
    ],
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.MAIN]
  }
];
