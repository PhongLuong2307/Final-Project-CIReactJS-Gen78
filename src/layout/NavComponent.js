import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavComponent = () => {

    // const [display, setDisplay] = useState('none');

    const handleToggleDisplay = () => {
        const headerMenu = document.getElementById('headerMenu');
        headerMenu.classList.toggle('toggle-diplay');
    }
 
    return (
        <React.Fragment>
            <nav id="navContainer" className="navContainer">
                <div className="headerLogo-container">
                    <img className="headerLogo-img" src="assets/img/header_logo.png" alt='' />
                    <span className="headerLogo-brand">medicenter</span>
                </div>

                <div id='headerMenu' className="menu-container">
                    <ul>
                        <Link className='link' to='/' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">HOME</li>
                        </Link>
                        <Link className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">APPOINMENT</li>
                        </Link>
                        <Link className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">OUR DOCTORS</li>
                        </Link>
                        <Link className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">TIMETABLE</li>
                        </Link>
                        <Link className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">ABOUT US</li>
                        </Link>
                        <Link className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">CONTACT</li>
                        </Link>
                    </ul>
                </div>

                <i onClick={handleToggleDisplay} class="fa-solid fa-bars"></i>

                <div className='account-container'>
                     <div title='Notification' className='navIcon-container'>
                        <i class="nav-icon fa-solid fa-bell"></i>
                    </div>
                     <div title='Account' className='navIcon-container'>
                        <i class="nav-icon fa-solid fa-user"></i>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavComponent;