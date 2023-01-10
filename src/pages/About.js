import React from 'react';
import "../components/About/About.css";
import { Link } from 'react-router-dom';
import Blogs from '../components/Blogs/Blogs.js'

const About = () => {
    return (
        <React.Fragment>
            <div className='aboutSite-container'>
                <div className='about-container'>
                    <div className='about-content'>
                        <div className='about-title-container'>
                            <h2 className='about-title'>About</h2>
                            <ul className='bread-crumb'>
                                <li>
                                    <Link to='/' style={{ color: 'rgb(162, 162, 162)' }}>Home</Link>
                                </li>
                                <span>→</span>
                                <li>About Us</li>
                            </ul>
                        </div>

                        <div className='about-header'>
                            <div className='welcome-container'>
                                <h4 className='welcome-title'>Welcome to medicenter</h4>
                                <p className='welcome-sentence'>
                                    Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor.
                                </p>

                                <h5 className='quote-title'>Our Motto</h5>
                                <div className='line'></div>
                                <div className='sentence'>
                                    The mind has great influence over the body and maladies often have their origin there.
                                </div>
                                <div className='quote-author'>
                                    —  John Doe Molicere
                                </div>
                            </div>

                            <div className='whychoose-container'>
                                <h5 className='whychoose-title'>Why Choose Medicenter?</h5>
                                <div className='line'></div>

                                <div className='reason-container'>
                                    <img className='reason-img' src='assets/img/img6.jpg' alt='' />
                                    <div className='reason-text-container'>
                                        <p className='reason-text'>
                                            Donec ipsum diam, pretium mollis dapibus risus. Nullam id dolor id nibh pulvinar at interdum eget, suscipit eget felis. Pellentesque est faucibus tincidunt risus id interdum primis.
                                        </p>
                                        <div className='readmore-btn'>
                                            Read more →
                                        </div>
                                    </div>
                                </div>

                                <div className='reason-container'>
                                    <img className='reason-img' src='assets/img/img7.jpg' alt='' />
                                    <div className='reason-text-container'>
                                        <p className='reason-text'>
                                            Donec ipsum diam, pretium mollis dapibus risus. Nullam id dolor id nibh pulvinar at interdum eget, suscipit eget felis. Pellentesque est faucibus tincidunt risus id interdum primis.
                                        </p>
                                        <div className='readmore-btn'>
                                            Read more →
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Blogs id='blogs' />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;