import './Button.css'

export default function Button ({ labelAria, classes, action, text }) {
  return (
    <button aria-label={labelAria} className={classes} onClick={action}>{text}</button>
  )
}
