import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

import Select from './pages/Select/Select';
import Start from './pages/Start/Start';
import Game from './pages/Game/Game'

import { ProviderGame } from './contexts/gameContext'

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App () {
  const [starting, setStarting] = useState(false)

  const handleStart = () => {
    setStarting(starting => !starting)
  }

  return (
    <div className="App">
      <ProviderGame>
        <Router>
          <Switch>
            <Route exact path="/">
              <Start start={starting} move={handleStart} />
              <Select start={starting} move={handleStart} />
            </Route>
            <ProtectedRoute path="/game">
              <Game />
            </ProtectedRoute>
          </Switch>
        </Router>
      </ProviderGame>
    </div>
  );
}

export default App;
