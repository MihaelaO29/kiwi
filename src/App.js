import React from 'react';
import './App.css';
import location from './img/location.png';
import user from './img/user.png';
import calendar from './img/calendar.png';
import Home from './sections/home/home';
import Flights from './sections/flights/flights';

function App() {
  return (
    <div className='app'>
      <Home />
      <Flights />
    </div>
  );
}

export default App;
