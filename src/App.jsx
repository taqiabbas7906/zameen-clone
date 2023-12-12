import { BrowserRouter as Router , Routes } from "react-router-dom"
import FirstNav from "./components/navbars/FirstNav"


const App = () => {
  return (
    <Router>
    <FirstNav/>
    </Router>
  )
}

export default App