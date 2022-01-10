import './PlayersTabs.css'

import { useGame } from '../../contexts/gameContext';
import { useQuestion } from '../../contexts/questionContext';

export default function PlayersTabs () {
  const { numberOfPlayers, playersCards, fails, turn } = useGame()
  const { answerStates } = useQuestion()

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
          <span className={answerStates.isClosed && !answerStates.isCorrect && answerStates.isAnswered ? 'game__fails game__fails--animation' : 'game__fails'}>
            {numberOfFails}
          </span>
          /10
        </div>
      }
    </div>
  )
}
