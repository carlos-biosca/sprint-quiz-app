import { useState, useEffect, useRef } from 'react'

import './Game.css'

import { useGame } from '../../contexts/gameContext'

import PlayersContainer from '../../components/PlayersContainer/PlayersContainer'
import Question from '../Question/Question'

import generatePlayersRecords from '../../logic/generatePlayersRecords'
import getApiQuestion from '../../logic/getApiQuestion'
import retrieveSessionToken from '../../logic/retrieveSessionToken'
import resetSessionToken from '../../logic/resetSessionToken'
import updateScore from '../../logic/updateScore'

export default function Game ({ openOptions, openInfo }) {
  const { level, numberOfPlayers, playersName, playersCards, sessionToken } = useGame()

  const [screen, setScreen] = useState(false)
  const [turn, setTurn] = useState(1)
  const [question, setQuestion] = useState({
    category: '',
    question: '',
    correct_answer: '',
    incorrect_answers: []
  })
  const [answerStates, setAnswerStates] = useState({
    isAnswered: false,
    isCorrect: undefined,
    isClosed: true
  })
  const [scoreUpdated, setScoreUpdated] = useState()
  const fails = useRef(0)

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
      updateScore(question.category, answerStates.isCorrect, playersCards, turn, fails, setScoreUpdated, numberOfPlayers)
    }
  }, [question.category, answerStates.isCorrect, answerStates.isClosed, playersCards, turn, numberOfPlayers])

  const handleScreen = () => {
    setScreen(screen => !screen)
  }

  const handleGetNewRandomQuestion = () => {
    getApiQuestion(setQuestion, handleScreen, sessionToken.current, level)
    setAnswerStates({
      isAnswered: false,
      isCorrect: undefined,
      isClosed: false
    })
    setScoreUpdated(false)
  }

  return (
    <div className={!screen ? 'game' : 'game move-left'}>
      <div className="game__options" onClick={openOptions}></div>
      <div className="select__info game__info" onClick={openInfo}></div>
      <div className="game__wheel" onClick={() => handleGetNewRandomQuestion()}></div>
      <PlayersContainer cards={playersCards.current} fails={fails.current} animation={answerStates} />
      <Question move={handleScreen} questionInfo={question} answerStates={answerStates} setAnswerStates={setAnswerStates} turn={turn} />
    </div>
  )
}
