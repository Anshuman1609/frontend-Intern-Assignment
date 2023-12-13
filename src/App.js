import React from 'react';
import './App.css';
import First from '../src/pages/First';
import Second from '../src/pages/Second';
import Third from '../src/pages/Third';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {

  

  return (
    <div className='App'>

      <First />
      <Second />
      <Third />
    </div>
  )
}

export default App