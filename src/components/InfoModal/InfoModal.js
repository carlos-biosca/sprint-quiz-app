import './InfoModal.css'

import { world, video, monalisa, scroll, running, plant } from '../../data'


export default function InfoModal ({ closeModal }) {
  return (
    <div className="modal__background">
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
            <div className="game__piece game__piece--science modal-info__piece">
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
          <div className="modal-info__rule">
            <h3 className='modal-info__subtitle'>Gameplay</h3>
            <div className="modal-info__text">
              On your turn:
              <ol>
                <li>Spin the wheel.</li>
                <li>Answer the question!</li>
              </ol>
            </div>
          </div>
          <div className="modal-info__rule">
            <h3 className='modal-info__subtitle'>Correct Answers</h3>
            <p className="modal-info__text">
              There are six different categories of questions.<br></br>
              If you answer a question correctly a matching-colored record will be place in your score.<br></br>
              Then spin the wheel again and take another turn.
            </p>
          </div>
          <div className="modal-info__rule">
            <h3 className='modal-info__subtitle'>Final Question</h3>
            <p className="modal-info__text">
              As soon as you have won a record of each color, you will have to answer a final, deciding question.<br></br>
              This question will be of a higher difficulty.<br></br>
              If you answer the final question, you win the game!
            </p>
          </div>
          <div className="modal-info__rule">
            <h3 className='modal-info__subtitle'>Single Player</h3>
            <p className="modal-info__text">
              Win the game before reach the maximum number of fails allowed.<br></br>
              The counter will increase each time you answer wrong.
            </p>
          </div>
          <div className="modal-info__rule">
            <h3 className='modal-info__subtitle'>Multiplayer</h3>
            <p className="modal-info__text">
              Complete all colors and answer the final question first.<br></br>
              If you answer wrong, you lose the turn.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
