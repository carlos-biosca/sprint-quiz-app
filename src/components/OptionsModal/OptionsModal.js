import './OptionsModal.css'

import restart from '../../assets/icons/refreshing.png'
import save from '../../assets/icons/memory-card.png'
import load from '../../assets/icons/loading.png'
import exit from '../../assets/icons/exit.png'

import OptionsButton from '../OptionsButton/OptionsButton'

import { useGame } from '../../contexts/gameContext'

import generatePlayersRecords from '../../logic/generatePlayersRecords'

export default function OptionsModal ({ closeModal }) {
  const { handleGameIsReady, playersName, numberOfPlayers, setPlayersCards } = useGame()

  const handleButton = () => {
    console.log('click');
  }

  const handleExitGame = () => {
    handleGameIsReady()
    closeModal()
  }

  const handleRestartGame = () => {
    generatePlayersRecords(playersName, numberOfPlayers, setPlayersCards)
    closeModal()
  }

  return (
    <div className="modal modal-options">
      <div className="game__options modal__close" onClick={closeModal}></div>
      <h2 className='modal-options__title'>GAME SETTINGS</h2>
      <div className="modal-options__container">
        <OptionsButton color={'red'} image={restart} action={handleRestartGame} text={'Restart Game'} />
        <OptionsButton color={'green'} image={save} action={handleButton} text={'Save Game'} />
        <OptionsButton color={'blue'} image={load} action={handleButton} text={'Load Game'} />
        <OptionsButton color={'orange'} image={exit} action={handleExitGame} text={'Exit Game'} />
      </div>
    </div>
  )
}
