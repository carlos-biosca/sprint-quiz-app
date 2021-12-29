import adaptCategoryName from "./adaptCategoryName";

const updateScore = (category, isCorrect, playersCards, turn, fails, setScoreUpdated, numberOfPlayers) => {
  if (isCorrect === true) {
    let newCards = [...playersCards.current]
    let categoryToUpdate = adaptCategoryName(category).split(' ')[0]
    newCards[turn - 1].records[categoryToUpdate] = isCorrect
    playersCards.current = newCards
  }
  if (isCorrect === false && numberOfPlayers === 1) {
    fails.current += 1
  }
  console.log('score updated');
  setScoreUpdated(true)
}

export default updateScore