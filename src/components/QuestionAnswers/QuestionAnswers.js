import './QuestionAnswers.css'

import htmlDecode from '../../utils/htmlDecode'

export default function QuestionAnswers ({ options, answer, handleAnswerChange }) {
  return (
    options.map((option, index) => {
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
  )
}
