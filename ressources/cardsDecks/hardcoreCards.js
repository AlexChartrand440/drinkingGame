import { GameModeId } from "./../gameModes";
import { CardsColors } from "../../constants/Colors";
import { player, number, WORD } from "./cardDatas";

export default [
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