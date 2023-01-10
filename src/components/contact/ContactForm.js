import React from 'react';

const ContactForm = () => {
    return (
        <React.Fragment>
            <div className='contactForm-container'>
                <div className='contactForm-title-container'>
                    <h5>Online Contact Form</h5>
                    <div className='line'></div>
                </div>

                <div className='contactForm-form'>
                    <div className='form-items-container'>
                        <div className='formInput-container'>
                            <label className='contact-label' htmlFor='firstName'>First Name</label>
                            <input className='contact-input' id='firstName'/>
                        </div>
                        <div className='formInput-container'>
                            <label className='contact-label' htmlFor='lastName'>Last Name</label>
                            <input className='contact-input' id='lastName'/>
                        </div>
                    </div>

                    <div className='form-items-container'>
                        <div className='formInput-container'>
                            <label className='contact-label' htmlFor='birthday'>Date of Birth</label>
                            <input type='date' className='contact-input' id='birthday'/>
                        </div>
                        <div className='formInput-container'>
                            <label className='contact-label' htmlFor='SSnumber'>Social Security Number</label>
                            <input className='contact-input' id='SSnumber'/>
                        </div>
                    </div>

                    <div className='form-items-container'>
                        <div className='formInput-container'>
                            <label className='contact-label' htmlFor='phone'>Phone Number</label>
                            <input className='contact-input' id='phone'/>
                        </div>
                        <div className='formInput-container'>
                            <label className='contact-label' htmlFor='email'>E-mail</label>
                            <input className='contact-input' id='email'/>
                        </div>
                    </div>

                    <div className='form-items-container'>
                        <div className='formMessage-container'>
                            <label className='contact-label'>Your Messages</label>
                            <textarea className='message-input' />
                        </div>
                    </div>

                    <div className='contactBtn-container'>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactForm;