const generatePlayersRecords = (playersName, numberOfPlayers, playersCards, fails, turn) => {
  let cards = []
  const names = Object.values(playersName).slice(0, numberOfPlayers)
  for (let name of names) {
    const card = {
      name,
      records: {
        entertainment: false,
        history: false,
        geography: false,
        science: false,
        sports: false,
        art: false
      },
      finalQuestion: false
    }
    cards.push(card)
  }
  playersCards.current = cards
  fails.current = 0
  turn.current = 1
}

export default generatePlayersRecords