import React from 'react';
import './more-benefits.css';
import { motion } from "framer-motion"
import baggage from '../../img/baggage.jpg';

function MoreBenefits() {
  return (
    <div className='more_benefits'>
      <div className='minor_benefits'>
        <p className='title_minore_benefits'>Unaccompanied Minor Lounge</p>

        <div className='details_benefits'>
          <div className='details'>
            <motion.span
              className='subtitle'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
              viewport={{ once: false, amount: .5 }}
            >
             <p> Help through the airport </p>
            </motion.span>

            <span className='text'>You can also call airlines from your phone
              and book a flight ticket to one of your favorite destinations. </span>
          </div>

          <div className='details'>
          <motion.span
              className='subtitle'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
              viewport={{ once: false, amount: .5 }}
            >
             <p> Help through the airport </p>
            </motion.span>
            <span className='text'>You can also call airlines from your phone
              and book a flight ticket to one of your favorite destinations. </span>
          </div>
          <div div className='details'>
          <motion.span
              className='subtitle'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
              viewport={{ once: false, amount: .5 }}
            >
             <p> Help through the airport </p>
            </motion.span>
            <span className='text'>You can also call airlines from your phone
              and book a flight ticket to one of your favorite destinations. </span>
          </div>
          <div div className='details'>
          <motion.span
              className='subtitle'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
              viewport={{ once: false, amount: .5 }}
            >
             <p> Help through the airport </p>
            </motion.span>
            <span className='text'>You can also call airlines from your phone
              and book a flight ticket to one of your favorite destinations. </span>
          </div>
        </div>
      </div>
      <div className='baggage_img'>
      <motion.img
                  className='img'
                  key={baggage}
                  src={baggage}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0, transition: { from: 90, delay: 0.7, duration: 1 } }}
                  viewport={{ once: false, amount: .5 }}
                />
     
    </div>
    </div>
  );
}

export default MoreBenefits;
