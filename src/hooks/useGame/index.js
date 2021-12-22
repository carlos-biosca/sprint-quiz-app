import { useState } from "react"

export default function useProviderGame () {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1)
  const [level, setLevel] = useState('normal')
  const [playersName, setPlayersName] = useState({
    player1: 'player 1',
    player2: 'player 2',
    player3: 'player 3',
    player4: 'player 4'
  })
  const [playersCards, setPlayersCards] = useState(null)
  const [gameIsReady, setGameIsReady] = useState(false)
  const [sessionToken, setSessionToken] = useState('')

  const handleChangeLevel = (str) => {
    setLevel(str)
  }

  const handleChangeNumberOfPLayers = (str) => {
    setNumberOfPlayers(parseInt(str.match(/\d+/)[0]))
  }

  const handleChangeName = (e) => {
    const { name, value } = e.target
    setPlayersName({ ...playersName, [name]: value.trim() })
  }

  const handleGameIsReady = () => {
    setGameIsReady(gameIsReady => !gameIsReady)
    console.log('game');
  }

  return { level, handleChangeLevel, numberOfPlayers, handleChangeNumberOfPLayers, playersName, handleChangeName, gameIsReady, handleGameIsReady, playersCards, setPlayersCards, sessionToken, setSessionToken }
}
