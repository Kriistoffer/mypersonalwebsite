import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigationbar from './components/navigationbar/Navigationbar';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Homepage />
        <About />
        <Projects />
      </div>
    </Router>
  );
}

export default App;
