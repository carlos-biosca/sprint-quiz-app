import './SpinWheel.css'

export default function SpinWheel () {
  return (
    <div className="wheel__container">
      <div className='wheel__center' />
      <div className="wheel__wrap wheel__wrap--entertainment">
        <div className="wheel__score wheel__score--entertainment" />
      </div>
      <div className="wheel__wrap wheel__wrap--history">
        <div className="wheel__score wheel__score--history" />
      </div>
      <div className="wheel__wrap wheel__wrap--geography">
        <div className="wheel__score wheel__score--geography" />
      </div>
      <div className="wheel__wrap wheel__wrap--nature">
        <div className="wheel__score wheel__score--nature" />
      </div>
      <div className="wheel__wrap wheel__wrap--sports">
        <div className="wheel__score wheel__score--sports" />
      </div>
      <div className="wheel__wrap wheel__wrap--art">
        <div className="wheel__score wheel__score--art" />
      </div>
    </div>
  )
}
