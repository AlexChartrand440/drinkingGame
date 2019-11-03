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

export const themesMain = [
  "Les marques de cigarettes",
  "Les marques de sous-vêtement",
  "Les marques d'ordinateur",
  "Noms de jeux vidéos",
  "Les marques de téléphone",
  "Les clichés sur les parisiens",
  "Les clichés sur les provinciaux",
  "Les marques de voiture",
  "Les marques de cosmetiques",
  "Les marques de boisson alcoolisées",
  "Les noms de médicaments"
];

export const dumbQuestion = [
  {
    question:
      "Quelle est la longueur de 4 Canard colvert en fil indienne ? (En centimètres)",
    answer: "230cm"
  },
  {
    question:
      "Quelle taille peut atteindre le penis d'une baleine ? (En centimètres)",
    answer: "240cm"
  },
  {
    question:
      "Combien d'Emmanuel Macron faudrait-il empiler pour relier la terre à la lune ?",
    answer: "217 175 141"
  }
];
