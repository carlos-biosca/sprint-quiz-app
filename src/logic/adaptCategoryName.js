const adaptCategoryName = (name) => {
  if (name === 'Entertainment: Books') return 'art & literature'
  if (name === 'Entertainment: Music') return 'entertainment'
  if (name === 'Entertainment: Film') return 'entertainment'
  if (name === 'Entertainment: Television') return 'entertainment'
  if (name === 'Art') return 'art & literature'
  if (name === 'Science & Nature') return 'science & nature'
  if (name === 'Sports') return 'sports'
  if (name === 'History') return 'history'
  if (name === 'Geography') return 'geography'
  if (name === '') return ''
}

export default adaptCategoryName