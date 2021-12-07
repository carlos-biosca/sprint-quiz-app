import './Game.css'

import { useGame } from '../../contexts/gameContext'

export default function Game () {
  const { level, numberOfPlayers, playersName, gameIsReady } = useGame()
  const names = Object.values(playersName).slice(0, numberOfPlayers)

  const handleOptions = () => {
    console.log('options');
  }

  const handleInfo = () => {
    console.log('info');
  }

  return (
    <div className="game">
      <div className="game__options" onClick={handleOptions}></div>
      <div className="select__info game__info" onClick={handleInfo}></div>
      <div className="game__wheel"></div>
      <div className="game-players">
        <ul>
          {
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>
      </div>
    </div>
  )
}
