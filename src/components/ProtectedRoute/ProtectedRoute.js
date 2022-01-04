import { Redirect, Route } from "react-router";

export default function ProtectedRoute ({ children, game, redirectTo }) {
  return (
    <Route
      render={({ location }) =>
        game ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${redirectTo}`,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
