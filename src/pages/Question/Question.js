import { useState, useRef, useEffect } from 'react'

import './Question.css'

import Button from '../../components/Button/Button'
import QuestionAnswers from '../../components/QuestionAnswers/QuestionAnswers'
import AnswersChecked from '../../components/AnswersChecked/AnswersChecked'

import shuffleArray from '../../utils/randomizeArray'
import htmlDecode from '../../utils/htmlDecode'
import adaptCategoryName from '../../logic/adaptCategoryName'
import checkCorrectAnswer from '../../logic/checkCorrectAnswer'

export default function Question ({ move, questionInfo, answerStates, setAnswerStates }) {
  const { category, question, correct_answer, incorrect_answers } = questionInfo

  const [answer, setAnswer] = useState(undefined)
  const section = useRef(null)
  const possibleOptions = useRef([])
  const questionCategory = useRef('')

  useEffect(() => {
    possibleOptions.current = shuffleArray([correct_answer, ...incorrect_answers])
    questionCategory.current = adaptCategoryName(category)
  }, [correct_answer, incorrect_answers, category])

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmitAnswer = (e) => {
    e.preventDefault()
    console.log('submit');
    if (answer === undefined) return
    else {
      const correct = checkCorrectAnswer(answer, correct_answer)
      setAnswerStates({
        ...answerStates, isAnswered: true, isCorrect: correct
      })
    }
  }

  const handleCloseQuestion = (e) => {
    e.preventDefault()
    section.current.scrollTo(0, 0)
    setAnswer(undefined)
    move()
    setAnswerStates({ ...answerStates, isClosed: true })
  }

  return (
    <div className="question" ref={section}>
      <div className={'question__header'}>
        <h2 className={'question__title'}>{questionCategory.current}</h2>
      </div>
      <div className="question__text">{htmlDecode(question)}</div>
      <form className="question__form">
        {
          !answerStates.isAnswered ? (
            <QuestionAnswers options={possibleOptions.current} answer={answer} handleAnswerChange={handleAnswerChange} />
          ) : (
            <AnswersChecked options={possibleOptions.current} answer={answer} isCorrect={answerStates.isCorrect} />
          )
        }
        {
          answerStates.isAnswered && !answerStates.isCorrect && (
            <p className='question__correct'>*Correct answer: <br></br>{htmlDecode(correct_answer)}</p>
          )
        }
        {
          !answerStates.isAnswered ? (
            <Button labelAria={'submit answer'} classes={'button question__form-button'} action={handleSubmitAnswer} text={'Submit'} />
          ) : (
            <Button labelAria={'close question'} classes={'button question__form-button question__form-button--close'} action={handleCloseQuestion} text={'Close Question'} />
          )
        }
      </form>
    </div>
  )
}
