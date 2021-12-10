import './Question.css'

export default function Question ({ move, question }) {
  return (
    <div className="question">
      <div className="question__header">
        <h2 onClick={move} className='question__title'>{question}</h2>
      </div>
      <div className="question__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure dignissimos laboriosam. Rerum maiores fugiat est sit animi nisi illo.</div>
      <form className="question__form">
        <div className="question__form-group">
          <input type="radio" name="answer" id="1" className='question__form-input' />
          <label htmlFor="1" className='question__form-label'>Answer 1</label>
        </div>
        <div className="question__form-group">
          <input type="radio" name="answer" id="2" className='question__form-input' />
          <label htmlFor="2" className='question__form-label'>Answer 2</label>
        </div>
      </form>
    </div>
  )
}
