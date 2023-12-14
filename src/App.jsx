import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbars/Navbar";


const App = () => {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
};

export default App;
