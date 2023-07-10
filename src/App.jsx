import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage';

function App() {

  return (
    <React.Fragment>
      <Router>   
        <Routes>
          <Route path="/" element= {<Home/>} />

        </Routes>
      </Router>    
    </React.Fragment>
  )
}

export default App
