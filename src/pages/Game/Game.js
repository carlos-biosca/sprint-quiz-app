import { useState, useEffect } from 'react'

import './Game.css'

import { useGame } from '../../contexts/gameContext'

import PlayersContainer from '../../components/PlayersContainer/PlayersContainer'
import Question from '../Question/Question'

import generatePlayersRecords from '../../logic/generatePlayersRecords'
import generateRandomQuestion from '../../logic/generateRandomQuestion'
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

  return (
    <div className={!screen ? 'game' : 'game move-left'}>
      <div className="game__options" onClick={openOptions}></div>
      <div className="select__info game__info" onClick={openInfo}></div>
      <div className="game__wheel" onClick={() => generateRandomQuestion(setQuestion, handleScreen, sessionToken.current)}></div>
      <PlayersContainer cards={playersCards} />
      <Question move={handleScreen} questionInfo={question} />
    </div>
  )
}
