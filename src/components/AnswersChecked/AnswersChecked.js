import './AnswersChecked.css'

import htmlDecode from '../../utils/htmlDecode'

export default function AnswersChecked ({ options, answer, isCorrect }) {
  return (
    options.map((option, index) => {
      return (
        <label
          key={index}
          htmlFor={index}
          className={answer === option ? (
            isCorrect ? 'question__form-label question__form-label--correct' : 'question__form-label question__form-label--wrong'
          ) :
            'question__form-label'}>
          <input
            defaultChecked={answer === option}
            className='question__form-input'
            id={index}
            type="radio"
            value={option}
            readOnly />
          <p className='question__form-text'>{htmlDecode(option)}</p>
        </label>
      )
    })
  )
}
