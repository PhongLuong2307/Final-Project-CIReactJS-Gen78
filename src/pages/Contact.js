import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Contact/Contact.css";
import ContactSideBar from '../components/Contact/ContactSideBar';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
    return (
        <React.Fragment>
            <div className='contactSite-container'>
                <div className='contact-container'>
                    <div className='contact-content'>
                        <div className='contact-title-container'>
                            <h2 className='contact-title'>Contact</h2>
                            <ul className='bread-crumb'>
                                <li>
                                    <Link to='/' style={{ color: 'gray' }}>Home</Link>
                                </li>
                                <span>→</span>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className='contact-main-body'>
                            <div className='contact-map-container'>
                                <iframe
                                    className='contact-map'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.216777565278!2d105.80899081473132!3d21.02401048600094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab44846c7733%3A0x192b9ed2a5a9f345!2sMindX%20Startup%20Space!5e0!3m2!1svi!2sus!4v1673068740822!5m2!1svi!2sus"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                >
                                </iframe>
                            </div>

                            <div className='contact-detail-container'>
                                <ContactForm />
                                <ContactSideBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;