import fetchData from '../utils/fetchData'
import getRandomCategory from './getRandomCategory'

const getApiQuestion = async (sessionToken, level, finalQuestion) => {
  let question
  const category = getRandomCategory()
  if (!finalQuestion) {
    question = await fetchData(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${level}&type=multiple&token=${sessionToken}`)
  } else {
    question = await fetchData(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=hard&type=multiple&token=${sessionToken}`)
  }
  return question
}

export default getApiQuestion