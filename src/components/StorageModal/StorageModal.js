import { useState } from 'react'

import './StorageModal.css'

import Button from '../Button/Button'

import { useGame } from '../../contexts/gameContext'

export default function StorageModal ({ closeModal }) {
  const { handleSaveGameData } = useGame()
  const [gameIsSaved, setGameIsSaved] = useState(false)

  const saveAndClose = () => {
    handleSaveGameData()
    setGameIsSaved(true)
    setTimeout(() => {
      closeModal()
    }, 2000)
  }

  return (
    <div className='storage-modal'>
      <div className="storage-modal__container">
        {
          gameIsSaved ? (
            <p className='storage-modal__action'>GAME SAVED</p>
          ) : (
            <>
              <p className='storage-modal__text'>Save current game data ?</p>
              <div className="storage-modal__options">
                <Button labelAria={'save game'} classes='storage-modal__button storage-modal__button--right' action={saveAndClose} text='YES' />
                <Button labelAria={'close save game modal'} classes='storage-modal__button' action={closeModal} text='NO' />
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}
