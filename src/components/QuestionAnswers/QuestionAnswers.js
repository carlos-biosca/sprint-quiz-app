import './QuestionAnswers.css'

import htmlDecode from '../../utils/htmlDecode'
import { useQuestion } from '../../contexts/questionContext'

export default function QuestionAnswers () {
  const { possibleOptions, answer, handleAnswerChange } = useQuestion()
  const options = possibleOptions.current

  return (
    options && options.map((option, index) => {
      return (
        <label
          key={index}
          htmlFor={index}
          className={answer === option ? 'question__form-label question__form-label--checked' : 'question__form-label'}>
          <input
            checked={answer === option}
            className='question__form-input'
            id={index}
            onChange={(e) => handleAnswerChange(e.target.value)}
            type="radio"
            value={option} />
          <p className='question__form-text'>{htmlDecode(option)}</p>
        </label>
      )
    })
  )
}
