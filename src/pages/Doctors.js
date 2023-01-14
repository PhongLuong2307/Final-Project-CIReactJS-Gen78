import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Doctor/Doctors.css';

const Doctors = () => {
    return (
        <React.Fragment>
            <div className='doctorSite-container'>
                <div className='doctor-container'>
                    <div className='doctor-content'>
                        <div className='doctor-title-container'>
                            <h2 className='doctor-title'>Our Doctors</h2>
                            <ul className='bread-crumb'>
                                <li>
                                    <Link to='/' style={{ color: 'rgb(162, 162, 162)' }}>Home</Link>
                                </li>
                                <span>→</span>
                                <li>Our Doctors</li>
                            </ul>
                        </div>

                        <div className='doctor-header'>
                            <h5>Meet The Team</h5>
                            <div className='line'></div>
                        </div>

                        <ul className='tab-navigaion-container'>
                            <li className='tab-navigaion-item selected'>All Departments</li>
                            <li className='tab-navigaion-item'>Primary Health Care</li>
                            <li className='tab-navigaion-item'>Pediatric Clinic</li>
                            <li className='tab-navigaion-item'>Outpatient Surgery</li>
                            <li className='tab-navigaion-item'>Cardiac Clinic</li>
                        </ul>

                        <div className='doctorsList-container'>
                            <div className='grid-item'>
                                <img src='https://quanticalabs.com/Medicenter/Template/images/samples/225x150/image_03.jpg' alt='' />
                                <div className='doctor-shortInfo'>
                                    <h6 className='doctor-name'>Ann Blyumin, Prof.</h6>
                                    <div className='doctor-department'>Pediatric Clinic</div>
                                </div>
                                <div className='doctor-description'>
                                    Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.Duis mollis, est non commodo luctus.
                                </div>
                                <div className='doctor-contact'>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-list"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <img src='https://quanticalabs.com/Medicenter/Template/images/samples/225x150/image_03.jpg' alt='' />
                                <div className='doctor-shortInfo'>
                                    <h6 className='doctor-name'>Ann Blyumin, Prof.</h6>
                                    <div className='doctor-department'>Pediatric Clinic</div>
                                </div>
                                <div className='doctor-description'>
                                    Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.Duis mollis, est non commodo luctus.
                                </div>

                                <div className='doctor-contact'>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-list"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <img src='https://quanticalabs.com/Medicenter/Template/images/samples/225x150/image_03.jpg' alt='' />
                                <div className='doctor-shortInfo'>
                                    <h6 className='doctor-name'>Ann Blyumin, Prof.</h6>
                                    <div className='doctor-department'>Pediatric Clinic</div>
                                </div>
                                <div className='doctor-description'>
                                    Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.Duis mollis, est non commodo luctus.
                                </div>

                                <div className='doctor-contact'>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-list"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <img src='https://quanticalabs.com/Medicenter/Template/images/samples/225x150/image_03.jpg' alt='' />
                                <div className='doctor-shortInfo'>
                                    <h6 className='doctor-name'>Ann Blyumin, Prof.</h6>
                                    <div className='doctor-department'>Pediatric Clinic</div>
                                </div>
                                <div className='doctor-description'>
                                    Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.Duis mollis, est non commodo luctus.
                                </div>

                                <div className='doctor-contact'>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-list"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <img src='https://quanticalabs.com/Medicenter/Template/images/samples/225x150/image_03.jpg' alt='' />
                                <div className='doctor-shortInfo'>
                                    <h6 className='doctor-name'>Ann Blyumin, Prof.</h6>
                                    <div className='doctor-department'>Pediatric Clinic</div>
                                </div>
                                <div className='doctor-description'>
                                    Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.Duis mollis, est non commodo luctus.
                                </div>

                                <div className='doctor-contact'>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-list"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <img src='https://quanticalabs.com/Medicenter/Template/images/samples/225x150/image_03.jpg' alt='' />
                                <div className='doctor-shortInfo'>
                                    <h6 className='doctor-name'>Ann Blyumin, Prof.</h6>
                                    <div className='doctor-department'>Pediatric Clinic</div>
                                </div>
                                <div className='doctor-description'>
                                    Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.Duis mollis, est non commodo luctus.
                                </div>

                                <div className='doctor-contact'>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-list"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <img src='https://quanticalabs.com/Medicenter/Template/images/samples/225x150/image_03.jpg' alt='' />
                                <div className='doctor-shortInfo'>
                                    <h6 className='doctor-name'>Ann Blyumin, Prof.</h6>
                                    <div className='doctor-department'>Pediatric Clinic</div>
                                </div>
                                <div className='doctor-description'>
                                    Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.Duis mollis, est non commodo luctus.
                                </div>

                                <div className='doctor-contact'>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-list"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <img src='https://quanticalabs.com/Medicenter/Template/images/samples/225x150/image_03.jpg' alt='' />
                                <div className='doctor-shortInfo'>
                                    <h6 className='doctor-name'>Ann Blyumin, Prof.</h6>
                                    <div className='doctor-department'>Pediatric Clinic</div>
                                </div>
                                <div className='doctor-description'>
                                    Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.Duis mollis, est non commodo luctus.
                                </div>

                                <div className='doctor-contact'>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className='sideBar-contactIcon'>
                                        <i class="fa-solid fa-list"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Doctors;