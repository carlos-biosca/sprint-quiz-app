import { useState } from 'react';
import './App.css';

import Select from './pages/Select/Select';
import Start from './pages/Start/Start';

import { ProviderGame } from './context/gameContext'

function App () {
  const [starting, setStarting] = useState(false)

  const handleStart = () => {
    setStarting(starting => !starting)
  }

  return (
    <div className="App">
      <ProviderGame>
        <Start move={starting} start={handleStart} />
        <Select move={starting} start={handleStart} />
      </ProviderGame>
    </div>
  );
}

export default App;
