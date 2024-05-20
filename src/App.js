import React from 'react';
import './App.css';
import Home from './sections/home/home';
import Flights from './sections/flights/flights';
import Support from './sections/support/support';
import Benefits from './sections/benefits/benefits';
import MoreBenefits from './sections/more-benefits/more-benefits';
import Contact from './sections/contact/contact';
import Destinations from './sections/destionations/destinations';

function App() {
  return (
    <div className='app'>
      <Home />
      <Flights />
      <Support />
      <Benefits />
      <MoreBenefits />
      <Destinations />
      <Contact />npm
    </div>
  );
}

export default App;
