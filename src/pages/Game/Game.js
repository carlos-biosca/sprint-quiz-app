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

import generatePlayersRecords from '../../logic/generatePlayersRecords'
import getApiQuestion from '../../logic/getApiQuestion'
import retrieveSessionToken from '../../logic/retrieveSessionToken'
import resetSessionToken from '../../logic/resetSessionToken'
import updateScore from '../../logic/updateScore'
import checkNumberOfFails from '../../logic/checkNumberOfFails'

export default function Game ({ openOptions, openInfo, handleGameIsOver }) {
  const history = useHistory()
  const { level, numberOfPlayers, playersName, playersCards, sessionToken, turn, fails } = useGame()
  const { questionInfo, setQuestionInfo, answerStates, setAnswerStates } = useQuestion()

  const [screen, setScreen] = useState(false)
  const [scoreIsUpdated, setScoreIsUpdated] = useState(true)
  const [transition, setTransition] = useState(true)

  useEffect(() => {
    generatePlayersRecords(playersName, numberOfPlayers, playersCards, fails)
    setTransition(false)
  }, [playersName, numberOfPlayers, playersCards, fails])

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
      updateScore(questionInfo.category, answerStates.isCorrect, playersCards, turn, fails, setScoreIsUpdated, numberOfPlayers)
      setScoreIsUpdated(scoreIsUpdated => !scoreIsUpdated)
      const loseGame = checkNumberOfFails(maxFails, fails)
      if (loseGame) {
        console.log('lose');
        handleGameIsOver(true, undefined)
        history.push('/result')
      }
    }
  }, [questionInfo.category, answerStates.isCorrect, answerStates.isAnswered, answerStates.isClosed, playersCards, turn, numberOfPlayers, fails, handleGameIsOver, history])

  const handleScreen = () => {
    setScreen(screen => !screen)
  }

  const handleGetNewRandomQuestion = () => {
    getApiQuestion(setQuestionInfo, handleScreen, sessionToken.current, level, playersCards.current[turn - 1].finalQuestion)
    setAnswerStates({
      isAnswered: false,
      isCorrect: undefined,
      isClosed: false
    })
    setScoreIsUpdated(false)
  }

  return (
    <div className='game'>
      <div className="game__options" onClick={openOptions} />
      <div className="select__info game__info" onClick={openInfo} />
      {/* <div className={scoreUpdated ? 'game__wheel' : 'game__wheel game__wheel--blocked'} onClick={() => handleGetNewRandomQuestion()} /> */}
      <SpinWheel setScoreIsUpdated={setScoreIsUpdated} scoreIsUpdated={scoreIsUpdated} />
      <PlayersContainer />
      <Question move={handleScreen} screen={screen} handleGameIsOver={handleGameIsOver} />
      <div className={transition ? 'game__transition move-right' : 'game__transition'}>
        <TransitionBackground />
      </div>
    </div>
  )
}
