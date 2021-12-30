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
import OptionsModal from './components/OptionsModal/OptionsModal';
import InfoModal from './components/InfoModal/InfoModal';
import { ProviderQuestion } from './contexts/questionContext';

function App () {
  const [screen, setScreen] = useState(false)
  const [options, setOptions] = useState(false)
  const [info, setInfo] = useState(false)

  const handleToggleOptions = () => {
    setOptions(options => !options)
  }

  const handleToggleInfo = () => {
    setInfo(info => !info)
  }

  return (
    <div className="App">
      <ProviderGame>
        <Router>
          {
            options && <OptionsModal closeModal={handleToggleOptions} />
          }
          {
            info && <InfoModal closeModal={handleToggleInfo} />
          }
          <Switch>
            <Route exact path="/">
              <Start screen={screen} move={setScreen} openOptions={handleToggleOptions} />
              <Select screen={screen} move={setScreen} openInfo={handleToggleInfo} />
            </Route>
            <ProtectedRoute path="/game">
              <ProviderQuestion>
                <Game openOptions={handleToggleOptions} openInfo={handleToggleInfo} />
              </ProviderQuestion>
            </ProtectedRoute>
          </Switch>
        </Router>
      </ProviderGame>
    </div>
  );
}

export default App;
