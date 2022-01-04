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
      <div className='result__header'>
        {
          numberOfPlayers === 1 && winner && (
            <h3 className='result__title'>WINNER</h3>
          )
        }
        {
          numberOfPlayers === 1 && !winner && (
            <h3 className='result__title'>GAME OVER</h3>
          )
        }
        {
          numberOfPlayers > 1 && winner && (
            <>
              <h3 className='result__title'>WINNER</h3>
              <div className='result__name'>
                <span>{winner}</span>
              </div>
            </>
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
