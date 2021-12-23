import fetchData from '../utils/fetchData'

const randomQuestion = async (setQuestion, handleScreen, sessionToken, level) => {
  // const themes = ['films ', 'history ', 'geography ', 'nature & science', 'sports ', 'art & literature']
  // const random = Math.floor(Math.random() * 6)
  const question = await fetchData(`https://opentdb.com/api.php?amount=1&category=21&difficulty=${level}&type=multiple&token=${sessionToken}`)
  setQuestion(question.results[0])
  question.response_code === 0 ? (handleScreen()) : (console.log('code:', question.code))
}

export default randomQuestion