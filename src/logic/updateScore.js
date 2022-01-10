import adaptCategoryName from "./adaptCategoryName";
import activateFinalQuestion from "./activateFinalQuestion";

const updateScore = (category, isCorrect, playersCards, turn, fails, numberOfPlayers, nextPlayer) => {
  if (isCorrect === true) {
    const categoryToUpdate = adaptCategoryName(category).split(' ')[0]
    playersCards.current[turn.current - 1].records[categoryToUpdate] = isCorrect
  }

  if (isCorrect === false && numberOfPlayers === 1) fails.current += 1
  if (isCorrect === false && numberOfPlayers > 1) nextPlayer()

  activateFinalQuestion(playersCards, turn)

  console.log('score updated');
}

export default updateScore