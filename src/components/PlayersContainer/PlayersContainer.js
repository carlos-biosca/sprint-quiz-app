import { useState } from 'react';

import './PlayersContainer.css'

import PlayersTabs from '../PlayersTabs/PlayersTabs'
import PlayersPanels from '../PlayersPanels/PlayersPanels'

export default function PlayersContainer () {
  const [toggleTab, setToggleTab] = useState(1);

  const handleToggleTab = (index) => {
    setToggleTab(index);
  };

  return (
    <div className="game__container">
      <PlayersTabs toggleTab={handleToggleTab} activeTab={toggleTab} />
      <PlayersPanels activeTab={toggleTab} />
    </div>
  )
}
