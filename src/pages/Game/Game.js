import { useState, useEffect } from 'react'

import './Game.css'

import { useGame } from '../../contexts/gameContext'

import PlayersContainer from '../../components/PlayersContainer/PlayersContainer'
import Question from '../Question/Question'

import generatePlayersRecords from '../../logic/generatePlayersRecords'
import getApiQuestion from '../../logic/getApiQuestion'
import retrieveSessionToken from '../../logic/retrieveSessionToken'
import resetSessionToken from '../../logic/resetSessionToken'

export default function Game ({ openOptions, openInfo }) {
  const { level, numberOfPlayers, playersName, playersCards, setPlayersCards, sessionToken } = useGame()

  const [screen, setScreen] = useState(false)
  const [turn, setTurn] = useState(1)
  const [question, setQuestion] = useState({
    category: '',
    question: '',
    correct_answer: '',
    incorrect_answers: []
  })
  const [answerChecked, setAnswerChecked] = useState({
    isAnswered: true,
    isCorrect: undefined
  })

  useEffect(() => {
    generatePlayersRecords(playersName, numberOfPlayers, setPlayersCards)
  }, [playersName, numberOfPlayers, setPlayersCards])

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

  const handleScreen = () => {
    setScreen(screen => !screen)
  }

  const handleGetNewRandomQuestion = () => {
    getApiQuestion(setQuestion, handleScreen, sessionToken.current, level)
    setAnswerChecked({ isAnswered: false, isCorrect: undefined })
  }

  return (
    <div className={!screen ? 'game' : 'game move-left'}>
      <div className="game__options" onClick={openOptions}></div>
      <div className="select__info game__info" onClick={openInfo}></div>
      <div className="game__wheel" onClick={() => handleGetNewRandomQuestion()}></div>
      <PlayersContainer cards={playersCards} />
      <Question move={handleScreen} questionInfo={question} answerChecked={answerChecked} setAnswerChecked={setAnswerChecked} />
    </div>
  )
}
