import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  // Dark Mode Settings

  const [currentMode, toggleMode] = useState(false); //Initially, Dark mode is off

  const modeStates = {
      currentMode : currentMode,
      toggleMode : toggleMode
  }

  return (
    <div>
      {/* Passing Props to react Component */}
      <Router>
        <Navbar title = "TextUtils" mode = {modeStates}/>
        <Routes>
          <Route exact path="/" element={<TextForm heading = "Enter the text below" mode = {modeStates}/>} />
          <Route exact path="/about" element={<About mode = {modeStates}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
