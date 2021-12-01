import './Select.css'

export default function Select () {
  const difficultyLevels = ['easy', 'normal', 'hard']
  const [difficulty, setDifficulty] = ('normal')

  //functions
  const handleInfo = () => {
    console.log('info');
  }

  const handleLeftButton = () => {
    console.log('left');
  }

  const handleRightButton = () => {
    console.log('right');
  }

  return (
    <div className="select">
      <div className="select__header">
        <h2 className="select__title">Let's play</h2>
        <div className="select__info" onClick={handleInfo}></div>
      </div>
      <div className="select__form">
        <div className="select__form-group">
          <p className="select__label">Select difficulty</p>
          <div className="select__input">
            <button className="select__left-arrow" onClick={handleLeftButton}></button>
            <div className="select__text">
              {
                difficultyLevels.map((level, index) => {
                  return <span key={index} className="select__level">{level}</span>
                })
              }
            </div>
            <button className="select__right-arrow" onClick={handleRightButton}></button>
          </div>
        </div>
      </div>
    </div>
  )
}
