import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavComponent = () => {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [username, setUsername] = useState('');

    const handleToggleDisplay = () => {
        const headerMenu = document.getElementById('headerMenu');
        headerMenu.classList.toggle('toggle-diplay');
    }

    useEffect(() => {
        let currentStatus = JSON.parse(localStorage.getItem('isLogin'));
        let currentAvatar = localStorage.getItem('avatar');
        let currentUsername = localStorage.getItem('username');

        setIsLogin(currentStatus);
        setAvatar(currentAvatar);
        setUsername(currentUsername);
    })

    const handleLogOut = () => {
        console.log('Log Out');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        localStorage.removeItem('avatar');
        localStorage.setItem('isLogin', false);

        navigate('/');
    }

    return (
        <React.Fragment>
            <nav id="navContainer" className="navContainer">
                <div className="headerLogo-container">
                    <Link to='/admin'>
                        <img className="headerLogo-img" src="../assets/img/header_logo.png" alt='' />
                    </Link>
                    <span className="headerLogo-brand">medicenter</span>
                </div>

                <div id='headerMenu' className="menu-container">
                    <ul>
                        <Link to='/' className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">HOME</li>
                        </Link>
                        <Link className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">APPOINMENT</li>
                        </Link>
                        <Link to='/doctors' className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">OUR DOCTORS</li>
                        </Link>
                        <Link to='/timetable' className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">TIMETABLE</li>
                        </Link>
                        <Link to='/about' className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">ABOUT US</li>
                        </Link>
                        <Link to='/contact' className='link' style={{ textDecoration: 'none' }}>
                            <li className="menu-item">CONTACT</li>
                        </Link>
                    </ul>
                </div>

                <i onClick={handleToggleDisplay} class="fa-solid fa-bars"></i>

                <div className='account-container'>
                    <div title='Notification' className='navIcon-container'>
                        <i class="nav-icon fa-solid fa-bell"></i>
                    </div>

                    {
                        (
                            isLogin ? (
                                <img
                                    title={
                                        `${username} 
Click To Log Out`}
                                    onClick={handleLogOut}
                                    className='navIcon-container avatar'
                                    src={`${avatar}`}
                                    alt=''
                                />
                            ) : (
                                <Link to='/login'>
                                    <div title='Account' className='navIcon-container'>
                                        <i class="nav-icon fa-solid fa-user" ></i>
                                    </div>
                                </Link>
                            )
                        )
                    }
                    {/* <Link to='/login'>
                        <div title='Account' className='navIcon-container'>
                            <i class="nav-icon fa-solid fa-user"></i>
                        </div>
                    </Link> */}
                </div >
            </nav >
        </React.Fragment >
    )
}

export default NavComponent;