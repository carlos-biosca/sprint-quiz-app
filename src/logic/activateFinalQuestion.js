const activateFinalQuestion = (cards, turn) => {
  let activate = true
  const recordsToCheck = cards.current[turn - 1].records
  for (const record in recordsToCheck) {
    if (!recordsToCheck[record]) activate = false
  }
  if (activate) cards.current[turn - 1].finalQuestion = activate
}

export default activateFinalQuestion