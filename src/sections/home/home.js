import React from "react";
import './home.css';
import logo from '../../img/logo.png';
import plane from '../../img/plane.png';

const Home = () => {
    return (
        <div className='home_section'>
            <div className='navigation_bar'>
                <div className='logo'><img src={logo} alt='plane_logo' /></div>
                <div className='menu'>
                    <div className='list_item'><p>Home</p></div>
                    <div className='list_item'><p>About</p></div>
                    <div className='list_item'><p>Offers</p></div>
                    <div className='list_item'><p>Seats</p></div>
                    <div className='list_item'><p>Destionations</p></div>
                </div>
                <div className='contact'><button className='contact_btn'>Contact</button></div>
            </div>

            <div className='presentation_content'>
                <div className='title'>Create Ever-lasting <br /> Memories With Us</div>
                <img className='plane_img' src={plane} />
            </div>
        </div>
    )
}

export default Home;