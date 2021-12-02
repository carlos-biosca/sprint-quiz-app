import { useState, useEffect, useRef } from 'react';

import './SelectOptions.css'

export default function SelectOptions ({ data, initial }) {
  const options = useRef(null)
  const [current, setCurrent] = useState(initial.position)
  const [option, setOption] = useState(initial.option)

  const handlePrev = () => {
    setCurrent(current => current === 0 ? data.length - 1 : current - 1)
  }

  const handleNext = () => {
    setCurrent(current => current === data.length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    setOption(options.current.children[current].textContent)
  }, [current]);

  return (
    <div className="select__input">
      <button className="select__left-arrow" onClick={handlePrev}></button>
      <div className="select__box" ref={options}>
        {
          data.map((level, index) => {
            return (
              <span key={index} className={level === option ? 'select__option select__option--show' : 'select__option'}>
                {level}
              </span>
            )
          })
        }
      </div>
      <button className="select__right-arrow" onClick={handleNext}></button>
    </div>
  )
}
