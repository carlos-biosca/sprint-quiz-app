import './PlayersTabs.css'

export default function PlayersTabs ({ cards, toggleTab, activeTab }) {
  return (
    <div className="game__tabs">
      {
        cards && cards.map((card, index) => {
          return (
            <button key={index}
              className={activeTab === index + 1 ? "game__tab game__tab--active" : "game__tab"}
              onClick={() => toggleTab(index + 1)}
            >
              <span className="game__name">{card.name}</span>
            </button>
          )
        })
      }
    </div>
  )
}
