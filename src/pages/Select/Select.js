import { useState, useEffect, useRef } from 'react';
import './Select.css'

import SelectOptions from '../../components/SelectOptions/SelectOptions';

import { difficultyLevels, players } from '../../data';
import Button from '../../components/Button/Button';

export default function Select ({ move, start }) {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1)
  const [level, setLevel] = useState('normal')
  const [playersName, setPlayersName] = useState({
    player1: 'player 1',
    player2: 'player 2',
    player3: 'player 3',
    player4: 'player 4'
  })
  const [gameInfo, setGameInfo] = useState({})

  const handleInfo = () => {
    console.log('info');
  }

  const handleChangeNumberOfPLayers = (str) => {
    setNumberOfPlayers(parseInt(str.match(/\d+/)[0]))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setPlayersName({ ...playersName, [name]: value })
  }

  const handleSubmit = () => {
    setGameInfo({
      level,
      players: numberOfPlayers,
      names: Object.values(playersName).slice(0, numberOfPlayers)
    })
  }

  return (
    <div className={!move ? 'select' : 'select move-left'}>
      <div className="select__header">
        <h2 className="select__title">Let's play</h2>
        <div className="select__back" onClick={start}></div>
        <div className="select__info" onClick={handleInfo}></div>
      </div>
      <div className="select__form">

        <div className="select__form-group">
          <p className="select__label">Select difficulty</p>
          <SelectOptions data={difficultyLevels} initialCounter={1} changeOption={setLevel} currentOption={level} />
        </div>

        <div className="select__form-group">
          <p className="select__label">Select players</p>
          <SelectOptions data={players} initialCounter={0} changeOption={handleChangeNumberOfPLayers} currentOption={numberOfPlayers === 1 ? `${numberOfPlayers} player` : `${numberOfPlayers} players`} />
        </div>

        <div className="select__form-group select__form-group--players">
          <p className="select__label select__label--players">Enter your name</p>
          <input type="text" name="player1" className='select__player' placeholder="PLAYER 1 NAME" value={playersName[0]} onChange={handleChange} />
          {
            numberOfPlayers > 1 && <input type="text" name="player2" className='select__player' placeholder="PLAYER 2 NAME" value={playersName[1]} onChange={handleChange} />
          }
          {
            numberOfPlayers > 2 && <input type="text" name="player3" className='select__player' placeholder="PLAYER 3 NAME" value={playersName[2]} onChange={handleChange} />
          }
          {
            numberOfPlayers > 3 && <input type="text" name="player4" className='select__player' placeholder="PLAYER 4 NAME" value={playersName[3]} onChange={handleChange} />
          }
        </div>
        <Button labelAria='start game' classes='button button--play' action={handleSubmit} text='Play' />
      </div>
    </div>
  )
}
