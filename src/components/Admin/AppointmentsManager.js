import React, { useEffect, useState } from 'react';
import './Admin.css';
import '../Appointment/Step3.css'

const AppointmentsManager = () => {
    const [allAppointments, setAppointments] = useState([]);

    const [serviceType, setServiceType] = useState('');

    const [facility, setFacility] = useState('');
    const [department, setDepartment] = useState('');
    const [availableDoctor, setAvailableDoctor] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [appointmentFullTime, setAppointmentFullTime] = useState('');

    const [customName, setCustomName] = useState('');
    const [customGender, setCustomGender] = useState('');
    const [customBirthday, setCustomBirthday] = useState('');
    const [customPhoneNumber, setCustomPhoneNumber] = useState('');
    const [customEmail, setCustomEmail] = useState('');
    const [customReason, setCustomReason] = useState('');

    useEffect(() => {
        const handleFetchAllAppointments = () => {
            fetch(
                `https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-appointment`
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setAppointments(data);
                });
        };

        handleFetchAllAppointments();
    }, [allAppointments]);

    const handleSeeFullInfo = (id) => {
        fetch(
            'https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-appointment/' + id,
        )
        .then((response) => {
            return response.json();
        })
        .then((appointment) => {
            setServiceType('Medical examination at the hospital');
            setAvailableDoctor(appointment.doctor);
            setAppointmentFullTime(`${appointment.appointmentTime}, ${appointment.appointmentDate}`);
            setFacility(appointment.location);
            setDepartment(appointment.department);
            setCustomName(appointment.customName);
            setCustomBirthday(appointment.birthDay);
            setCustomPhoneNumber(appointment.phoneNumber);
            setCustomGender(appointment.gender);
            setCustomReason(appointment.reason);
        })

        const addDoctorContainer = document.getElementById('appointments-info');
        addDoctorContainer.classList.add("toggle-display");
    }

    // const handleDeleteAppointment = () => {

    // }

    const toggleForm = () => {
        const addDoctorContainer = document.getElementById('appointments-info');
        addDoctorContainer.classList.toggle("toggle-display");
    }

    return (
        <React.Fragment>
            <div className='manager-container'>
                <h4 className='manager-title'>Appointments Manager</h4>
            </div>

            <button
                onClick={toggleForm}
                className='toggle-btn'
            >
                Appointments Information
            </button>

            <div className='addForm-container' id='appointments-info'>
                <h2 className='addBlog-title'>Appointments Information</h2>

                <div className='step-body admin-apppoiment-info'>
                    <div className='step-left'>
                        <div className='booking-info'>
                            <div className='info-list admin-info-list'>
                                <h4>Service</h4>
                                <div className='line apnt-line'></div>
                                <div className='info-item'>
                                    <div className='info-key'>Type</div>
                                    <span className='info-value'>{serviceType}</span>
                                </div>
                            </div>

                            <div className='info-list'>
                                <h4>Doctor</h4>
                                <div className='line apnt-line'></div>
                                <div className='info-item'>
                                    <div className='info-key'>Doctor</div>
                                    <span className='info-value'>{availableDoctor}</span>
                                </div>
                                <div className='info-item'>
                                    <div className='info-key'>Appointment</div>
                                    <span className='info-value'>{appointmentFullTime}</span>
                                </div>
                                <div className='info-item'>
                                    <div className='info-key'>Location</div>
                                    <span className='info-value'>{facility}</span>
                                </div>
                                <div className='info-item'>
                                    <div className='info-key'>Department</div>
                                    <span className='info-value'>{department}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='step-right'>
                        <div
                            style={{
                                marginTop: '-63px'
                            }}
                            className='info-list'
                        >
                            <h4>Customer</h4>
                            <div className='line apnt-line'></div>
                            <div className='info-item'>
                                <div className='info-key'>Customer</div>
                                <span className='info-value'>{customName}</span>
                            </div>
                            <div className='info-item'>
                                <div className='info-key'>Date of birth</div>
                                <span className='info-value'>{customBirthday}</span>
                            </div>
                            <div className='info-item'>
                                <div className='info-key'>Gender</div>
                                <span className='info-value'>{customGender}</span>
                            </div>
                            <div className='info-item'>
                                <div className='info-key'>Phone Number</div>
                                <span className='info-value'>{customPhoneNumber}</span>
                            </div>
                            <div className='info-item'>
                                <div className='info-key'>Reason</div>
                                <span className='info-value'>{customReason}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='manage-blogsList'>
                <div class="table-responsive">
                    <table class="table" id="dataTable" width="100%" cellspacing="0">
                        <thead className='admin-thead'>
                            <tr>
                                <th className='doctorID-th'>Appointment ID</th>
                                <th className='doctorName-th'>Name</th>
                                <th className='doctorDegree-th'>Phone Number</th>
                                <th className='doctorSpeciality-th'>Time</th>
                                <th className='doctorOffice-th'>Facility</th>
                                <th className='doctorWorkdays-th'>Department</th>
                                <th className='actions'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allAppointments.length > 0 ? (
                                    allAppointments.map((appointment) => {
                                        return (
                                            <tr className='table-row'>
                                                <td className='padding doctorID-td'>{appointment.id}</td>
                                                <td className='padding'>{appointment.customName}</td>
                                                <td className='padding'>{appointment.phoneNumber}</td>
                                                <td className='padding'>{appointment.appointmentTime}, {appointment.appointmentDate}</td>
                                                <td className='padding'>{appointment.location}</td>
                                                <td className='padding'>{appointment.department}</td>
                                                <td className='padding'>
                                                    <div className='actions-btns-container'>
                                                        <button
                                                            onClick={() => {handleSeeFullInfo(appointment.id)}}
                                                            className='actionBtn updateBtn'
                                                        >
                                                            More Info
                                                        </button>
                                                        <button
                                                            // onClick={() => { handleDeleteDoctor(doctor.id) }}
                                                            className='actionBtn deleteBtn'
                                                        >
                                                            Done
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <h3>Loading...</h3>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AppointmentsManager;