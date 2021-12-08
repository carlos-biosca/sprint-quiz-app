import { useState } from 'react'

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

  //Tabs
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="game">
      <div className="game__options" onClick={handleOptions}></div>
      <div className="select__info game__info" onClick={handleInfo}></div>
      <div className="game__wheel"></div>
      <div className="game__container">
        <div className="game__tabs">
          <button
            className={toggleState === 1 ? "game__tab game__tab--active" : "game__tab"}
            onClick={() => toggleTab(1)}
          >
            Carlos
          </button>
          <button
            className={toggleState === 2 ? "game__tab game__tab--active" : "game__tab"}
            onClick={() => toggleTab(2)}
          >
            Albert
          </button>
          <button
            className={toggleState === 3 ? "game__tab game__tab--active" : "game__tab"}
            onClick={() => toggleTab(3)}
          >
            <span className="game__name">Maria del carmen de todos los santos</span>
          </button>
          <button
            className={toggleState === 4 ? "game__tab game__tab--active" : "game__tab"}
            onClick={() => toggleTab(4)}
          >
            <span className="game__name">Jonathan</span>
          </button>
        </div>
        <div className="game__records">
          <div
            className={toggleState === 1 ? "game__record  game__record--active" : "game__record"}
          >
            <h2>Content 1</h2>
          </div>

          <div
            className={toggleState === 2 ? "game__record  game__record--active" : "game__record"}
          >
            <h2>Content 2</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
