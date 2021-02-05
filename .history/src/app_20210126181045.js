import { Route, BrowserRouter as Router } from "react-router-dom"
import { HomePage } from "./pages/home-page"
import "./styles.css"


function App () {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
  )
}

export {
  App
}


