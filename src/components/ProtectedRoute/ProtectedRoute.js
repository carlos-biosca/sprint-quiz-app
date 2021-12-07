import { Redirect, Route } from "react-router";

import { useGame } from "../../contexts/gameContext";

export default function ProtectedRoute ({ children }) {
  const { gameIsReady } = useGame()
  return (
    <Route
      render={({ location }) =>
        gameIsReady ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
