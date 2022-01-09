const calculateWheelNumber = (wheel, degrees) => {
  if (degrees.current === 0) degrees.current = 120
  degrees.current += Math.ceil(Math.random() * 1000) + 2000;
  wheel.current.style.transform = `rotate(${degrees.current}deg)`
  return Math.floor((degrees.current % 360) / 60)
}

export default calculateWheelNumber