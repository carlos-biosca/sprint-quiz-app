import './OptionsModal.css'

import restart from '../../assets/icons/refreshing.png'
import save from '../../assets/icons/memory-card.png'
import load from '../../assets/icons/loading.png'
import exit from '../../assets/icons/exit.png'

import OptionsButton from '../OptionsButton/OptionsButton'

export default function OptionsModal ({ closeModal }) {
  const handleButton = () => {
    console.log('click');
  }

  return (
    <div className="modal modal-options">
      <div className="game__options modal-options__close" onClick={closeModal}></div>
      <h2 className='modal-options__title'>GAME SETTINGS</h2>
      <div className="modal-options__container">
        <OptionsButton color={'red'} image={restart} action={handleButton} text={'Restart Game'} />
        <OptionsButton color={'green'} image={save} action={handleButton} text={'Save Game'} />
        <OptionsButton color={'blue'} image={load} action={handleButton} text={'Load Game'} />
        <OptionsButton color={'orange'} image={exit} action={handleButton} text={'Exit Game'} />
      </div>
    </div>
  )
}
