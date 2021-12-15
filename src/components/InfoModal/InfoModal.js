import './InfoModal.css'

export default function InfoModal ({ closeModal }) {
  return (
    <div className='modal modal-info'>
      <h2 onClick={closeModal}>Info</h2>
    </div>
  )
}
