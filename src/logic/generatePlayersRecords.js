const generatePlayersRecords = (playersName, numberOfPlayers, setPlayersCard) => {
  let cards = []
  const names = Object.values(playersName).slice(0, numberOfPlayers)
  for (let name of names) {
    const card = {
      name,
      records: {
        entertainment: false,
        history: false,
        geography: false,
        nature: false,
        sports: false,
        art: false
      }
    }
    cards.push(card)
  }
  setPlayersCard(cards)
}

export default generatePlayersRecords