import React from 'react';
import './contact.css';
import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
import youtube from '../../img/youtube.png';


function Contact() {
    return (
     
                <div id='contact' className='subscribe'>
                    <div className='subscribe_email'>
                        <p className='subscribe_title'>Subscribe Newsletters & get Latest News</p>
                        <input className='subscribe_input' type='text' name='email' placeholder='Enter your email address'/>
                        <button className='subscribe_btn'>Subscribe Now</button>
                    </div>

                    <div className='contact_options'>
                        <div className='social-media' >
                           <div className='social_media_logo'><img src={facebook} alt='Facebook-logo' /></div>
                           <div className='social_media_logo'><img src={twitter} alt='Twitter-logo' /></div>
                           <div className='social_media_logo'><img src={youtube} alt='Youtube-logo' /></div>
                        </div>

                        <div className='option'>
                            <p className='option_title'>Information</p>
                            <span className='name_option'>Home</span>
                            <span className='name_option' >Explore</span>
                            <span className='name_option'>Travel</span>
                            <span className='name_option'>Flight Status</span>
                            <span className='name_option'>Check-In</span>
                            <span className='name_option'>Manage your booking</span>
                        </div>
                        <div className='option'>
                            <p className='option_title'>Quick Guide</p>
                            <span className='name_option'>FAQ</span>
                            <span className='name_option'>How to</span>
                            <span className='name_option'>Features</span>
                            <span className='name_option'>Baggage</span>
                            <span className='name_option'>Route Map</span>
                            <span className='name_option'>Our Communities</span>
                        </div>

                        <div className='option'>
                            <p className='option_title'>Queries</p>
                            <span className='name_option'>Chauffuer</span>
                            <span className='name_option'>Our partners</span>
                            <span className='name_option'>Destination</span>
                            <span className='name_option'>Careers</span>
                            <span className='name_option'>Transportation</span>
                            <span className='name_option'>Programme Rules</span>
                        </div>
                    </div>
                </div>
               
    );
}

export default Contact;
