import { useHistory } from 'react-router-dom'

import { useState } from 'react'

import './OptionsModal.css'

import { restart, save, load, exit } from '../../data/index'

import OptionsButton from '../OptionsButton/OptionsButton'
import StorageModal from '../StorageModal/StorageModal'

export default function OptionsModal ({ closeModal, handleGameIsReady }) {
  const history = useHistory()
  const [saveGameModal, setSaveGameModal] = useState(false)
  const [loadGameModal, setLoadGameModal] = useState(false)

  const handleToggleSaveGameModal = () => {
    setSaveGameModal(saveGameModal => !saveGameModal)
  }

  const handleToggleLoadGameModal = () => {
    setLoadGameModal(loadGameModal => !loadGameModal)
  }

  const handleExitGame = () => {
    handleGameIsReady()
    closeModal()
  }

  const handleRestartGame = () => {
    history.push('/result');
    setTimeout(() => history.push('/game'), 10);
    closeModal()
  }

  return (
    <div className="modal modal-options">
      <div className="game__options modal__close" onClick={closeModal}></div>
      <h2 className='modal-options__title'>GAME SETTINGS</h2>
      <div className="modal-options__container">
        <OptionsButton color={'red'} image={restart} action={handleRestartGame} text={'Restart Game'} />
        <OptionsButton color={'green'} image={save} action={handleToggleSaveGameModal} text={'Save Game'} />
        <OptionsButton color={'blue'} image={load} action={handleToggleLoadGameModal} text={'Load Game'} />
        <OptionsButton color={'orange'} image={exit} action={handleExitGame} text={'Exit Game'} />
      </div>
      {
        saveGameModal && <StorageModal closeModal={handleToggleSaveGameModal} />
      }
    </div>
  )
}
