import { themesMain, player, number, WORD } from "./cardDatas";
import { GameModeId } from "./../gameModes";
import { CardsColors } from "../../constants/Colors";

export default [
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