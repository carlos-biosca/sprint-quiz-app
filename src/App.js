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
import Question from './pages/Question/Question';

function App () {
  const [screen, setScreen] = useState(false)

  const handleScreen = () => {
    setScreen(screen => !screen)
  }

  return (
    <div className="App">
      <ProviderGame>
        <Router>
          <Switch>
            <Route exact path="/">
              <Start screen={screen} move={handleScreen} />
              <Select screen={screen} move={handleScreen} />
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
