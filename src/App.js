
import './App.css';
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, { useState } from 'react';
 import Alert from './components/Alert';
 import AboutUs from "./components/AboutUs";
//  import {
//   BroweserRouter as Router,
//   Switch,
//   Route,
//   Link
//  } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=> {
       setAlert({
        msg : message,
        type: type
       })
       setTimeout(() => {
        setAlert(null);
       }, 1500);
  }
  const toggleMode =() =>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }

  }
  return (
   <>
   <Router>
   <Navbar title='TextUtils' aboutUs='About text' mode={mode} toggleMode={toggleMode}/>
   
      <Alert alert={alert}/>
   
   <div className=''>
  <Routes>
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextForm" mode={mode}/>} />
    <Route exact path="/about" element={<AboutUs />} />
        
  </Routes>
  </div>
  </Router>
   
   <div className='container my-3'>
    {/* <AboutUs/> */}
   </div>
   </>
  );
}

export default App;
