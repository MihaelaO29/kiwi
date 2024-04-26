import React from 'react';
import './more-benefits.css';
import baggage from '../../img/baggage.jpg';

function MoreBenefits() {
    return (
      <div className='more_benefits'>
      <div className='minor_benefits'>
       <p className='title_minore_benefits'>Unaccompanied Minor Lounge</p>
       
       <div className='details_benefits'>
       <div className='details'>
          <p className='subtitle'>Help through the airport</p>
          <span className='text'>You can also call airlines from your phone 
              and book a flight ticket to one of your favorite destinations. </span>
       </div>
  
       <div className='details'>
          <p className='subtitle'>Help through the airport</p>
          <span className='text'>You can also call airlines from your phone 
              and book a flight ticket to one of your favorite destinations. </span>
       </div>
       <div div className='details'>
          <p className='subtitle'>Help through the airport</p>
          <span className='text'>You can also call airlines from your phone 
              and book a flight ticket to one of your favorite destinations. </span>
       </div>
       <div div className='details'>
          <p className='subtitle'>Help through the airport</p>
          <span className='text'>You can also call airlines from your phone 
              and book a flight ticket to one of your favorite destinations. </span>
       </div>
       </div>
     </div>
     <div className='baggage_img'><img className='img'src={baggage} alt='Baggage'/></div>
     </div>
    );
  }
  
  export default MoreBenefits;
  