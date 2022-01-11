import './OptionsButton.css'

export default function OptionsButton ({ color, image, action, text }) {
  return (
    <button className={`modal-options__button`} onClick={action}>
      <span className={`modal-options__icon modal-options__icon--${color}`}>
        <img src={image} alt="restart button" />
      </span>
      <span className='modal-options__text'>{text}</span>
    </button>
  )
}
