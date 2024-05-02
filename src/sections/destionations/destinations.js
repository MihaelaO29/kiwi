import React from 'react';
import './destinations.css';
import { motion } from "framer-motion"
import paris from '../../img/paris.jpg';
import barcelona from '../../img/barcelona.jpg';
import greece from '../../img/greece.jpg';
import dubai from '../../img/dubai.jpg';


function Destinations() {
    return (
        <div id='destinations' className='top_places'>
            <div className='top_title'>
                <span>Top places to travel this month!</span>
            </div>
            <div className='all_destinations'>
                <motion.img
                    key={paris}
                    src={paris}
                    className='destinations'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                    viewport={{ once: false, amount: .5 }}
                />
                 <motion.img
                    key={barcelona}
                    src={barcelona}
                    className='destinations'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }}
                    viewport={{ once: false, amount: .5 }}
                />
                 <motion.img
                    key={greece}
                    src={greece}
                    className='destinations'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.5 } }}
                    viewport={{ once: false, amount: .5 }}
                />
                 <motion.img
                    key={dubai}
                    src={dubai}
                    className='destinations'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.5 } }}
                    viewport={{ once: false, amount: .5 }}
                />
            </div>
        </div>


    );
}

export default Destinations;
