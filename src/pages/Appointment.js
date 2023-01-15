import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Appointment/Appointment.css';
import Step1 from '../components/Appointment/Step1';
import Step2 from '../components/Appointment/Step2';
import Step3 from '../components/Appointment/Step3';

const Appointment = () => {
    const [isStep1, setIsStep1] = useState(true);
    const [isStep2, setIsStep2] = useState(false);
    const [isStep3, setIsStep3] = useState(false);

    const [facility, setFacility] = useState('');
    const [department, setDepartment] = useState('');
    const [availableDoctor, setAvailableDoctor] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [isDoctor, setIsDoctor] = useState(false);
    const [optionDoctor, setOptionDoctor] = useState([]);
    const [allDoctors, setAllDoctors] = useState([]);
    const [cursorStep1, setCursorStep1] = useState('not-allowed');
    const [cursorStep2, setCursorStep2] = useState('not-allowed');
    const [isActiveStep1, setIsActiveStep1] = useState(false);
    const [isActiveStep2, setIsActiveStep2] = useState(false);

    const [customName, setCustomName] = useState('');
    const [customGender, setCustomGender] = useState('');
    const [customBirthday, setCustomBirthday] = useState('');
    const [customPhoneNumber, setCustomPhoneNumber] = useState('');
    const [customEmail, setCustomEmail] = useState('');
    const [customReason, setCustomReason] = useState('');

    useEffect(() => {
        const handleFetchAllDoctors = () => {
            fetch(
                `https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-doctors`
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setAllDoctors(data);
                });
        };

        handleFetchAllDoctors();
    });

    const onChangeFacility = (event) => {
        setFacility(event.target.value);

    }

    const onChangeDepartment = (event) => {
        setDepartment(event.target.value);

        if (event.target.value !== '' && event.target.value !== "I'm Not Sure") {
            setIsDoctor(true);
        } else if (event.target.value === '' || event.target.value === "I'm Not Sure") {
            setIsDoctor(false);
        }
    }

    const onChangeAvailableDoctor = (event) => {
        setAvailableDoctor(event.target.value);
    }

    const onChangeAppointmentTime = (event) => {
        setAppointmentTime(event.target.value);
    }

    const onChangeAppointmentDate = (choosenDate) => {
        setAppointmentDate(choosenDate);
    }

    const onChangeCustomName = (event) => {
        setCustomName(event.target.value);
    }

    const onChangeCustomGender = (event) => {
        setCustomGender(event.target.value);
    }

    const onChangeCustomBirthday = (event) => {
        setCustomBirthday(event.target.value);
    }

    const onChangeCustomPhoneNumber = (event) => {
        setCustomPhoneNumber(event.target.value);
    }

    const onChangeCustomEmail = (event) => {
        setCustomEmail(event.target.value);
    }

    const onChangeCustomReason = (event) => {
        setCustomReason(event.target.value);
    }

    useEffect(() => {
        if (facility === '' || department === '' || appointmentDate === '' || appointmentTime === '') {
            setIsActiveStep1(false);
            setCursorStep1('not-allowed');
        } else if (facility !== '' || department !== '' || appointmentDate !== '' || appointmentTime !== '') {
            setIsActiveStep1(true);
            setCursorStep1('pointer');
        }
    })

    useEffect(() => {
        if(customName === '' || customBirthday === '' || customPhoneNumber === '' || customReason === '') {
            setIsActiveStep2(false);
            setCursorStep2('not-allowed');
        } else if (customName !== '' && customBirthday !== '' && customPhoneNumber !== '' && customReason !== '') {
            setIsActiveStep2(true);
            setCursorStep2('pointer');
        }
    })

    useEffect(() => {
        if(department === '' || department === "I'm Not Sure") {
            setOptionDoctor([]);
        } else if(department !== '' && department !== "I'm Not Sure") {
            let availableDoctorsList = allDoctors.filter((doctor, index) => {
                return doctor.department.includes(department);
            })

            setOptionDoctor(availableDoctorsList);
        }
    }, [department])

    return (
        <React.Fragment>
            <div className='appointmentSite-container'>
                <div className='appointment-container'>
                    <div className='appointment-content'>
                        <div className='appointment-title-container'>
                            <h2 id='appointment-title' className='appointment-title'>Appointment</h2>
                            <ul className='bread-crumb'>
                                <li>
                                    <Link to='/' style={{ color: 'rgb(162, 162, 162)' }}>Home</Link>
                                </li>
                                <span>→</span>
                                <li>Appointment</li>
                            </ul>
                        </div>

                        <div className='appointmentForm-container'>
                            {
                                isStep1
                                &&
                                <Step1
                                    setIsStep1={setIsStep1}
                                    setIsStep2={setIsStep2}
                                    setIsStep3={setIsStep3}
                                    onChangeFacility={onChangeFacility}
                                    onChangeDepartment={onChangeDepartment}
                                    onChangeAvailableDoctor={onChangeAvailableDoctor}
                                    onChangeAppointmentTime={onChangeAppointmentTime}
                                    onChangeAppointmentDate={onChangeAppointmentDate}
                                    isDoctor={isDoctor}
                                    setIsDoctor={setIsDoctor}
                                    department={department}
                                    facility={facility}
                                    appointmentTime={appointmentTime}
                                    availableDoctor={availableDoctor}
                                    allDoctors={allDoctors}
                                    optionDoctor={optionDoctor}
                                    isActiveStep1={isActiveStep1}
                                    cursorStep1={cursorStep1}
                                />
                            }
                            {
                                isStep2
                                &&
                                <Step2
                                    setIsStep1={setIsStep1}
                                    setIsStep2={setIsStep2}
                                    setIsStep3={setIsStep3}
                                    onChangeCustomName={onChangeCustomName}
                                    onChangeCustomGender={onChangeCustomGender}
                                    onChangeCustomBirthday={onChangeCustomBirthday}
                                    onChangeCustomPhoneNumber={onChangeCustomPhoneNumber}
                                    onChangeCustomEmail={onChangeCustomEmail}
                                    onChangeCustomReason={onChangeCustomReason}
                                    customName={customName}
                                    customGender={customGender}
                                    customBirthday={customBirthday}
                                    customPhoneNumber={customPhoneNumber}
                                    customEmail={customEmail}
                                    customReason={customReason}
                                    isActiveStep2={isActiveStep2}
                                    cursorStep2={cursorStep2}
                                />
                            }
                            {
                                isStep3
                                &&
                                <Step3
                                    setIsStep1={setIsStep1}
                                    setIsStep2={setIsStep2}
                                    setIsStep3={setIsStep3}
                                    availableDoctor={availableDoctor}
                                    appointmentTime={appointmentTime}
                                    appointmentDate={appointmentDate}
                                    facility={facility}
                                    department={department}
                                    customName={customName}
                                    customBirthday={customBirthday}
                                    customGender={customGender}
                                    customPhoneNumber={customPhoneNumber}
                                    customReason={customReason}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Appointment;