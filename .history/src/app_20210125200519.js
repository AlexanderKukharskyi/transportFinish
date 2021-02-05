import { Router } from "react-router-dom"
import { HomePage} from "./pages/home-page"

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


