import './App.css';
import Navigationbar from './components/navigationbar/Navigationbar';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Homepage />
      <About />
      <Projects />
    </div>
  );
}

export default App;
