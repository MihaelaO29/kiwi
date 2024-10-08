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
                        <p className='menu_link'>Home</p>
                    </Link>

                    <Link
                        className='list_item'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        to='flights'
                    >
                        <p className='menu_link'>Flights</p>
                    </Link>
                    <Link
                        className='list_item'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        to='support'
                    >
                        <p className='menu_link'>Support</p>
                    </Link>
                    <Link
                        className='list_item'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        to='benefits'
                    >
                        <p className='menu_link'>Benefits</p>
                    </Link>
                    <Link
                        className='list_item'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        to='destinations'
                    >
                        <p className='menu_link'>Destionations</p>
                    </Link>

                </div>

                <Link
                    className='contact'
                    spy={true}
                    smooth={true}
                    to='contact'
                >
                    <motion.button
                        className="contact_btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >Contact
                    </motion.button>
                </Link>
                {!openMenu ? (
                    <img onClick={handleSeeMenu} className='menu_btn' src={more} alt='Menu_button' />
                ) : ''}
            </div>
            <div className='presentation_content'>

                <div className='title'>{'Hello travelers. Where would you like to go?'.split(" ").map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { delay: i / 10, duration: 3 } }}
                        viewport={{ once: false, amount: .5 }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                ))}</div>
                <img className='plane_img' src={plane} alt='plane_image' />
            </div>
        </div>
    )
}

export default Home;