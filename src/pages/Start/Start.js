import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './Start.css'

import { world, video, monalisa, scroll, running, plant } from '../../data'

import { useGame } from '../../contexts/gameContext'

import Button from '../../components/Button/Button'
import LoadModal from '../../components/LoadModal/LoadModal'

export default function Start ({ move, screen, anyDataStoraged, handleGameIsReady }) {
  const history = useHistory()
  const { handleLoadGameData, newGame } = useGame()

  const [loadGameModal, setLoadGameModal] = useState(false)

  const handleToggleLoadGameModal = () => {
    setLoadGameModal(loadGameModal => !loadGameModal)
  }

  const loadGameData = () => {
    const data = JSON.parse(localStorage.getItem('trivialGame'))
    handleLoadGameData(data)
    newGame.current = false
    handleGameIsReady()
    history.push('/game')
  }

  return (
    <div className={!screen ? 'start' : 'start move-left'}>
      {
        anyDataStoraged && <div className="start__options" onClick={handleToggleLoadGameModal} />
      }
      {
        loadGameModal && <LoadModal closeModal={handleToggleLoadGameModal} restart={loadGameData} anyDataStoraged={anyDataStoraged} />
      }
      <h1 className="start__title">Sprint Quiz</h1>
      <div className="start__container">
        <Button labelAria='start game' classes='button' action={() => move(true)} text='Start' />
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
