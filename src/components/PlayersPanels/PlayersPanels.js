import './PlayersPanels.css'

import { world, video, monalisa, scroll, running, plant } from '../../data'

export default function PlayersPanels ({ cards, activeTab }) {
  return (
    <div className="game__records">
      {
        cards && cards.map((card, index) => {
          return (
            <div key={index}
              className={activeTab === index + 1 ? "game__record  game__record--active" : "game__record"}
            >
              <div className="game__pieces">
                <div className={card.records.entertainment ? "game__piece game__piece--entertainment game__piece--animation" : "game__piece"}>
                  <img src={video} alt="Entertainment" />
                </div>
                <div className={card.records.history ? "game__piece game__piece--history game__piece--animation" : "game__piece"}>
                  <img src={scroll} alt="History" />
                </div>
                <div className={card.records.geography ? "game__piece game__piece--geography game__piece--animation" : "game__piece"}>
                  <img src={world} alt="Geography" />
                </div>
                <div className={card.records.science ? "game__piece game__piece--science game__piece--animation" : "game__piece"}>
                  <img src={plant} alt="Nature & Science" />
                </div>
                <div className={card.records.sports ? "game__piece game__piece--sports game__piece--animation" : "game__piece"}>
                  <img src={running} alt="sports" />
                </div>
                <div className={card.records.art ? "game__piece game__piece--art game__piece--animation" : "game__piece"}>
                  <img src={monalisa} alt="Art & Literature" />
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
