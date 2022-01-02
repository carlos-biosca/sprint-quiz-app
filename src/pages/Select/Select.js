import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './Select.css'

import SelectOptions from '../../components/SelectOptions/SelectOptions';
import Button from '../../components/Button/Button';

import { difficultyLevels, players } from '../../data';
import { useGame } from '../../contexts/gameContext';


export default function Select ({ move, screen, openInfo }) {
  const history = useHistory()
  const { level, handleChangeLevel, numberOfPlayers, handleChangeNumberOfPLayers, playersName, handleChangeName, handleGameIsReady } = useGame()

  useEffect(() => {
    return () => {
      move(false)
    }
  }, [move])

  const handleStartGame = () => {
    handleGameIsReady()
    setTimeout(() => {
      history.push('/game')
    }, 1000)
  }

  return (
    <div className={!screen ? 'select' : 'select move-left'}>
      <div className="select__header">
        <h2 className="select__title">Let's play</h2>
        <div className="select__back" onClick={() => move(false)}></div>
        <div className="select__info" onClick={openInfo}></div>
      </div>
      <div className="select__form">

        <div className="select__form-group">
          <p className="select__label">Select difficulty</p>
          <SelectOptions data={difficultyLevels} initialCounter={1} changeOption={handleChangeLevel} currentOption={level} />
        </div>

        <div className="select__form-group">
          <p className="select__label">Select players</p>
          <SelectOptions data={players} initialCounter={0} changeOption={handleChangeNumberOfPLayers} currentOption={numberOfPlayers === 1 ? `${numberOfPlayers} player` : `${numberOfPlayers} players`} />
        </div>

        <div className="select__form-group select__form-group--players">
          <p className="select__label select__label--players">Enter your name</p>
          <input type="text" name="player1" className='select__player' placeholder="PLAYER 1 NAME" value={playersName[0]} onChange={handleChangeName} />
          {
            numberOfPlayers > 1 && <input type="text" name="player2" className='select__player' placeholder="PLAYER 2 NAME" value={playersName[1]} onChange={handleChangeName} />
          }
          {
            numberOfPlayers > 2 && <input type="text" name="player3" className='select__player' placeholder="PLAYER 3 NAME" value={playersName[2]} onChange={handleChangeName} />
          }
          {
            numberOfPlayers > 3 && <input type="text" name="player4" className='select__player' placeholder="PLAYER 4 NAME" value={playersName[3]} onChange={handleChangeName} />
          }
        </div>
        <Button labelAria='start game' classes='button button--play' action={handleStartGame} text='Play' />
      </div>
    </div>
  )
}
