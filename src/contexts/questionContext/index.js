import { createContext, useContext } from "react"

import useProviderQuestion from '../../hooks/useQuestion'

const questionContext = createContext()

const ProviderQuestion = ({ children }) => {
  const question = useProviderQuestion()
  return (
    <questionContext.Provider value={question}>
      {children}
    </questionContext.Provider>
  )
}

const useQuestion = () => {
  return useContext(questionContext)
}

export { ProviderQuestion, useQuestion }