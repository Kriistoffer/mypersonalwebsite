import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigationbar from './components/navigationbar/Navigationbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
      </div>
    </Router>
  );
}

export default App;
