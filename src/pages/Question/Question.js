import './Question.css'

export default function Question ({ move, screen, question }) {
  return (
    <div className={!screen ? 'question' : 'question move-left'}>
      <h2 onClick={move}>{question}</h2>
    </div>
  )
}
