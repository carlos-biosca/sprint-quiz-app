import { useHistory } from 'react-router-dom'

import './Result.css'

import TransitionBackground from '../../components/TransitionBackground/TransitionBackground'
import OptionsButton from '../../components/OptionsButton/OptionsButton'

import { restart, exit } from '../../data/index'

import { useGame } from '../../contexts/gameContext'

export default function Result () {
  const { handleGameIsReady } = useGame()
  const history = useHistory()

  const handleExitGame = () => {
    handleGameIsReady()
    history.push('/')
  }

  const handleRestartGame = () => {
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
