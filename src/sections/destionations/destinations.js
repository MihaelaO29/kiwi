import React from 'react';
import './destinations.css';
import paris from '../../img/paris.jpg';
import barcelona from '../../img/barcelona.jpg';
import greece from '../../img/greece.jpg';
import dubai from '../../img/dubai.jpg';


function Destinations() {
    return (
            <div className='top_places'>
                <div className='top_title'>
                    <span>Top places to travel this month!</span>
                </div>
                <div className='all_destinations'>
                    <img className='destinations' src={paris} alt='Paris' />
                    <img className='destinations' src={barcelona} alt='Barcelona' />
                    <img className='destinations' src={greece} alt='Greece' />
                    <img className='destinations' src={dubai} alt='Dubai' />
                </div>
      </div>
     
    
    );
  }
  
  export default Destinations;
  