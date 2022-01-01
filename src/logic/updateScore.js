import adaptCategoryName from "./adaptCategoryName";
import activateFinalQuestion from "./activateFinalQuestion";

const updateScore = (category, isCorrect, playersCards, turn, fails, setScoreUpdated, numberOfPlayers) => {
  console.log(isCorrect);
  if (isCorrect === true) {
    const categoryToUpdate = adaptCategoryName(category).split(' ')[0]
    playersCards.current[turn - 1].records[categoryToUpdate] = isCorrect
  }

  if (isCorrect === false && numberOfPlayers === 1) fails.current += 1

  activateFinalQuestion(playersCards, turn)

  console.log('score updated');
  setScoreUpdated(true)
}

export default updateScore