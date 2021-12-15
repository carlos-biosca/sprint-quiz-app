const randomQuestion = (setQuestion, handleScreen) => {
  const themes = ['entertainment ', 'history ', 'geography ', 'nature & science', 'sports ', 'art & literature']
  const random = Math.floor(Math.random() * 6)
  setQuestion(themes[random])
  handleScreen()
}

export default randomQuestion