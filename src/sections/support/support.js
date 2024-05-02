import React from 'react';
import './support.css';
import { motion } from "framer-motion"
import support from '../../img/support.png';

function Support() {
    return (

        <div id='support' className='travel_support'>
            <div className='support_title'>
                <span className='first_title'>TRAVEL SUPPORT</span>
                <span className='second_title'> Plan your travel with confidence</span>
                <span className='last_title'>Find help with booking and travel plans, see what to expect along the journey!</span>
            </div>

            <div className='travel_details'>
                <div className='all_details'>
                    <div className='travel_requirements'>
                        <motion.div
                            className='number_requirement_01'
                            whileInView={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "20%", "45%"],
                            }}
                            viewport={{ once: false, amount: .5 }}
                        >01
                        </motion.div>
                        <p className='travel_requirement_title'>Travel requirements for Dubai</p>
                        <p className='travel_requirement_text'> Find help with booking and travel plans, see what to expect along the journey to your favourite
                            destionations!</p>
                    </div>
                    <div className='travel_requirements'>
                        <motion.div
                            className='number_requirement_02'
                            whileInView={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "20%", "45%"],
                            }}
                            viewport={{ once: false, amount: .5 }}
                        >02
                        </motion.div>
                        <p className='travel_requirement_title'>Travel requirements for Dubai</p>
                        <p className='travel_requirement_text'> Find help with booking and travel plans, see what to expect along the journey to your favourite
                            destionations!</p>
                    </div>
                    <div className='travel_requirements'>
                        <motion.div
                            className='number_requirement_03'
                            whileInView={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "20%", "45%"],
                            }}
                            viewport={{ once: false, amount: .5 }}
                        >03
                        </motion.div>
                        <p className='travel_requirement_title'>Travel requirements for Dubai</p>
                        <p className='travel_requirement_text'> Find help with booking and travel plans, see what to expect along the journey to your favourite
                            destionations!</p>
                    </div>
                </div>

                <div className='travel_support_img'>
                    <img className='travel_support_cover' src={support} alt='Airplane Windows' />
                </div>
            </div>
        </div>
    );
}

export default Support;
