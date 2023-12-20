import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbars/Navbar";
import NavState from "./contexts/NavState";


const App = () => {
  return (
    <Router>
      <NavState>
        <Navbar/>
      </NavState>
    </Router>
  );
};

export default App;
