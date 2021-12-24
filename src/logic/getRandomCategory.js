const getRandomCategory = () => {
  let randomCategory
  let randomSubcategory
  const categories = [[11, 12, 14], 23, 22, 17, 21, [25, 10]]
  randomCategory = Math.floor(Math.random() * 6)
  if (randomCategory === 0) {
    randomSubcategory = Math.floor(Math.random() * 3)
    return categories[randomCategory][randomSubcategory]
  }
  if (randomCategory === 5) {
    randomSubcategory = Math.floor(Math.random() * 2)
    return categories[randomCategory][randomSubcategory]
  }
  return categories[randomCategory]
}

export default getRandomCategory