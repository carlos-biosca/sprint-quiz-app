import './PlayersTabs.css'

import { useGame } from '../../contexts/gameContext';

export default function PlayersTabs ({ cards, toggleTab, activeTab, fails, animation, isCorrect }) {
  const { numberOfPlayers } = useGame()
  return (
    <div className="game__tabs">
      {
        cards && cards.map((card, index) => {
          return (
            <div key={index}
              className={activeTab === index + 1 ? "game__tab game__tab--active" : "game__tab"}
              onClick={() => toggleTab(index + 1)}
            >
              <span className="game__name">{card.name}</span>
            </div>
          )
        })
      }
      {
        numberOfPlayers === 1 && <div className='game__tab'>Fails:<span className={animation.isClosed && !animation.isCorrect && animation.isAnswered ? 'game__fails game__fails--animation' : 'game__fails'}>{fails}</span>/10</div>
      }
    </div>
  )
}
