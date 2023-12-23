import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbars/Navbar";
import NavState from "./contexts/NavState";
import Hero from "./components/hero/Hero";


const App = () => {
  return (
    <Router>
      <NavState>
        <Navbar/>
       <main>
          <Hero/>
        </main>
      </NavState>
    </Router>
  );
};

export default App;
