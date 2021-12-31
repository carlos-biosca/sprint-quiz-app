import { useState, useEffect, useRef } from "react";

import shuffleArray from "../../utils/randomizeArray";
import adaptCategoryName from "../../logic/adaptCategoryName";

export default function useProviderQuestion () {
  const [questionInfo, setQuestionInfo] = useState({
    category: '',
    question: '',
    correct_answer: '',
    incorrect_answers: []
  })
  const [answerStates, setAnswerStates] = useState({
    isAnswered: false,
    isCorrect: undefined,
    isClosed: true
  })
  const [answer, setAnswer] = useState(undefined)
  const possibleOptions = useRef([])
  const questionCategory = useRef('')
  const fails = useRef(0)

  useEffect(() => {
    possibleOptions.current = shuffleArray([questionInfo.correct_answer, ...questionInfo.incorrect_answers])
    questionCategory.current = adaptCategoryName(questionInfo.category)
  }, [questionInfo.correct_answer, questionInfo.incorrect_answers, questionInfo.category])

  const handleAnswerChange = (str) => {
    setAnswer(str)
  }

  return { questionInfo, setQuestionInfo, answerStates, setAnswerStates, possibleOptions, questionCategory, fails, answer, handleAnswerChange }
}