import './TransitionBackground.css'

import { world, video, monalisa, scroll, running, plant } from '../../data'

export default function TransitionBackground () {
  return (
    <div className='transition'>
      <div className="transition__column">
        <div className='transition__category transition__category--entertainment'>
          <img src={video} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--history'>
          <img src={scroll} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--geography'>
          <img src={world} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--nature'>
          <img src={plant} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--sports'>
          <img src={running} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--art'>
          <img src={monalisa} alt="" className="transition__icon" />
        </div>
      </div>
      <div className="transition__column">
        <div className='transition__category transition__category--entertainment'>
          <img src={world} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--history'>
          <img src={plant} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--geography'>
          <img src={monalisa} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--nature'>
          <img src={running} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--sports'>
          <img src={scroll} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--art'>
          <img src={video} alt="" className="transition__icon" />
        </div>
      </div>
      <div className="transition__column">
        <div className='transition__category transition__category--entertainment'>
          <img src={monalisa} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--history'>
          <img src={running} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--geography'>
          <img src={video} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--nature'>
          <img src={scroll} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--sports'>
          <img src={world} alt="" className="transition__icon" />
        </div>
        <div className='transition__category transition__category--art'>
          <img src={plant} alt="" className="transition__icon" />
        </div>
      </div>
    </div>
  )
}
