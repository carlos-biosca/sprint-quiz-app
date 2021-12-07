import { createContext, useContext } from "react"

import useProviderGame from '../../hooks/useGame'

const gameContext = createContext()

const ProviderGame = ({ children }) => {
  const game = useProviderGame()
  return (
    <gameContext.Provider value={game}>
      {children}
    </gameContext.Provider>
  )
}

const useGame = () => {
  return useContext(gameContext)
}

export { ProviderGame, useGame }

