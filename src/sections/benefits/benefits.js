import React from 'react';
import './benefits.css';
import calendar from '../../img/calendar2.png';
import check from '../../img/check.png';
import save from '../../img/save.png';


function Benefits() {
    return (
            <div id='benefits' className='benefit_case'>
                <div className='benefit_title'>
                    <p className='title_content'>Travel to make memories all around the word</p>
                    <button className='view_all_button'>View All</button>
                </div>

                <div>

                    <div className='benefit_boxes'>
                        <div className='benefit_box'>
                         <div className='benefit_image_1'>
                        <img  src={calendar} alt='Calendar'/>
                        </div>
                        <div className='benefit_box_title'>Book & Relax</div>
                        <div className='benefit_description'>You can also call <br/> airlines
                            from your <br/> phone and book  <br/>a flight ticket. </div>
                    </div>

                    <div className='benefit_box'>
                         <div className='benefit_image_2'>
                        <img src={check} alt='Check'/>
                        </div>
                        <div className='benefit_box_title'>Smart Checklist</div>
                        <div className='benefit_description'>You can also call <br/> airlines
                            from your <br/> phone and book  <br/>a flight ticket. </div>
                    </div>

                    <div className='benefit_box'>
                       <div className='benefit_image_3'>
                        <img src={save} alt='Save'/> 
                        </div>
                        <div className='benefit_box_title'>Save More</div>
                        <div className='benefit_description'>You can also call <br/> airlines 
                            from your <br/> phone and book <br/> a flight ticket. </div>
                    </div>
                </div>
            </div>
            </div>
       
    );
}

export default Benefits;
