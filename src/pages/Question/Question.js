import { useState, useRef } from 'react'

import './Question.css'

import { possibleOptions } from '../../data'

import Button from '../../components/Button/Button'

export default function Question ({ move, question }) {
  const [answer, setAnswer] = useState(undefined)
  const section = useRef(null)

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
        <h2 className={`question__title question__title--${question.substr(0, question.indexOf(' '))}`}>{question}</h2>
      </div>
      <div className="question__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure dignissimos laboriosam. Rerum maiores fugiat est sit animi nisi illo.</div>
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
