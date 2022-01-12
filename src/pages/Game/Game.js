import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import './Game.css'

import { useGame } from '../../contexts/gameContext'
import { useQuestion } from '../../contexts/questionContext'

import { maxFails } from '../../data'

import TransitionBackground from '../../components/TransitionBackground/TransitionBackground'
import SpinWheel from '../../components/SpinWheel/SpinWheel'
import PlayersContainer from '../../components/PlayersContainer/PlayersContainer'
import Question from '../Question/Question'

import retrieveSessionToken from '../../logic/retrieveSessionToken'
import resetSessionToken from '../../logic/resetSessionToken'
import checkNumberOfFails from '../../logic/checkNumberOfFails'

export default function Game ({ openOptions, openInfo, handleGameIsOver }) {
  const history = useHistory()
  const { sessionToken, fails, handleUpdateScore, handleGeneratePlayersRecords, newGame } = useGame()
  const { questionInfo, answerStates, setAnswerStates } = useQuestion()

  const [screen, setScreen] = useState(false)
  const [scoreIsUpdated, setScoreIsUpdated] = useState(true)
  const [transition, setTransition] = useState(true)

  useEffect(() => {
    if (newGame.current) handleGeneratePlayersRecords()
    setTransition(false)
  }, [handleGeneratePlayersRecords, newGame])

  useEffect(() => {
    const getApiToken = async () => {
      sessionToken.current = await retrieveSessionToken()
    }
    getApiToken()

    return () => {
      const resetApiToken = async () => {
        sessionToken.current = await resetSessionToken(sessionToken.current)
      }
      resetApiToken()
    }
  }, [sessionToken])

  useEffect(() => {
    if (answerStates.isClosed && answerStates.isAnswered) {
      handleUpdateScore(questionInfo.category, answerStates.isCorrect)
      setScoreIsUpdated(true)
      setAnswerStates({
        isAnswered: false,
        isCorrect: undefined,
        isClosed: false
      })
      const loseGame = checkNumberOfFails(maxFails, fails)
      if (loseGame) {
        console.log('lose');
        handleGameIsOver(true, undefined)
        history.push('/result')
      }
    }
  }, [answerStates, setAnswerStates, fails, handleGameIsOver, handleUpdateScore, history, questionInfo])

  const handleScreen = () => {
    setScreen(screen => !screen)
  }

  return (
    <div className='game'>
      <div className="game__options" onClick={openOptions} />
      <div className="select__info game__info" onClick={openInfo} />
      <SpinWheel setScoreIsUpdated={setScoreIsUpdated} scoreIsUpdated={scoreIsUpdated} handleScreen={handleScreen} />
      <PlayersContainer />
      <Question move={handleScreen} screen={screen} handleGameIsOver={handleGameIsOver} />
      <div className={transition ? 'game__transition move-right' : 'game__transition'}>
        <TransitionBackground />
      </div>
    </div>
  )
}
