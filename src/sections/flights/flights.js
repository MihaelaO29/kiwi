import React from 'react';
import './flights.css';
import { motion } from "framer-motion"
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
              <div className='search_flight_img'>
                <motion.img
                  key={location}
                  src={location}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                  viewport={{ once: false, amount: .5 }}
                />
              </div>
              <div className='search_flight_details'>
                <span className='text_title'>Location</span>
                <span className='text_description'>Where do you want to </span>
              </div>
            </div>

            <div className='search_flight'>
              <div className='search_flight_img'>
                <motion.img
                  key={user}
                  src={user}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                  viewport={{ once: false, amount: .5 }}
                />
              </div>
              <div className='search_flight_details'>
                <span className='text_title'>Travelers</span>
                <span className='text_description'>Add guests</span>
              </div>
            </div>

            <div className='search_flight'>
              <div className='search_flight_img'>
                <motion.img
                  key={calendar}
                  src={calendar}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
                  viewport={{ once: false, amount: .5 }}
                />
              </div>
              <div className='search_flight_details'>
                <span className='text_title'>Check In</span>
                <span className='text_description'>Add date </span>
              </div>
            </div>

            <div className='search_flight'>
              <div className='search_flight_img'>
                <motion.img
                  key={calendar}
                  src={calendar}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } }}
                  viewport={{ once: false, amount: .5 }}
                />
              </div>
              <div className='search_flight_details'>
                <span className='text_title'>Check Out</span>
                <span className='text_description'>Add date </span>
              </div>
            </div>

            <motion.button
              className='search_flight_btn'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >Search Flight
            </motion.button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Flights;


