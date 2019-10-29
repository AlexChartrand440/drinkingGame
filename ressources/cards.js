import { GameModeId } from "./gameModes";
import { themesMain, paysCapitale, dumbQuestion } from "./cardDatas";
import { CardsColors } from "../constants/Colors";
export const PLAYER = "#PLAYER";
const NUMBER = "#NUMBER";
export const WORD = "#WORD";
export const QUESTION = "#QUESTION";
export const ANSWER = "#ANSWER";

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

const mainCard = [
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
  ,
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

const anyCard = [
  {
    title: "Tuboi",
    text: player(1) + " bois " + number(1) + " gorgées.",
    author: "Jules",
    nbPlayers: 1,
    nbOccurences: 4,
    color: CardsColors.averageDrinkAction,
    ranges: [
      {
        min: 1,
        max: 4
      }
    ],
    gameMode: [GameModeId.ANY]
  },
  {
    title: "Le roi des pouces",
    text:
      player(1) +
      " est désormais le roi des pouces. Chaque fois qu'il/elle met son pouce sur le menton, tous les joueurs doivent faire de même. \n" +
      "Le dernier à le faire boit 1 gorgée.",
    author: "Richard",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    effect: { isUnique: true, text: player(1) + " est le roi des pouces" },
    gameMode: [GameModeId.ANY]
  },
  {
    title: "J'ai dis PUUUTEUH",
    text:
      player(1) +
      " est la pute. \n" +
      "Elle doit boire les gorgées qui lui sont attribués par le Mac (aux conditions de sa règle). \n" +
      "Le Mac arrive !",
    author: "Etienne",
    nbPlayers: 5,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.ANY],
    effect: { text: player(1) + " est la pute", isUnique: true },
    followingCard: {
      title: "You're the best !",
      drawDelay: 1,
      text:
        player(2) +
        " est le mac. \n" +
        "Lorsqu'il reçoit une gorgée, il peut les donner à sa pute (Mais il doit toujours lui en rester au moins une).",
      effect: { text: player(2) + " est le mac", isUnique: true },
      author: "Etienne",
      color: CardsColors.game
    }
  },
  {
    title: "Le pouvoir de l'ivresse",
    text:
      "Ivre de pouvoir, " +
      player(1) +
      " choisi une victime qui devra boire " +
      number(1) +
      " gorgées",
    ranges: [
      {
        min: 1,
        max: 5
      }
    ],
    author: "Jules",
    nbPlayers: 2,
    nbOccurences: 4,
    color: CardsColors.averageDrinkAction,
    gameMode: [GameModeId.ANY]
  },
  {
    title: "Le jeu des marques ou thèmes",
    text:
      "Chaque joueur doit dire un mot en rapport avec le thème : " +
      WORD +
      " . Le jeu tourne dans le sens horaire. \n" +
      "Le premier joueur qui ne trouve pas assez vite ou qui reprend un élément déjà dit boit 2 gorgées. \n" +
      player(1) +
      " commence.",
    author: "Richard",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.ANY],
    words: themesMain
  },
  {
    title: "Le jeu des capitales",
    text:
      player(1) +
      " annonce une capitale ou un pays. \n" +
      "Le premier joueur à trouver le pays ou la capitale correspondante distribue 2 gorgées.",
    author: "Yann",
    nbPlayers: 2,
    nbOccurences: 3,
    color: CardsColors.game,
    gameMode: [GameModeId.ANY]
  },
  {
    title: "La reine des freeze",
    text:
      player(1) +
      ' est désormais la reine des freeze. Lorsque la reine des freeze dit "FREEZE", tous les joueurs doivent arrêter de bouger (y compris la Reine des freezes). \n' +
      "Le premier à bouger (Y compris la reine des freeze) boit 1 gorgée. ",
    author: "Jules",
    nbPlayers: 3,
    nbOccurences: 2,
    effect: { text: player(1) + " est la reine des freeze", isUnique: true },
    color: CardsColors.effect,
    gameMode: [GameModeId.ANY]
  },
  {
    title: "Ma bite ma chatte",
    text:
      "Chaque joueur doit dire un adjectif commençant par la lettre " +
      WORD +
      ', en commençant par "MA BITE EST" ou "MA CHATTE EST". \n' +
      "Le premier joueur à répeter un adjectif déjà dit, ou n'ayant plus d'idée boit 2 gorgées. \n" +
      player(1) +
      " commences.",
    words: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "L",
      "M",
      "N",
      "O",
      "P",
      "R",
      "S",
      "T",
      "U",
      "V"
    ],
    author: "Jules",
    nbPlayers: 3,
    nbOccurences: 3,
    color: CardsColors.game,
    gameMode: [GameModeId.ANY]
  },
  {
    title: "J'ai déjà",
    text:
      player(1) +
      " annonce quelque chose qu'il a déjà fait. \n" +
      "Tout ceux qui ne l'on jamais fait boivent " +
      number(1) +
      " gorgées",
    ranges: [
      {
        min: 2,
        max: 5
      }
    ],
    author: "Jules",
    nbPlayers: 3,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.ANY]
  },
  {
    title: "J'ai jamais",
    text:
      player(1) +
      " annonce quelque chose qu'il n'a jamais fait. \n" +
      "Tout ceux qui l'on déjà fait boivent " +
      number(1) +
      " gorgées",
    ranges: [
      {
        min: 2,
        max: 5
      }
    ],
    author: "Jules",
    nbPlayers: 3,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.ANY]
  },
  {
    title: "49:3",
    text:
      player(1) +
      " invente une règle qui prends effet iméditement et jusqu'à la fin de la partie \n",
    author: "Silab",
    nbPlayers: 2,
    nbOccurences: 1,
    color: CardsColors.effect,
    gameMode: [GameModeId.ANY],
    effect: { text: "Règle de " + player(1) }
  }
];

const hardcoreCards = [
  {
    title: "Aux frères tombés au combats",
    text:
      "Tous les joueurs trinques et prennes un shooter, en mémoire à leurs frères et soeurs tombés au combat.",
    author: "Ugo",
    nbPlayers: 3,
    nbOccurences: 1,
    color: CardsColors.hardDrinkAction,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "Souvomir Souvomir",
    text:
      player(1) +
      " nous racontes son meilleur vomis en soirée. Si les autres joueurs trouvent que c'est une belle action, tout le monde trinque et bois une gorgée",
    author: "Richard",
    nbPlayers: 3,
    nbOccurences: 2,
    color: CardsColors.averageDrinkAction,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "Nos pires batailles",
    text:
      player(1) +
      " nous racontes la plus grosse connerie qu'il ait faites en soirée. Si les autres joueurs trouvent que c'est une bonne histoire, tout le monde trinque et bois une gorgée",
    author: 3,
    nbPlayers: 3,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "L'amour fou",
    text:
      player(1) +
      " et " +
      player(2) +
      " s'aiment d'un amour sans limite. \n" +
      "Et puisque qu'aimer, c'est multiplier le bonheur... Il en vas de même avec l'alcool ! \n" +
      "Lorsque l'un des deux joueurs se voit attribuer une gorgée par le jeu, l'autre doit prendre le même nombre de gorgées. (Fonctionne pour les culs secs et shooter)",
    author: "Jimmy",
    nbPlayers: 3,
    nbOccurences: 1,
    effect: {
      text: player(1) + " et " + player(2) + " sont liés.",
      isUnique: true
    },
    color: CardsColors.averageDrinkAction,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "Le fan",
    text:
      player(1) +
      " est fan de " +
      player(2) +
      ". Il l'imite et boit comme lui. (Fonctionne pour les culs secs et shooter)",
    author: "Jimmy",
    nbPlayers: 3,
    nbOccurences: 2,
    effect: { text: player(1) + " est fan de " + player(2) },
    color: CardsColors.effect,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "La salope ",
    text:
      player(1) +
      " devient la salope jusqu'à nouvel ordre. \n " +
      "De ce fait, lorsqu'il/elle s'adresse à un autre joueur, ce dernier devra, avant de lui répondre, lui dire : \"Ferme ta gueule salope!\". \n" +
      "En cas d'oubli, le joueur prend une gorgée.",
    author: "Jules",
    nbPlayers: 2,
    nbOccurences: 1,
    color: CardsColors.effect,
    effect: { text: player(1) + " est la salope", isUnique: true },
    gameMode: [GameModeId.HARDCORE],
    followingCard: {
      drawDelay: 5,
      title: "Le pardon",
      text:
        player(1) +
        " n'est plus la salope !. \n" +
        "Si aucun joueur n'a bu à cause de la salope, cette dernière prends 3 gorgées",
      effect: { removeParentEffect: true },
      author: "Jules",
      color: CardsColors.effect
    }
  },
  {
    title: "La légion étrangère",
    text:
      "Tous les joueurs ayant déjà vomis à l'étranger boivent " +
      number(1) +
      " gorgées.",
    ranges: [
      {
        min: 3,
        max: 6
      }
    ],
    author: "Jules",
    nbPlayers: 3,
    nbOccurences: 1,
    color: CardsColors.averageDrinkAction,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "SHOT SHOT SHOT SHOT SHOT",
    text:
      player(1) +
      " à très soif ! Il boit 1 cul sec (ou shooter), car l'alcool, c'est de l'eau",
    author: "Ugo",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.hardDrinkAction,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "Bang Bang, you shot me down",
    text:
      player(1) +
      " se sent d'humeur généreuse. Il distribue 1 cul sec (ou shooter).",
    author: "Ugo",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.hardDrinkAction,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "Le shot-fu-mi",
    text:
      player(1) +
      " et " +
      player(2) +
      " doivent faire un shifumi et designer d'avance le gagnant. \n" +
      "Si le résultat est le bon, ils distribuent chacun un shot à la personne de leur choix. S'ils perdent ils prennent un shot chacun.",
    author: "Pierre",
    nbPlayers: 3,
    nbOccurences: 2,
    color: CardsColors.averageDrinkAction,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "La liaison covalente",
    text:
      player(1) +
      " et " +
      player(2) +
      " partagent maintenant des électrons. Un verre commun va leur être servi et ils doivent le finir avant un de leur verres" +
      " respectifs. \n" +
      " S'ils ne le finissent pas à temps, ils prennent un shot chacun." +
      player(3) +
      " est chargé de servir le verre commun",
    author: "Pierre",
    nbPlayers: 3,
    nbOccurences: 1,
    effect: {
      text: player(1) + " et " + player(2) + " partage une liason covalente"
    },
    color: CardsColors.effect,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "Le barman",
    text:
      player(1) +
      " se sent inspiré et décide de s'improviser barman pour le jeu ! Dès qu'un verre est vide, le barman le remplit en le chargeant selon son envie.",
    author: "Mathias",
    nbPlayers: 2,
    nbOccurences: 1,
    color: CardsColors.effect,
    effect: { text: player(1) + " est le barman", isUnique: true },
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "Frère d'arme",
    text:
      player(1) +
      " désigne un frère d'arme qui devra prendre un shooter avec toi.",
    author: "Ugo",
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.hardDrinkAction,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "La confiance aveugle",
    text:
      "Les joueurs doivent désigner le joueur qu'ils pensent être le plus saoul. Ce dernier devra servir un shooter pour " +
      player(1),
    author: "Ugo",
    nbPlayer: 4,
    nbOccurences: 1,
    color: CardsColors.hardDrinkAction,
    gameMode: [GameModeId.HARDCORE]
  },
  {
    title: "Le kamikaze",
    text:
      player(1) +
      " bois le nombre de gorgées/shots de sont choix. Il choisi un joueur qui les boiera avec lui.",
    nbPlayer: 4,
    nbOccurences: 1,
    color: CardsColors.hardDrinkAction,
    gameMode: [GameModeId.HARDCORE]
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
      "la plus alcoolique",
      "la plus succeptible de vomir ce soir",
      "la plus schlag",
      "la plus enclin à prendre des shooters",
    ],
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.HARDCORE]
  }
];

const dumbCards = [
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
  ,
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
      "la plus enclin à prendre des shooters",
    ],
    nbPlayers: 2,
    nbOccurences: 2,
    color: CardsColors.game,
    gameMode: [GameModeId.DUMB]
  }
];

export const endCard = {
  title: "Fin de la partie",
  text:
    "La partie est finie ! Si vous tenez encore debout, n'hésitez pas à en démarrer une nouvelle",
  author: "Jules",
  nbPlayers: 0,
  color: CardsColors.main,
  nbOccurences: 1,
  gameMode: [GameModeId.ANY],
  end: true
};

export default [...anyCard, ...mainCard, ...hardcoreCards, ...dumbCards];
