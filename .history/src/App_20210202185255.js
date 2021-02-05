import { Route, BrowserRouter as Router } from "react-router-dom"
import { HomePage } from "./pages/home-page"
import { ResultPage } from "./pages/result-page"


function App () {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/results" component={ResultPage} />
      <Route path="/" component={FinalPage} />
    </Router>
  )
}

export {
  App
}


