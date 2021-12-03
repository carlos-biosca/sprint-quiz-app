import './Start.css'

import world from '../../assets/icons/worldwide.png'
import video from '../../assets/icons/video.png'
import monalisa from '../../assets/icons/mona-lisa.png'
import scroll from '../../assets/icons/scroll.png'
import running from '../../assets/icons/running.png'
import plant from '../../assets/icons/plant-based.png'

import Button from '../../components/Button/Button'

export default function Start () {

  const handleStart = () => {
    console.log('start');
  }

  return (
    <div className="start">
      <h1 className="start__title">Sprint Quiz</h1>
      <div className="start__container">
        <Button labelAria='start game' classes='button' action={handleStart} text='Start' />
      </div>
      <img src={world} alt="" className="icon icon__world" />
      <img src={video} alt="" className="icon icon__video" />
      <img src={monalisa} alt="" className="icon icon__monalisa" />
      <img src={scroll} alt="" className="icon icon__scroll" />
      <img src={running} alt="" className="icon icon__running" />
      <img src={plant} alt="" className="icon icon__plant" />
    </div>
  )
}
