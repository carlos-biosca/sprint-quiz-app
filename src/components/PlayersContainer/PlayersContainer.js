import './PlayersContainer.css'

import PlayersTabs from '../PlayersTabs/PlayersTabs'
import PlayersPanels from '../PlayersPanels/PlayersPanels'

export default function PlayersContainer () {
  return (
    <div className="game__container">
      <PlayersTabs />
      <PlayersPanels />
    </div>
  )
}
