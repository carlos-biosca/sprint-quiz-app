import { useState, useRef } from 'react'

import './Question.css'

import Button from '../../components/Button/Button'

export default function Question ({ move, questionInfo }) {
  const { category, question, correct_answer, incorrect_answers } = questionInfo
  const [answer, setAnswer] = useState(undefined)
  const section = useRef(null)
  const possibleOptions = [correct_answer, ...incorrect_answers]

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit');
    if (answer === undefined) return
    else {
      section.current.scrollTo(0, 0)
      setAnswer(undefined)
      move()
    }
  }

  return (
    <div className="question" ref={section}>
      <div className='question__header'>
        <h2 className={`question__title question__title--${category.toLowerCase()}`}>{category}</h2>
      </div>
      <div className="question__text">{question}</div>
      <form className="question__form">
        {
          possibleOptions.map((option, index) => {
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
                <p className='question__form-text'>{option}</p>
              </label>
            )
          })
        }
        <Button labelAria={'submit answer'} classes={'button question__form-button'} action={handleSubmit} text={'Submit'} />
      </form>
    </div>
  )
}
