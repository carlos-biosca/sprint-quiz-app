import './InfoModal.css'

import { world, video, monalisa, scroll, running, plant } from '../../data'


export default function InfoModal ({ closeModal }) {
  return (
    <div className='modal modal-info'>
      <div className="game__options modal__close" onClick={closeModal}></div>
      <h2 className='modal-info__title'>Categories</h2>
      <section className="modal-info__section">
        <div className="modal-info__record">
          <div className="game__piece game__piece--entertainment modal-info__piece">
            <img src={video} alt="Entertainment" />
          </div>
          <p className='modal-info__category'>Entertainment</p>
        </div>
        <div className="modal-info__record">
          <div className="game__piece game__piece--history modal-info__piece">
            <img src={scroll} alt="History" />
          </div>
          <p className='modal-info__category'>History</p>
        </div>
        <div className="modal-info__record">
          <div className="game__piece game__piece--geography modal-info__piece">
            <img src={world} alt="Geography" />
          </div>
          <p className='modal-info__category'>Geography</p>
        </div>
        <div className="modal-info__record">
          <div className="game__piece game__piece--nature modal-info__piece">
            <img src={plant} alt="Nature" />
          </div>
          <p className='modal-info__category'>Science & nature</p>
        </div>
        <div className="modal-info__record">
          <div className="game__piece game__piece--sports modal-info__piece">
            <img src={running} alt="Sports" />
          </div>
          <p className='modal-info__category'>Sports</p>
        </div>
        <div className="modal-info__record">
          <div className="game__piece game__piece--art modal-info__piece">
            <img src={monalisa} alt="Art" />
          </div>
          <p className='modal-info__category'>Art & literature</p>
        </div>
      </section>
      <h2 className='modal-info__title modal-info__title--margin'>Rules</h2>
      <section className="modal-info__section">
        <p className="modal-info__text">
          As soon as you have won a scoring wedge of each color, start making your way back to the center space and try to land there by exact count.
          <br />
          <br />
          If you overshoot, keep playing, answering questions in the categories you land on, until you land on the center.
          <br />
          <br />
          When you get to the center, the other players (without looking at any cards) decide from which category you will have to answer a final, deciding question.
          <br />
          <br />
          As in the rest of the game, the level of question will depend upon your die roll.
        </p>
      </section>
    </div>
  )
}
