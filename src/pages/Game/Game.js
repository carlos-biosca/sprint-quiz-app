import { useState, useEffect } from 'react'

import './Game.css'

import { useGame } from '../../contexts/gameContext'

import PlayersContainer from '../../components/PlayersContainer/PlayersContainer'
import Question from '../Question/Question'

import generatePlayersRecords from '../../logic/generatePlayersRecords'
import generateRandomQuestion from '../../logic/generateRandomQuestion'
import retrieveSessionToken from '../../logic/retrieveSessionToken'

export default function Game ({ openOptions, openInfo }) {
  const { level, numberOfPlayers, playersName, playersCards, setPlayersCards, setSessionToken } = useGame()
  const [screen, setScreen] = useState(false)
  const [turn, setTurn] = useState(1)
  const [question, setQuestion] = useState('')

  useEffect(() => {
    generatePlayersRecords(playersName, numberOfPlayers, setPlayersCards)
  }, [playersName, numberOfPlayers, setPlayersCards])

  useEffect(() => {
    const getApiToken = async () => {
      const newToken = await retrieveSessionToken()
      setSessionToken(newToken)
    }
    getApiToken()
  }, [setSessionToken])

  const handleScreen = () => {
    setScreen(screen => !screen)
  }

  return (
    <div className={!screen ? 'game' : 'game move-left'}>
      <div className="game__options" onClick={openOptions}></div>
      <div className="select__info game__info" onClick={openInfo}></div>
      <div className="game__wheel" onClick={() => generateRandomQuestion(setQuestion, handleScreen)}></div>
      <PlayersContainer cards={playersCards} />
      <Question move={handleScreen} question={question} />
    </div>
  )
}
