import { useHistory } from 'react-router-dom'

import { useEffect } from 'react'

import './Result.css'

import TransitionBackground from '../../components/TransitionBackground/TransitionBackground'
import OptionsButton from '../../components/OptionsButton/OptionsButton'

import { restart, exit } from '../../data/index'

export default function Result ({ handleGameIsReady, handleGameIsOver }) {
  const history = useHistory()

  useEffect(() => {
    handleGameIsReady()
  }, [handleGameIsReady])

  const handleExitGame = () => {
    handleGameIsOver()
    history.push('/')
  }

  const handleRestartGame = () => {
    handleGameIsReady()
    handleGameIsOver()
    history.push('/game');
  }

  return (
    <section className='result'>
      <TransitionBackground />
      <div className="modal-options__container result__options">
        <OptionsButton color={'red'} image={restart} action={handleRestartGame} text={'Restart Game'} />
        <OptionsButton color={'orange'} image={exit} action={handleExitGame} text={'Exit Game'} />
      </div>
    </section>
  )
}
