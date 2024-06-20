import './App.css';
import About from './Components/About';
import Nav from './Components/Nav';
import Text from './Components/Textform';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom";




function App() {


  const [mode, setMode] = useState("light")
  const clicked = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#51829B"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      <Nav title="Texteditor" about="About us" mode={mode} enable={clicked} />
      <Router>
        <div className="container">

          <Routes>
            <Route exact path='/about' element={<div className="container"><About /></div>}></Route>
            <Route exact path='/' element={<Text heading="Enter Your Text to Analyze" mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>


    </>
  );
}

export default App;
