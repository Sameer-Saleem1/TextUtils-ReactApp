import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState("");

  const showAlert = (message, type) =>{
    setAlert({ 
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
        if(mode === 'light'){
          setMode ('dark')
          document.body.style.backgroundColor = '#171d42';
          showAlert("Dark mode has been enabled" , "success");
        }
        else{
          setMode('light')
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enabled", "success");
        }
  }

  return (
    <>
        <Router>
          <Navbar title='TextUtils' mode={mode} toggleMode= {toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-4">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading= "Enter the text to analyze"  mode={mode}/>} />
            
          </Routes>
          </div>
          </Router>
    </>
  );
}

export default App;
