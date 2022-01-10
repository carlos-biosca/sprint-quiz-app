import { useRef } from 'react/cjs/react.development';

import { useGame } from '../../contexts/gameContext';
import { useQuestion } from '../../contexts/questionContext';
import calculateWheelNumber from '../../logic/calculateWheelNumber';

import getApiQuestion from '../../logic/getApiQuestion'

import './SpinWheel.css'

export default function SpinWheel ({ setScoreIsUpdated, scoreIsUpdated, handleScreen }) {
  const { level, sessionToken, playersCards, turn } = useGame()
  const { setQuestionInfo } = useQuestion()
  const wheel = useRef(null)
  const wheelDegrees = useRef(0)
  const wheelNumber = useRef(undefined)

  const handleSpinWheel = () => {
    wheelNumber.current = calculateWheelNumber(wheel, wheelDegrees)

    setTimeout(() => {
      getApiQuestion(setQuestionInfo, handleScreen, sessionToken.current, level, playersCards.current[turn.current - 1].finalQuestion, wheelNumber.current)
    }, 9000)

    setTimeout(() => {
      wheelNumber.current = undefined
    }, 10000)
    setScoreIsUpdated(false)
  }

  return (
    <div className={scoreIsUpdated ? 'wheel__container' : 'wheel__container wheel__container--blocked'} onClick={handleSpinWheel} ref={wheel}>
      <div className='wheel__center' />
      <div className={wheelNumber.current === 1 ? "wheel__wrap wheel__wrap--entertainment wheel__wrap--active" : "wheel__wrap wheel__wrap--entertainment"}>
        <div className="wheel__score wheel__score--entertainment" />
      </div>
      <div className={wheelNumber.current === 0 ? "wheel__wrap wheel__wrap--history wheel__wrap--active" : "wheel__wrap wheel__wrap--history"}>
        <div className="wheel__score wheel__score--history" />
      </div>
      <div className={wheelNumber.current === 5 ? "wheel__wrap wheel__wrap--geography wheel__wrap--active" : "wheel__wrap wheel__wrap--geography"}>
        <div className="wheel__score wheel__score--geography" />
      </div>
      <div className={wheelNumber.current === 4 ? "wheel__wrap wheel__wrap--nature wheel__wrap--active" : "wheel__wrap wheel__wrap--nature"}>
        <div className="wheel__score wheel__score--nature" />
      </div>
      <div className={wheelNumber.current === 3 ? "wheel__wrap wheel__wrap--sports wheel__wrap--active" : "wheel__wrap wheel__wrap--sports"}>
        <div className="wheel__score wheel__score--sports" />
      </div>
      <div className={wheelNumber.current === 2 ? "wheel__wrap wheel__wrap--art wheel__wrap--active" : "wheel__wrap wheel__wrap--art"}>
        <div className="wheel__score wheel__score--art" />
      </div>
    </div>
  )
}
