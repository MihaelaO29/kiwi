import React from 'react';
import './App.css';
import Home from './sections/home/home';
import Flights from './sections/flights/flights';
import Support from './sections/support/support';

function App() {
  return (
    <div className='app'>
      <Home />
      <Flights />
      <Support />
    </div>
  );
}

export default App;
