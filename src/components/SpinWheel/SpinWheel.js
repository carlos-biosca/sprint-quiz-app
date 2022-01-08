import { useRef } from 'react/cjs/react.development';

import { useGame } from '../../contexts/gameContext';
import { useQuestion } from '../../contexts/questionContext';

import getApiQuestion from '../../logic/getApiQuestion'

import './SpinWheel.css'

export default function SpinWheel ({ setScoreIsUpdated, scoreIsUpdated, handleScreen }) {
  const { level, sessionToken, playersCards, turn } = useGame()
  const { setAnswerStates, setQuestionInfo } = useQuestion()
  const wheel = useRef(null)
  const number = useRef(0)


  const handleSpinWheel = () => {
    if (number === 0) number.current = 120
    number.current += Math.ceil(Math.random() * 1000) + 2000;
    wheel.current.style.transform = `rotate(${number.current}deg)`

    setTimeout(() => {
      getApiQuestion(setQuestionInfo, handleScreen, sessionToken.current, level, playersCards.current[turn - 1].finalQuestion)
    }, 8000)

    setAnswerStates({
      isAnswered: false,
      isCorrect: undefined,
      isClosed: false
    })
    setScoreIsUpdated(false)
  }

  return (
    <div className={scoreIsUpdated ? 'wheel__container' : 'wheel__container wheel__container--blocked'} onClick={handleSpinWheel} ref={wheel}>
      <div className='wheel__center' />
      <div className="wheel__wrap wheel__wrap--entertainment">
        <div className="wheel__score wheel__score--entertainment" />
      </div>
      <div className="wheel__wrap wheel__wrap--history">
        <div className="wheel__score wheel__score--history" />
      </div>
      <div className="wheel__wrap wheel__wrap--geography">
        <div className="wheel__score wheel__score--geography" />
      </div>
      <div className="wheel__wrap wheel__wrap--nature">
        <div className="wheel__score wheel__score--nature" />
      </div>
      <div className="wheel__wrap wheel__wrap--sports">
        <div className="wheel__score wheel__score--sports" />
      </div>
      <div className="wheel__wrap wheel__wrap--art">
        <div className="wheel__score wheel__score--art" />
      </div>
    </div>
  )
}
