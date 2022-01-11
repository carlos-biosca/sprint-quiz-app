import './PlayersTabs.css'

import { useGame } from '../../contexts/gameContext';

export default function PlayersTabs () {
  const { numberOfPlayers, playersCards, fails, turn } = useGame()

  const cards = playersCards.current
  const numberOfFails = fails.current

  return (
    <div className="game__tabs">
      {
        cards && cards.map((card, index) => {
          return (
            <div key={index}
              className={turn.current === index + 1 ? "game__tab game__tab--active" : "game__tab"}
            >
              <span className="game__name">{card.name}</span>
            </div>
          )
        })
      }
      {
        numberOfPlayers === 1 && <div className='game__tab'>Fails:
          <span className='game__fails'>
            {numberOfFails}
          </span>
          /10
        </div>
      }
    </div>
  )
}
