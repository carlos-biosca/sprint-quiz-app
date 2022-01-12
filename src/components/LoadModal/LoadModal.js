import { useState } from 'react'

import './LoadModal.css'

import Button from '../Button/Button'

import { useGame } from '../../contexts/gameContext'

export default function LoadModal ({ closeModal, restart }) {
  const { handleLoadGameData } = useGame()
  const [anyDataStoraged, setAnyDataStoraged] = useState()

  const loadGameData = () => {
    const data = JSON.parse(localStorage.getItem('trivialGame'))
    handleLoadGameData(data)
    restart(false)
  }

  return (
    <div className='storage-modal'>
      <div className="storage-modal__container load-modal__container">
        <p className='storage-modal__text load-modal__text'>Load saved game data ?</p>
        <div className="storage-modal__options">
          <Button labelAria={'save game'} classes='storage-modal__button storage-modal__button--right' action={loadGameData} text='YES' />
          <Button labelAria={'close save game modal'} classes='storage-modal__button' action={closeModal} text='NO' />
        </div>
      </div>
    </div>
  )
}
