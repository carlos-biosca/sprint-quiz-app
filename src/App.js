import { useState } from 'react';
import './App.css';

import Select from './pages/Select/Select';
import Start from './pages/Start/Start';

function App () {
  const [starting, setStarting] = useState(false)

  const handleStart = () => {
    setStarting(starting => !starting)
  }

  return (
    <div className="App">
      <Start move={starting} start={handleStart} />
      <Select move={starting} start={handleStart} />
    </div>
  );
}

export default App;
