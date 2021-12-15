import './OptionsModal.css'

export default function OptionsModal ({ closeModal }) {
  return (
    <div className="modal modal-options">
      <h2 onClick={closeModal}>GAME SETTINGS</h2>
    </div>
  )
}
