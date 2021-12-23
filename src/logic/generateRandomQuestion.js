import fetchData from '../utils/fetchData'

const randomQuestion = async (setQuestion, handleScreen, sessionToken) => {
  // const themes = ['films ', 'history ', 'geography ', 'nature & science', 'sports ', 'art & literature']
  // const random = Math.floor(Math.random() * 6)
  const question = await fetchData(`https://opentdb.com/api.php?amount=1&category=21&difficulty=medium&type=multiple&token=${sessionToken}`)
  setQuestion(question.results[0])
  handleScreen()
}

export default randomQuestion