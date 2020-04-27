import { questions, themes } from '../assets/questons.json';

export function shuffleArray(array) {
  const reordered = [...array];

  for (let i = reordered.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [reordered[i], reordered[j]] = [reordered[j], reordered[i]];
  }

  return reordered;
}

export function questionPicker() {
  const themesRandom = shuffleArray(themes);
  const questionsRandom = themesRandom.map((theme) => shuffleArray(questions[theme.key]));

  return () => {
    const theme = Math.floor(Math.random() * themesRandom.length);
    return [themesRandom[theme].title, questionsRandom[theme].shift()];
  };
}
