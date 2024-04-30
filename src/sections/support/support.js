import React from 'react';
import './support.css';
import support from '../../img/support.png';

function Support() {
    return (

        <div id='support' className='travel_support'>
            <div className='support_title'>
                <span className='first_title'>TRAVEL SUPPORT</span>
                <span className='second_title'>Plan your travel with confidence</span>
                <span className='last_title'>Find help with booking and travel plans, see what to expect along the journey!</span>
            </div>

            <div className='travel_details'>
                <div className='all_details'>
                    <div className='travel_requirements'>
                        <p className='number_requirement_01'>01</p>
                        <p className='travel_requirement_title'>Travel requirements for Dubai</p>
                        <p className='travel_requirement_text'> Find help with booking and travel plans, see what to expect along the journey to your favourite
                            destionations!</p>
                    </div>
                    <div className='travel_requirements'>
                        <p className='number_requirement_02'>02</p>
                        <p className='travel_requirement_title'>Travel requirements for Dubai</p>
                        <p className='travel_requirement_text'> Find help with booking and travel plans, see what to expect along the journey to your favourite
                            destionations!</p>
                    </div>
                    <div className='travel_requirements'>
                        <p className='number_requirement_03'>03</p>
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
