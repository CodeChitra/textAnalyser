import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      showAlert("Dark mode has been enabled", "success")
      document.body.style.backgroundColor = "#22577E"
      document.body.style.color = "white"
    }
    else {
      setMode('light')
      showAlert("Light mode has been enabled", "success")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"

    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextAnalyser" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">

        {/* <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm heading="Enter Text To Analyse" mode={mode} showAlert={showAlert} />} />
          </Routes> */}
        <TextForm heading="Enter Text To Analyse" mode={mode} showAlert={showAlert} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
