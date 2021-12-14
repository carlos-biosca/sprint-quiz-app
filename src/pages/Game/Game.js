import { useState, useEffect } from 'react'

import './Game.css'

import { useGame } from '../../contexts/gameContext'

import PlayersContainer from '../../components/PlayersContainer/PlayersContainer'
import Question from '../Question/Question'

import generatePlayersRecords from '../../logic/generatePlayersRecords'

export default function Game () {
  const { level, numberOfPlayers, playersName, gameIsReady } = useGame()
  const [screen, setScreen] = useState(false)
  const [playersCards, setPlayersCard] = useState(null)
  const [turn, setTurn] = useState(1)
  const [question, setQuestion] = useState('')

  useEffect(() => {
    generatePlayersRecords(playersName, numberOfPlayers, setPlayersCard)
  }, [playersName, numberOfPlayers])

  const handleScreen = () => {
    setScreen(screen => !screen)
  }

  const handleOptions = () => {
    console.log('options');
  }

  const handleInfo = () => {
    console.log('info');
  }

  const randomQuestion = () => {
    const themes = ['entertainment ', 'history ', 'geography ', 'nature & science', 'sports ', 'art & literature']
    const random = Math.floor(Math.random() * 6)
    setQuestion(themes[random])
    handleScreen()
  }

  return (
    <div className={!screen ? 'game' : 'game move-left'}>
      <div className="game__options" onClick={handleOptions}></div>
      <div className="select__info game__info" onClick={handleInfo}></div>
      <div className="game__wheel" onClick={randomQuestion}></div>
      <PlayersContainer cards={playersCards} />
      <Question move={handleScreen} question={question} />
    </div>
  )
}
