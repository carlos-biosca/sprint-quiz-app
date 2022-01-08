const getRandomCategory = (number) => {
  let randomSubcategory
  const apiCategories = [23, [11, 12, 14], [25, 10], 21, 17, 22]
  if (number === 1) {
    randomSubcategory = Math.floor(Math.random() * 3)
    return apiCategories[number][randomSubcategory]
  }
  if (number === 2) {
    randomSubcategory = Math.floor(Math.random() * 2)
    return apiCategories[number][randomSubcategory]
  }
  return apiCategories[number]
}

export default getRandomCategory