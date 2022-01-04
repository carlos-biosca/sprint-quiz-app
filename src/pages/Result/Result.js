import { useHistory } from 'react-router-dom'

import { useEffect } from 'react'

import './Result.css'

import TransitionBackground from '../../components/TransitionBackground/TransitionBackground'
import OptionsButton from '../../components/OptionsButton/OptionsButton'

import { restart, exit } from '../../data/index'

import { useGame } from '../../contexts/gameContext'

export default function Result ({ handleGameIsReady, handleGameIsOver, winner }) {
  const history = useHistory()
  const { numberOfPlayers } = useGame()

  useEffect(() => {
    handleGameIsReady()
  }, [handleGameIsReady])

  const handleExitGame = () => {
    handleGameIsOver(false, undefined)
    history.push('/')
  }

  const handleRestartGame = () => {
    handleGameIsReady()
    handleGameIsOver(false, undefined)
    history.push('/game');
  }

  return (
    <section className='result'>
      <TransitionBackground />
      <div className='result__winner'>
        {
          numberOfPlayers === 1 && winner ? (
            <h3>You Win</h3>
          ) : (
            <>
              <h3>Winner</h3>
              <p>{winner}</p>
            </>
          )
        }
        {
          numberOfPlayers === 1 && !winner && (
            <h3>Game Over</h3>
          )
        }
      </div>
      <div className="modal-options__container result__options result__options--animation">
        <OptionsButton color={'red'} image={restart} action={handleRestartGame} text={'Restart Game'} />
        <OptionsButton color={'orange'} image={exit} action={handleExitGame} text={'Exit Game'} />
      </div>
    </section>
  )
}
