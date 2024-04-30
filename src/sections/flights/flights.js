import React from 'react';
import './flights.css';
import location from '../../img/location.png';
import user from '../../img/user.png';
import calendar from '../../img/calendar.png';


function Flights() {
  return (
    <div>
      <div id='flights' className='flights_case'>
        <div className='flights_details'>
          <div className='type_class'>
            <span className='economy_class_option'>Economy</span>
            <span className='business_class_option'>Business Class</span>
            <span className='first_class_option'>First Class</span>
          </div>
    
      <div className='search_case'>
          <div className='search_flight'>
            <div className='search_flight_img'><img src={location} alt='Location' /></div>
            <div className='search_flight_details'>
              <span className='text_title'>Location</span>
              <span className='text_description'>Where do you want to </span>
            </div>
          </div>

          <div className='search_flight'>
            <div className='search_flight_img'><img src={user} alt='User' /></div>
            <div className='search_flight_details'>
              <span className='text_title'>Travelers</span>
              <span className='text_description'>Add guests</span>
            </div>
          </div>

          <div className='search_flight'>
            <div className='search_flight_img'><img src={calendar} alt='Calendar' /></div>
            <div className='search_flight_details'>
              <span className='text_title'>Check In</span>
              <span className='text_description'>Add date </span>
            </div>
          </div>

          <div className='search_flight'>
            <div className='search_flight_img'> <img src={calendar} alt='Calendar' /></div>
            <div className='search_flight_details'>
              <span className='text_title'>Check Out</span>
              <span className='text_description'>Add date </span>
            </div>
          </div>

          <button className='search_flight_btn'>Search Flight</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Flights;


