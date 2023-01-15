import React, { useState } from 'react';
import './Step1.css'

const Step1 = (props) => {
    const [today, setToday] = useState('');
    const [tomorrow, setTomorrow] = useState('');
    const [overmorrow, setOvermorrow] = useState('');

    let todayDate = new Date();
    let todayDay = todayDate.getDate();
    let todayMonth = ('0' + (todayDate.getMonth() + 1)).slice(-2, 3);
    let todayYear = todayDate.getFullYear();

    let tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    let tomorrowDay = tomorrowDate.getDate();
    let tomorrowMonth = ('0' + (tomorrowDate.getMonth() + 1)).slice(-2, 3);
    let tomorrowYear = tomorrowDate.getFullYear();

    let overmorrowDate = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000);
    let overmorrowDay = overmorrowDate.getDate();
    let overmorrowMonth = ('0' + (overmorrowDate.getMonth() + 1)).slice(-2, 3);
    let overmorrowYear = overmorrowDate.getFullYear();

    const {
        setIsStep1,
        setIsStep2,
        setIsStep3,
        onChangeFacility,
        onChangeDepartment,
        onChangeAvailableDoctor,
        onChangeAppointmentTime,
        onChangeAppointmentDate,
        isDoctor,
        optionDoctor,
        isActiveStep1,
        department,
        facility,
        availableDoctor,
        appointmentTime,
        cursorStep1
    } = props;

    const handleNextStep = () => {
        if (isActiveStep1 === true) {
            setIsStep1(false);
            setIsStep2(true);
            setIsStep3(false);
        }
    }

    const handleChoosen = (day) => {
        if (day === 'today') {
            setToday('choosen');
            setTomorrow('');
            setOvermorrow('');

            onChangeAppointmentDate(todayDay + '/' + todayMonth + '/' + todayYear);
        }
        if (day === 'tomorrow') {
            setToday('');
            setTomorrow('choosen');
            setOvermorrow('');

            onChangeAppointmentDate(tomorrowDay + '/' + tomorrowMonth + '/' + tomorrowYear);
        }
        if (day === 'overmorrow') {
            setToday('');
            setTomorrow('');
            setOvermorrow('choosen');

            onChangeAppointmentDate(overmorrowDay + '/' + overmorrowMonth + '/' + overmorrowYear);
        }
    }

    return (
        <React.Fragment>
            <div id='step1' className='stepItem'>
                <h6 className='step-title'>
                    <span style={{ color: '#3156a3' }}>STEP 1/3 </span>
                    -
                    APPOINTMENT DETAILS
                </h6>

                <div className='step-body'>
                    <div className='step-left'>
                        <div className='select-container'>
                            <label
                                className='select-label'
                                htmlFor='facility'
                            >
                                <i class="fa-sharp fa-solid fa-house-medical"></i>
                                Preffered Healthcare Facility (*)
                            </label>
                            <select
                                onChange={onChangeFacility}
                                value={facility}
                                className='select-tag'
                                id='facility'
                            >
                                <option></option>
                                <option>Medicenter Ha Noi</option>
                                <option>Medicenter Ha Long</option>
                                <option>Medicenter Da Nang</option>
                                <option>Medicenter Ho Chi Minh</option>
                                <option>Medicenter Nha Trang</option>
                                <option>Medicenter Phu Quoc</option>
                            </select>
                        </div>

                        <div className='select-container'>
                            <label
                                className='select-label'
                                htmlFor='facility'
                            >
                                <i class="fa-solid fa-suitcase"></i>
                                Preffered Department (*)
                            </label>
                            <select
                                onChange={onChangeDepartment}
                                value={department}
                                className='select-tag'
                                id='facility'
                            >
                                <option></option>
                                <option>I'm Not Sure</option>
                                <option>Primary Health Care</option>
                                <option>Outpatient Surgery</option>
                                <option>Outpatient Rehabilitation</option>
                                <option>Gynaecological</option>
                                <option>Pediatric</option>
                                <option>Laryngological</option>
                                <option>Dental</option>
                            </select>
                        </div>

                        {
                            isDoctor && (
                                <div className='select-container'>
                                    <label
                                        className='select-label'
                                        htmlFor='facility'
                                    >
                                        <i class="fa-solid fa-user-doctor"></i>
                                        Select Doctor
                                    </label>
                                    <select
                                        onChange={onChangeAvailableDoctor}
                                        value={availableDoctor}
                                        className='select-tag'
                                        id='facility'
                                    >
                                        {
                                            optionDoctor.map((doctor) => {
                                                return <option>{doctor.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            )
                        }
                    </div>

                    <div style={{ flex: '1.2' }} className='step-right'>
                        {/* <div className='right-title'>Appointment</div> */}
                        <div className='date-title select-label'>Appointment Date (*)</div>
                        <div className='chooseDay-container'>
                            <div
                                onClick={() => { handleChoosen('today') }}
                                className={`chooseDay-item ${today}`}
                            >
                                <span className='chooseDay-date'>{todayDay}/{todayMonth}</span>
                                <div className='chooseDay-text'>Today</div>
                            </div>
                            <div
                                onClick={() => { handleChoosen('tomorrow') }}
                                className={`chooseDay-item ${tomorrow}`}
                            >
                                <span className='chooseDay-date'>{tomorrowDay}/{tomorrowMonth}</span>
                                <div className='chooseDay-text'>Tomorrow</div>
                            </div>
                            <div
                                onClick={() => { handleChoosen('overmorrow') }}
                                className={`chooseDay-item ${overmorrow}`}
                            >
                                <span className='chooseDay-date'>{overmorrowDay}/{overmorrowMonth}</span>
                                <div className='chooseDay-text'>Overmorrow</div>
                            </div>

                            <div
                                style={{
                                    cursor: 'pointer',
                                    color: 'black',
                                }}
                                className='chooseDay-item otherDay'
                            >
                                <span className='chooseDay-date'>Other day</span>
                                <input type='date' />
                            </div>
                        </div>
                        <div className='time-title select-label'>Appointment Time (*)</div>

                        <div className='chooseTime-container'>
                            <select
                                onChange={onChangeAppointmentTime}
                                value={appointmentTime}
                                className='select-tag select-time'
                            >
                                <option></option>
                                <option>06:00</option>
                                <option>07:00</option>
                                <option>08:00</option>
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                                <option>14:00</option>
                                <option>15:00</option>
                                <option>16:00</option>
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='step-footer'>
                    {/* <button className='step-btn back-btn'>BACK</button> */}
                    <div
                        style={{
                            cursor: cursorStep1
                        }}
                        onClick={handleNextStep}
                        className='step-btn next-btn'
                    >
                        NEXT
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Step1;