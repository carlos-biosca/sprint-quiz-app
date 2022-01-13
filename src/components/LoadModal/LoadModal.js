import { useEffect } from 'react'

import './LoadModal.css'

import Button from '../Button/Button'

import { useGame } from '../../contexts/gameContext'

export default function LoadModal ({ closeModal, restart, anyDataStoraged }) {
  const { handleLoadGameData } = useGame()

  useEffect(() => {
    if (!anyDataStoraged) {
      setTimeout(() => {
        closeModal()
      }, 2000)
    }
  }, [anyDataStoraged, closeModal])

  const loadGameData = () => {
    const data = JSON.parse(localStorage.getItem('trivialGame'))
    handleLoadGameData(data)
    restart(false)
  }

  return (
    <div className='storage-modal'>
      <div className="storage-modal__container load-modal__container">
        {
          anyDataStoraged ? (
            <>
              <p className='storage-modal__text load-modal__text'>Load saved game data ?</p>
              <div className="storage-modal__options">
                <Button labelAria={'save game'} classes='storage-modal__button storage-modal__button--right' action={loadGameData} text='YES' />
                <Button labelAria={'close save game modal'} classes='storage-modal__button' action={closeModal} text='NO' />
              </div>
            </>
          ) : (
            <p className='storage-modal__action'>NO DATA SAVED</p>
          )
        }
      </div>
    </div>
  )
}
