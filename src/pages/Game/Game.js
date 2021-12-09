import { useState, useEffect } from 'react'

import './Game.css'

import { useGame } from '../../contexts/gameContext'

import PlayersTabs from '../../components/PlayersTabs/PlayersTabs'
import PlayersPanels from '../../components/PlayersPanels/PlayersPanels'

export default function Game () {
  const { level, numberOfPlayers, playersName, gameIsReady } = useGame()
  const [turn, setTurn] = useState(1)
  const [playersCards, setPlayersCard] = useState(null)
  const [toggleTab, setToggleTab] = useState(1);

  useEffect(() => {
    const generatePlayersCards = () => {
      let cards = []
      const names = Object.values(playersName).slice(0, numberOfPlayers)
      for (let name of names) {
        const card = {
          name,
          records: {
            entertainment: false,
            history: false,
            geography: false,
            nature: false,
            sports: false,
            art: false
          }
        }
        cards.push(card)
      }
      setPlayersCard(cards)
    }

    generatePlayersCards()
  }, [numberOfPlayers, playersName])


  const handleOptions = () => {
    console.log('options');
  }

  const handleInfo = () => {
    console.log('info');
  }

  const handleToggleTab = (index) => {
    setToggleTab(index);
  };

  return (
    <div className="game">
      <div className="game__options" onClick={handleOptions}></div>
      <div className="select__info game__info" onClick={handleInfo}></div>
      <div className="game__wheel"></div>
      <div className="game__container">
        <PlayersTabs cards={playersCards} toggleTab={handleToggleTab} activeTab={toggleTab} />
        <PlayersPanels cards={playersCards} activeTab={toggleTab} />
      </div>
    </div>
  )
}
