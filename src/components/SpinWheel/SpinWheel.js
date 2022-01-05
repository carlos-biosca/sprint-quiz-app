import './SpinWheel.css'

export default function SpinWheel () {
  return (
    <div className="wheel__container">
      <div className='wheel__center' />
      <div class="wheel__score wheel__score--entertainment"></div>
      <div class="wheel__score wheel__score--history"></div>
      <div class="wheel__score wheel__score--geography"></div>
      <div class="wheel__score wheel__score--nature"></div>
      <div class="wheel__score wheel__score--sports"></div>
      <div class="wheel__score wheel__score--art"></div>
    </div>
  )
}
