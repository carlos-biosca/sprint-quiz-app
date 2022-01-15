import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './OptionsModal.css'

import { useGame } from '../../contexts/gameContext'

import { restart, save, load, exit } from '../../data/index'

import OptionsButton from '../OptionsButton/OptionsButton'
import StorageModal from '../StorageModal/StorageModal'
import LoadModal from '../LoadModal/LoadModal'

export default function OptionsModal ({ closeModal, handleGameIsReady, anyDataStoraged, handleIsGameSaved }) {
  const history = useHistory()
  const { newGame } = useGame()
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

  const handleRestartGame = (value) => {
    newGame.current = value
    history.push('/result');
    setTimeout(() => history.push('/game'), 10);
    closeModal()
  }

  return (
    <div className="modal__background">
      <div className="modal modal-options">
        <div className="game__options modal__close" onClick={closeModal}></div>
        <h2 className='modal-options__title'>GAME OPTIONS</h2>
        <div className="modal-options__container">
          <OptionsButton color={'red'} image={restart} action={() => handleRestartGame(true)} text={'Restart Game'} />
          <OptionsButton color={'green'} image={save} action={handleToggleSaveGameModal} text={'Save Game'} />
          <OptionsButton color={'blue'} image={load} action={handleToggleLoadGameModal} text={'Load Game'} />
          <OptionsButton color={'orange'} image={exit} action={handleExitGame} text={'Exit Game'} />
        </div>
        {
          saveGameModal && <StorageModal closeModal={handleToggleSaveGameModal} handleIsGameSaved={handleIsGameSaved} />
        }
        {
          loadGameModal && <LoadModal closeModal={handleToggleLoadGameModal} restart={handleRestartGame} anyDataStoraged={anyDataStoraged} />
        }
      </div>
    </div>
  )
}
