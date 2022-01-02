import { useRef } from 'react'

import './Question.css'

import { useQuestion } from '../../contexts/questionContext'

import Button from '../../components/Button/Button'
import QuestionAnswers from '../../components/QuestionAnswers/QuestionAnswers'
import AnswersChecked from '../../components/AnswersChecked/AnswersChecked'

import htmlDecode from '../../utils/htmlDecode'
import checkCorrectAnswer from '../../logic/checkCorrectAnswer'

export default function Question ({ move, screen }) {
  const { questionInfo, answerStates, setAnswerStates, questionCategory, answer, handleAnswerChange } = useQuestion()
  const { question, correct_answer } = questionInfo

  const section = useRef(null)

  const handleSubmitAnswer = (e) => {
    e.preventDefault()
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
    handleAnswerChange()
    setAnswerStates({ ...answerStates, isClosed: true })
    move()
    section.current.scrollTo(0, 0)
  }

  return (
    <div className={!screen ? 'question' : 'question move-left'} ref={section}>
      <div className={'question__header'}>
        <h2 className={'question__title'}>{questionCategory.current}</h2>
      </div>
      <div className="question__text">{htmlDecode(question)}</div>
      <form className="question__form">
        {
          !answerStates.isAnswered ? (
            <QuestionAnswers />
          ) : (
            <AnswersChecked />
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
