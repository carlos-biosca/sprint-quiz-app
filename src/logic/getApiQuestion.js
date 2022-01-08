import fetchData from '../utils/fetchData'
import getRandomCategory from './getRandomCategory'

const getApiQuestion = async (setQuestion, handleScreen, sessionToken, level, finalQuestion, randomWheelCategoryNumber) => {
  let question
  const category = getRandomCategory(randomWheelCategoryNumber)

  if (!finalQuestion) {
    question = await fetchData(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${level}&type=multiple&token=${sessionToken}`)
  } else {
    question = await fetchData(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=hard&type=multiple&token=${sessionToken}`)
  }

  setQuestion(question.results[0])
  question.response_code === 0 ? (handleScreen()) : (console.log('code:', question.code))
}

export default getApiQuestion