const adaptCategoryName = (name = '') => {
  if (name === 'Entertainment: Books') return { name: 'art & literature', class: 'art' }
  if (name === 'Entertainment: Music') return { name: 'entertainment', class: 'entertainment' }
  if (name === 'Entertainment: Film') return { name: 'entertainment', class: 'entertainment' }
  if (name === 'Entertainment: Television') return { name: 'entertainment', class: 'entertainment' }
  if (name === 'Art') return { name: 'art & literature', class: 'art' }
  if (name === 'Science & Nature') return { name: 'science & nature', class: 'nature' }
  if (name === 'Sports') return { name: 'sports', class: 'sports' }
  if (name === 'History') return { name: 'history', class: 'history' }
  if (name === 'Geography') return { name: 'geography', class: 'geography' }
  if (name === '') return ''
}

export default adaptCategoryName