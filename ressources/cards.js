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
      "Interdit de dire le mot boire, \n" +
      "Interdit de dire de gros mot, \n" +
      "Interdit de montrer du doigt. \n" +
      " Tout manquement à l'une de ces règles est punis d'une gorgée.",
    author: "Jules",
    color: "#3c6382",
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
    color: "#2980b9",
    gameMode: [GameModeId.ANY]
  }
];

const defaultCard = [
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
  },
  {
    title: "Le Bad Plot",
    text:
      player(1) +
      "doit raconter un scénario de film le plus mal possible (tout en ne disant que des choses vraies) pendant 1 minutes. \n" +
      "Si personne ne trouve, tout le monde boit une gorgée sauf " +
      player(1) +
      "\n" +
      "Si le film est trouvé, " +
      player(1) +
      " boit 3 gorgées.",
    author: "Pierre",
    nbPlayers: 2,
    nbOccurences: 4,
    color: "#2ecc71",
    gameMode: [GameModeId.ANY]
  },
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
    color: "#2ecc71",
    gameMode: [GameModeId.ANY]
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
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  },
  {
    title: "Le comité des anciens nazis",
    text:
      "Depuis combien d'années " +
      player(1) +
      " et " +
      player(2) +
      " se connaissent-ils ? Ils boivent le nombre d'année en gorgées (1 gorgée minimum). \n" +
      " S'ils racontent leur rencontre, ils choissent un joueur qui boira avec eux.",
    author: "Pierre",
    nbPlayers: 3,
    nbOccurences: 2,
    gameMode: GameModeId.ANY
  },
  {
    title: "La liaison covalente",
    text:
      player(1) +
      " et " +
      player(2) +
      " partagent maintenant des électrons. Ils doivent se servir un verre commun et le finir avant un de leur verres respectifs. \n" +
      " S'ils ne le finissent pas à temps, ils prennent un shot chacun.",
    author: "Pierre",
    nbPlayers: 3,
    nbOccurence: 1,
    color: "#2980b9",
    gameMode: GameModeId.ANY
  },
  {
    title: "Le Mix'n'Twist",
    text:
      "Chaque joueur à 5 secondes pour trouver 2 ingrédients bons séparément mais mauvais si mixés ensemble. \n" +
      "Le jeu tourne dans le sens horaire. \n" +
      "Le premier joueur à ne pas trouver dans le temps imparti ou à reprendre un ingrédient précédemment dit boit 2 gorgées. " +
      player(1) +
      "commence.",
    author: "Pierre",
    nbPlayers: 2,
    nbOccurence: 2,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  },
  {
    title: "Le barman",
    text:
      player(1) +
      " se sent inspiré et décide de s'improviser barman pour le jeu ! Dès qu'un verre est vide, le barman le remplit en le chargeant selon son envie.",
    author: "Mathias",
    nbPlayers: 2,
    nbOccurences: 1,
    color: "#2980b9",
    gameMode: GameModeId.ANY
  },
  {
    title: "La réplique",
    text:
      player(1) +
      " sort une réplique de film, le premier joueur qui trouve le film donne " +
      number(1) +
      " gorgées . Si personne ne trouve (ou fait semblant de ne pas trouver) " +
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
    nbOccurences: 4,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
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
    color: "#2980b9",
    gameMode: GameModeId.ANY
  },
  {
    title: "Le mot le plus long",
    text:
      "Chaque joueur doit dire une lettre qui, à la suite des lettres précédentes, forme un mot. Le joueur qui ne trouve pas bois " +
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
    color: "#2ecc71",
    gameMode: GameModeId.ANY
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
    author: "Pierre",
    nbPlayers: 2,
    nbOccurences: 2,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  },
  {
    title: "J'ai dis PUUUTEUH",
    text:
      player(1) +
      "est la pute. \n" +
      "Elle doit boire les gorgées qui lui sont attribués par le Mac (aux conditions de sa règle). \n" +
      "S'il n'y a pas encore de Mac, prépare toi, il arrive.",
    author: "Etienne",
    nbPlayers: 3,
    nbOccurences: 2,
    color: "#2980b9",
    gameMode: GameModeId.ANY
  },
  {
    title: "You're the best !",
    text:
      player(1) +
      " est le mac. \n" +
      "Lorsqu'il reçoit une gorgée, il peut les donner à sa pute (Mais il doit toujours lui en rester au moins une). \n " +
      "S'il n'a pas encore de pute, soit patient !",
    author: "Etienne",
    nbPlayers: 3,
    nbOccurences: 2,
    color: "#2980b9",
    gameMode: GameModeId.ANY
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
    color: "#f1c40f",
    gameMode: GameModeId.ANY
  },
  ,
  {
    title: "SHOT SHOT SHOT SHOT SHOT",
    text:
      player(1) +
      " à très soif ! Il boit 1 cul sec (ou shooter), car l'alcool, c'est de l'eau",
    author: "Ugo",
    nbPlayers: 2,
    nbOccurences: 2,
    color: "#e67e22",
    gameMode: GameModeId.ANY
  },
  {
    title: "Bang Bang, you shot me down",
    text:
      player(1) +
      " se sent d'humeur généreuse. Il distribue 1 cul sec (ou shooter).",
    author: "Ugo",
    nbPlayers: 2,
    nbOccurences: 2,
    color: "#e67e22",
    gameMode: GameModeId.ANY
  },
  {
    title: "Les Pourparlers",
    text:
      "Le conseil des joueurs choisit 2 mots sans rapport apparent. \n" +
      player(1) +
      " à 15 secondes pour relier les deux mots avec des associations logiques. \n" +
      " S'il réussit, il distribue 2 gorgées, s'il perd, il en prend 3.",
    author: "Pierre",
    nbPlayers: 5,
    nbOccurences: 2,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  },
  {
    title: "Le Trader",
    text:
      player(1) +
      " choisit 2 devises. Les autres joueurs doivent estimer la valeur de l'une par rapport à l'autre. \n" +
      "Le joueur le plus proche du résultat donne 4 gorgée.",
    author: "Pierre",
    nbPlayers: 3,
    nbOccurences: 1,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  },
  {
    title: "Le chef d'orchestre",
    text:
      player(1) +
      " doit mimer la chanson de son choix. Il a 30 secondes pour la faire deviner. \n" +
      "Si la chanson est retrouvée, " +
      player(1) +
      " et la personne ayant trouvé distribuent 2 gorgées chacun. S'il perd, il en boit 1. \n" +
      "(Il y a une pénalité de 3 gorgées par bruit émis par " +
      player(1) +
      " pendant le temps du mime)",
    author: "Pierre",
    nbPlayers: 2,
    nbOccurence: 4,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  },
  {
    title: "Le jeu des marques ou thèmes",
    text:
      "Chaque joueur doit dire un mot en rapport avec la marque ou le thème choisi. Le jeu tourne dans le sens horaire. \n" +
      "Le premier joueur qui ne trouve pas dans le temps imparti ou qui reprend un élément déjà dit boit 2 gorgées. \n" +
      player(1) +
      " commence et choisit la marque ou le thème.",
    author: "Richard",
    nbPlayers: 2,
    nbOccurences: 4,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
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
    color: "#2ecc71",
    gameMode: GameModeId.ANY
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
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  },
  {
    title: "La salope ",
    text:
      player(1) +
      " devient la salope jusqu'à la fin de la partie. \n " +
      "De ce fait, lorsqu'il s'adresse à un autre joueur, ce dernier devra, avant de lui répondre, lui dire : \"Ferme ta gueule salope!\". \n" +
      "En cas d'oubli, le joueur prend une gorgée.",
    author: "Jules",
    nbPlayers: 2,
    nbOccurences: 1,
    color: "#2980b9",
    gameMode: GameModeId.ANY
  },
  {
    title: "La reine des freeze",
    text:
      player(1) +
      ' est désormais la reine des freeze. Lorsque la reine des freeze dit "FREEZE", tous les joueurs doivent arrêter de bouger (y compris la Reine des freezes). \n' +
      "Le premier à bouger (Y compris la reine des freeze) boit 1 gorgée. ",
    author: "Jules",
    nbPlayers: 3,
    nbOccurences: 3,
    color: "#2980b9",
    gameMode: GameModeId.ANY
  },
  {
    title: "Ma bite ma chatte",
    text:
      player(1) +
      " récite l'alphabet dans sa tête. \n" +
      "Lorsque le joueur à sa gauche lui dit stop, il annonce la lettre sur laquelle il était. \n" +
      'Chaque joueur doit ensuite dire un adjectif commençant par la lettre annoncée, en commençant par "MA BITE EST" ou "MA CHATTE EST". \n' +
      "Le premier joueur à répeter un adjectif déjà dit, ou n'ayant plus d'idée boit 2 gorgées.",
    author: "Jules",
    nbPlayers: 3,
    nbOccurences: 3,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
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
    color: "#2980b9",
    gameMode: GameModeId.ANY
  },
  {
    title: "Le fan",
    text:
      player(1) +
      " est fan de " +
      player(1) +
      ". Il l'imite et boit comme lui. (Fonctionne pour les culs secs et shooter)",
    author: "Jimmy",
    nbPlayers: 3,
    nbOccurences: 2,
    color: "#2980b9",
    gameMode: GameModeId.ANY
  },
  {
    title: "I'm a Wild Men",
    text:
      player(1) +
      " donne un nom d'animal. " +
      player(2) +
      " boit autant de gorgées qu'il y a de syllabe dans le nom de l'animal sus-mentionné. Si " +
      player(1) +
      " donne un nom d'animal ayant déjà été donné au préalable, ce sera lui qui devra boire les gorgées.",
    author: "Jimmy",
    nbPlayers: 2,
    nbOccurences: 2,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  },
  {
    title: "You're the luckyone",
    text:
      player(1) +
      " dispose désormais d'une carte de protection. Cette dernière est à usage unique, et lui permet de changer la cible d'une carte dont il est victime.",
    author: "Jimmy",
    nbPlayers: 2,
    nbOccurences: 2,
    color: "#1abc9c",
    gameMode: GameModeId.ANY
  },
  {
    title: "Action/Vérité",
    text:
      "Retour en enfance ! " +
      player(1) +
      " lance un Action/Vérite à " +
      player(1) +
      ". S'il refuse de faire l'action ou de répondre à la question, il boit 5 gorgées.",
    author: "Ugo",
    nbPlayers: 2,
    nbOccurences: 1,
    gameMode: GameModeId.ANY
  },
  {
    title: "Le suceur",
    text:
      player(1) +
      " devient le suceur. À chaque fois qu'il fait un compliment à quelqu'un, la personne complimentée boit une gorgée. Aussi, à chaque compliment, " +
      player(1) +
      " boit une gorgée, pour faire passer le goût.",
    author: "Pierre",
    nbPlayers: 3,
    nbOccurences: 2,
    color: "#2980b9",
    gameMode: GameModeId.ANY
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
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  },
  {
    title: "Marque ou thème ",
    text:
      "Chaque joueur à tour de rôle doit dire un mot en rapport avec le thème choisi par " +
      player(1) +
      ". Le joueur qui ne trouve pas ou se trompe boit 3 gorgées. \n" +
      player(1) +
      "commence.",
    author: "Silab",
    nbPlayers: 2,
    nbOccurences: 2,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  },
  {
    title: "L'ostracisme",
    text:
      "Pour les 5 prochaines cartes, " +
      player(1) +
      " n'a pas le droit de parler sauf si une question lui est directement posé par un autre joueur. \n" +
      "Si il venait à prendre la parole sans en avoir le droit il devra prendre 2 gorgées par intenvention non autorisée.",
    author: "Silab",
    nbPlayers: 2,
    nbOccurence: 1,
    color: "#2ecc71",
    gameMode: GameModeId.ANY
  }
];
const hardcoreCards = [
  {
    title: "Le sprint",
    text:
      player(1) +
      " est un grand sportif ! Il doit prendre un mètre de shooter." +
      "S'il préfère les courses de relais, il peux choisir un compagnon avec qui partager ces shooters !",
    author: "Ugo",
    nbPlayers: 3,
    nbOccurences: 1,
    color: "#e74c3c",
    gameMode: [GameModeId.HARDCORE]
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

export default [...defaultCard, ...hardcoreCards];
