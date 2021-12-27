import { useState, useRef, useEffect } from 'react'

import './Question.css'

import Button from '../../components/Button/Button'

import shuffle from '../../utils/randomizeArray'
import htmlDecode from '../../utils/htmlDecode'
import adaptCategoryName from '../../logic/adaptCategoryName'
import checkCorrectAnswer from '../../logic/checkCorrectAnswer'

export default function Question ({ move, questionInfo, answerChecked, setAnswerChecked }) {
  const { category, question, correct_answer, incorrect_answers } = questionInfo

  const [answer, setAnswer] = useState(undefined)
  const section = useRef(null)
  const possibleOptions = useRef([])
  const questionCategory = useRef('')

  useEffect(() => {
    possibleOptions.current = shuffle([correct_answer, ...incorrect_answers])
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
      checkCorrectAnswer()
      setAnswerChecked({
        ...answerChecked, isAnswered: true
      })
    }
  }

  const handleCloseQuestion = (e) => {
    e.preventDefault()
    section.current.scrollTo(0, 0)
    setAnswer(undefined)
    move()
  }

  return (
    <div className="question" ref={section}>
      <div className={'question__header'}>
        <h2 className={'question__title'}>{questionCategory.current}</h2>
      </div>
      <div className="question__text">{htmlDecode(question)}</div>
      <form className="question__form">
        {
          possibleOptions.current.map((option, index) => {
            return (
              <label
                key={index}
                htmlFor={index}
                className={answer === option ? 'question__form-label question__form-label--checked' : 'question__form-label'}>
                <input
                  checked={answer === option}
                  className='question__form-input'
                  id={index}
                  onChange={handleAnswerChange}
                  type="radio"
                  value={option} />
                <p className='question__form-text'>{htmlDecode(option)}</p>
              </label>
            )
          })
        }
        {
          !answerChecked.isAnswered ? (
            <Button labelAria={'submit answer'} classes={'button question__form-button'} action={handleSubmitAnswer} text={'Submit'} />
          ) : (
            <Button labelAria={'close question'} classes={'button question__form-button question__form-button--close'} action={handleCloseQuestion} text={'Close'} />
          )
        }
      </form>
    </div>
  )
}
