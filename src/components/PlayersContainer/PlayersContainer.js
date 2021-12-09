import { useState } from 'react';

import './PlayersContainer.css'

import PlayersTabs from '../PlayersTabs/PlayersTabs'
import PlayersPanels from '../PlayersPanels/PlayersPanels'

export default function PlayersContainer ({ cards }) {
  const [toggleTab, setToggleTab] = useState(1);

  const handleToggleTab = (index) => {
    setToggleTab(index);
  };

  return (
    <div className="game__container">
      <PlayersTabs cards={cards} toggleTab={handleToggleTab} activeTab={toggleTab} />
      <PlayersPanels cards={cards} activeTab={toggleTab} />
    </div>
  )
}
