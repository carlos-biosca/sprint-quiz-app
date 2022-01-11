import { useRef, useState } from "react"

import adaptCategoryName from "../../logic/adaptCategoryName"
import activateFinalQuestion from "../../logic/activateFinalQuestion"

export default function useProviderGame () {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1)
  const [level, setLevel] = useState('normal')
  const [playersName, setPlayersName] = useState({
    player1: 'P1',
    player2: 'P2',
    player3: 'P3',
    player4: 'P4'
  })
  const turn = useRef(1)
  const playersCards = useRef(null)
  const sessionToken = useRef('')
  const fails = useRef(0)

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

  const handleUpdateScore = (category, isCorrect) => {
    if (isCorrect === true) {
      const categoryToUpdate = adaptCategoryName(category).split(' ')[0]
      playersCards.current[turn.current - 1].records[categoryToUpdate] = isCorrect
    }

    if (isCorrect === false && numberOfPlayers === 1) fails.current += 1
    if (isCorrect === false && numberOfPlayers > 1) handleNextPlayerTurn()

    activateFinalQuestion(playersCards, turn)

    console.log('score updated');
  }

  const handleNextPlayerTurn = () => {
    if (turn.current === numberOfPlayers) turn.current = 1
    else turn.current += 1
    console.log(turn);
  }

  return { level, handleChangeLevel, numberOfPlayers, handleChangeNumberOfPLayers, playersName, handleChangeName, playersCards, sessionToken, turn, fails, handleNextPlayerTurn, handleUpdateScore }
}
