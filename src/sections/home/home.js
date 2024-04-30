import React, { useState } from "react";
import { motion } from "framer-motion";
import './home.css';
import logo from '../../img/logo.png';
import plane from '../../img/plane.png';
import more from '../../img/more.png'
import { Link } from "react-scroll";

const Home = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleSeeMenu = () => {
        setOpenMenu(true)
    }

    const handleHideMenu = () => {
        setOpenMenu(false)
    }

    return (
        <div id='home' className='home_section'>
            {openMenu ? (
                <div className='second_menu'>
                    <button onClick={handleHideMenu} className='close_all_btn'>X</button>
                    <Link
                        className='second_list_item'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        to='home'
                        onClick={handleHideMenu}
                    >
                        <p>Home</p>
                    </Link>

                    <Link
                        className='second_list_item'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        to='flights'
                        onClick={handleHideMenu}
                    >
                        <p>Flights</p>
                    </Link>
                    <Link
                        className='second_list_item'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        to='support'
                        onClick={handleHideMenu}
                    >
                        <p>Support</p>
                    </Link>
                    <Link
                        className='second_list_item'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        to='benefits'
                        onClick={handleHideMenu}
                    >
                        <p>Benefits</p>
                    </Link>
                    <Link
                        className='second_list_item'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        to='destinations'
                        onClick={handleHideMenu}
                    >
                        <p>Destionations</p>
                    </Link>

                </div>
            ) : ''}
            <div className='navigation_bar'>
                <div className='logo'><img className='logo_img' src={logo} alt='plane_logo' /></div>
                <div className='menu'>
                    <Link
                        className='list_item'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        to='home'
                    >
                        <p>Home</p>
                    </Link>

                    <Link
                        className='list_item'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        to='flights'
                    >
                        <p>Flights</p>
                    </Link>
                    <Link
                        className='list_item'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        to='support'
                    >
                        <p>Support</p>
                    </Link>
                    <Link
                        className='list_item'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        to='benefits'
                    >
                        <p>Benefits</p>
                    </Link>
                    <Link
                        className='list_item'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        to='destinations'
                    >
                        <p>Destionations</p>
                    </Link>

                </div>
                <Link
                        className='contact'
                        spy={true}
                        smooth={true}
                        to='contact'
                    >
                        <button className='contact_btn'>Contact</button>
                    </Link> 
                {!openMenu ? (
                    <img onClick={handleSeeMenu} className='menu_btn' src={more} alt='Menu_button' />
                ) : ''}
            </div>
            <div className='presentation_content'>

                <div className='title'>Create Ever-lasting Memories With Us</div>
                <img className='plane_img' src={plane} />
            </div>
        </div>
    )
}

export default Home;