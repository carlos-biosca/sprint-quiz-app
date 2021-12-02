import { useState, useEffect, useRef } from 'react';
import './Select.css'

import SelectOptions from '../../components/SelectOptions';

import { difficultyLevels, players } from '../../data';

export default function Select () {

  //functions
  const handleInfo = () => {
    console.log('info');
  }

  return (
    <div className="select">
      <div className="select__header">
        <h2 className="select__title">Let's play</h2>
        <div className="select__info" onClick={handleInfo}></div>
      </div>
      <div className="select__form">

        <div className="select__form-group">
          <p className="select__label">Select difficulty</p>
          <SelectOptions data={difficultyLevels} initial={{ option: 'normal', position: 1 }} />
        </div>

        <div className="select__form-group">
          <p className="select__label">Select players</p>
          <SelectOptions data={players} initial={{ option: '1 player', position: 0 }} />
        </div>

        <div className="select__form-group select__form-group--players">
          <p className="select__label select__label--players">Enter your name</p>
          <input type="text" className='select__player' placeholder="PLAYER 1 NAME" />
          <input type="text" className='select__player' placeholder="PLAYER 2 NAME" />
          <input type="text" className='select__player' placeholder="PLAYER 3 NAME" />
          <input type="text" className='select__player' placeholder="PLAYER 4 NAME" />
        </div>

      </div>
    </div>
  )
}
