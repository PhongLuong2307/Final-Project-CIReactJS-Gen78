import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const departmentList = [
        {
            name: 'Primary Health Care',
            description: 'Mauris adisciping fringila turpis intend tellus ornare etos pelim. Pulvunar est cardio neque vitae elit. Lorem vulputat paentra nunc gravida.',
            imgSrc: 'assets/img/img5.jpg',
            isShow: true
        },
        {
            name: 'Pediatric Clinic',
            description: 'Mauris adisciping fringila turpis intend tellus ornare etos pelim. Pulvunar est cardio neque vitae elit. Lorem vulputat paentra nunc gravida.',
            imgSrc: 'assets/img/img6.jpg'
        },
        {
            name: 'Outpatient Surgery',
            description: 'Mauris adisciping fringila turpis intend tellus ornare etos pelim. Pulvunar est cardio neque vitae elit. Lorem vulputat paentra nunc gravida.',
            imgSrc: 'assets/img/img7.jpg'
        },
        {
            name: 'Gynaecological Clinic',
            description: 'Mauris adisciping fringila turpis intend tellus ornare etos pelim. Pulvunar est cardio neque vitae elit. Lorem vulputat paentra nunc gravida.',
            imgSrc: 'assets/img/img8.jpg'
        },
        {
            name: 'Cardiac Clinic',
            description: 'Mauris adisciping fringila turpis intend tellus ornare etos pelim. Pulvunar est cardio neque vitae elit. Lorem vulputat paentra nunc gravida.',
            imgSrc: 'assets/img/img9.jpg'
        },
        {
            name: 'Laryngological Clinic',
            description: 'Mauris adisciping fringila turpis intend tellus ornare etos pelim. Pulvunar est cardio neque vitae elit. Lorem vulputat paentra nunc gravida.',
            imgSrc: 'assets/img/img10.jpg'
        },
        {
            name: 'Ophthalmology Clinic',
            description: 'Mauris adisciping fringila turpis intend tellus ornare etos pelim. Pulvunar est cardio neque vitae elit. Lorem vulputat paentra nunc gravida.',
            imgSrc: 'assets/img/img5.jpg'
        },
        {
            name: 'Dental Clinic',
            description: 'Mauris adisciping fringila turpis intend tellus ornare etos pelim. Pulvunar est cardio neque vitae elit. Lorem vulputat paentra nunc gravida.',
            imgSrc: 'assets/img/img11.jpg'
        },
        {
            name: 'Outpatient Rehabilitation',
            description: 'Mauris adisciping fringila turpis intend tellus ornare etos pelim. Pulvunar est cardio neque vitae elit. Lorem vulputat paentra nunc gravida.',
            imgSrc: 'assets/img/img7.jpg'
        },
    ]
    return (
        <React.Fragment>
            <div className='sideBar-container'>
                <div className='sideBar-department'>
                    <h5>Departments</h5>
                    <div className='line'></div>
                    <div>
                        <div class="accordion" id="accordionExample">

                            {
                                departmentList.map((item, index) => {
                                    return (
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id={`heading${index}`}>
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}>
                                                    {item.name}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${index}`}
                                                class={
                                                    item.isShow ? (
                                                        "accordion-collapse collapse show"
                                                    ) : (
                                                        "accordion-collapse collapse"
                                                    )
                                                }
                                                aria-labelledby={`heading${index}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div class="accordion-body p-0 p-2 pt-4 pb-3">
                                                    <div className='accordionItem-content'>
                                                        <img className='accordion-img' src={`${item.imgSrc}`} alt='' />
                                                        <div className='accordion-des'>
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                    <div className='accordion-btns'>
                                                        <button>Details →</button>
                                                        <button>Timetable →</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='sideBar-appoinment'>
                    <h5>Make An Appointment</h5>
                    <div className='line'></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.
                    </p>

                    <ul className='sideBar-contact'>
                        <li>
                            <div className='sideBar-contactIcon'>
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <p>By phone: <b>1-800-643-4300</b></p>
                        </li>
                        <li>
                            <div className='sideBar-contactIcon'>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <p>By e-mail: <span className='sideBar-contact_email'>medicenter@mail.com</span></p>
                        </li>
                        <li>
                            <div className='sideBar-contactIcon'>
                                <i class="fa-solid fa-list"></i>
                            </div>
                            <p>Or <Link style={{ textDecoration: 'none' }}><span className='sideBar-contact_form'>fill in the form</span></Link> on our appoinment page</p>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideBar