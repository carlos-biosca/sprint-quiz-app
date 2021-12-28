import adaptCategoryName from "./adaptCategoryName";

const updateScore = (category, isCorrect, playersCards, setPlayersCards, turn) => {
  if (isCorrect === true) {
    let newCards = [...playersCards]
    let categoryToUpdate = adaptCategoryName(category)
    categoryToUpdate = categoryToUpdate.split(' ')[0]
    newCards[turn - 1].records[categoryToUpdate] = isCorrect
    setPlayersCards(newCards)
  }
}

export default updateScore