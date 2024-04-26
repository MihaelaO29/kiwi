import React from 'react';
import './contact.css';
import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
import youtube from '../../img/youtube.png';


function Contact() {
    return (
     
                <div className='subscribe'>
                    <div className='subscribe_email'>
                        <p>Subscribe Newsletters & get Latest News</p>
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
                            <span>Home</span>
                            <span>Explore</span>
                            <span>Travel</span>
                            <span>Flight Status</span>
                            <span>Check-In</span>
                            <span>Manage your booking</span>
                        </div>
                        <div className='option'>
                            <p className='option_title'>Quick Guide</p>
                            <span>FAQ</span>
                            <span>How to</span>
                            <span>Features</span>
                            <span>Baggage</span>
                            <span>Route Map</span>
                            <span>Our Communities</span>
                        </div>

                        <div className='option'>
                            <p className='option_title'>Queries</p>
                            <span>Chauffuer</span>
                            <span>Our partners</span>
                            <span>Destination</span>
                            <span>Careers</span>
                            <span>Transportation</span>
                            <span>Programme Rules</span>
                        </div>
                    </div>
                </div>
               
    );
}

export default Contact;
