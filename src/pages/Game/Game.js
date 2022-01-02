import { useState, useEffect } from 'react'

import './Game.css'

import { useGame } from '../../contexts/gameContext'
import { useQuestion } from '../../contexts/questionContext'

import PlayersContainer from '../../components/PlayersContainer/PlayersContainer'
import Question from '../Question/Question'

import generatePlayersRecords from '../../logic/generatePlayersRecords'
import getApiQuestion from '../../logic/getApiQuestion'
import retrieveSessionToken from '../../logic/retrieveSessionToken'
import resetSessionToken from '../../logic/resetSessionToken'
import updateScore from '../../logic/updateScore'

export default function Game ({ openOptions, openInfo }) {
  const { level, numberOfPlayers, playersName, playersCards, sessionToken } = useGame()
  const { answerStates, questionInfo, setQuestionInfo, setAnswerStates, fails } = useQuestion()

  const [screen, setScreen] = useState(false)
  const [turn, setTurn] = useState(1)
  const [scoreUpdated, setScoreUpdated] = useState()

  useEffect(() => {
    generatePlayersRecords(playersName, numberOfPlayers, playersCards)
  }, [playersName, numberOfPlayers, playersCards])

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
    if (answerStates.isClosed) {
      updateScore(questionInfo.category, answerStates.isCorrect, playersCards, turn, fails, setScoreUpdated, numberOfPlayers)
    }
  }, [questionInfo.category, answerStates.isCorrect, answerStates.isClosed, playersCards, turn, numberOfPlayers, fails])

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
    setScoreUpdated(false)
  }

  return (
    <div className={!screen ? 'game' : 'game move-left'}>
      <div className="game__options" onClick={openOptions} />
      <div className="select__info game__info" onClick={openInfo} />
      <div className={scoreUpdated ? 'game__wheel' : 'game__wheel game__wheel--blocked'} onClick={() => handleGetNewRandomQuestion()} />
      <PlayersContainer />
      <Question move={handleScreen} />
    </div>
  )
}
