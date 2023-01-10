import React from 'react';

const ContactSideBar = () => {
    return (
        <React.Fragment>
            <div className='contactSidebar-container'>
                <div className='contactSidebat-title-container'>
                    <h5>Medicenter Clinic</h5>
                    <div className='line'></div>
                </div>

                <div className='sentence'>
                    One of the most sublime experiences we can ever have is to wake up feeling healthy after we have been sick.
                </div>

                <div className='contactSidebar-info'>
                    <p className="c909090 addressItem lh-1.1">Medicenter Clinic </p>
                    <p className="c909090 addressItem lh-1.1">33 Farlane Street <span>+123 655 655</span></p>
                    <p className="c909090 addressItem lh-1.1">Keilor East <span>+123 755 755</span></p>
                    <p className="c909090 addressItem lh-1.1">VIC 3033, Australia <span>medicenter@mail.com</span></p>
                </div>

                <ul className='contactSidebar-social'>
                    <li className='socialInfo-container'>
                        <i class="fa-solid fa-square-phone"></i> <span>Phone: <b>1-800-643-4300</b></span>
                    </li>
                    <li className='socialInfo-container'>
                        <i className="social-icon fa-solid fa-square-envelope"></i> <span className='social-link'>medicenter@mail.com</span>
                    </li>
                    <li className='socialInfo-container'>
                        <i className="social-icon fa-brands fa-square-facebook"></i> <span className='social-link'>facebook.com/medicenter</span>
                    </li>
                    <li className='socialInfo-container'>
                        <i className="social-icon fa-brands fa-square-twitter"></i> <span className='social-link'>twitter.com/medicenter</span>
                    </li>
                    <li className='socialInfo-container'>
                        <i className="social-icon fa-brands fa-square-google-plus"></i> <span className='social-link'>google.com/medicenter</span>
                    </li>
                </ul>

            </div>
        </React.Fragment>
    )
}

export default ContactSideBar;