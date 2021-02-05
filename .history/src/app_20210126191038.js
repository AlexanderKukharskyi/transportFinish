import { Route, BrowserRouter as Router } from "react-router-dom"
import { HomePage } from "./pages/home-page"


function App () {
  return (
    <div className="root">
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
    </div>
  )
}

export {
  App
}


