import './Start.css'

import { world, video, monalisa, scroll, running, plant } from '../../data'

import Button from '../../components/Button/Button'

export default function Start ({ move, screen }) {
  return (
    <div className={!screen ? 'start' : 'start move-left'}>
      <h1 className="start__title">Sprint Quiz</h1>
      <div className="start__container">
        <Button labelAria='start game' classes='button' action={move} text='Start' />
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
