import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Doctor/Doctors.css';

const Doctors = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const [allDoctorsLength, setAllDoctorsLength] = useState(0);
    const [doctorItem, setDoctorItem] = useState([]);

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
                    setAllDoctorsLength(data.length);
                });
        };

        handleFetchAllDoctors();
    }, [allDoctors]);

    const [doctorList, setDoctorList] = useState([]);
    const [pagination, setPagination] = useState(1);

    useEffect(() => {
        const handleFetchListDoctors = () => {
            fetch(
                `https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-doctors?page=${pagination}&limit=6`
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setDoctorList(data);
                });
        };

        handleFetchListDoctors();
    }, [pagination])

    const handleSelectPagination = (page) => {
        if (page === 'prev') {
            if (pagination > 1) {
                setPagination(pagination - 1);
            }
        } else if (page === 'next') {
            if (pagination < Math.ceil(allDoctorsLength / 6)) {
                setPagination(pagination + 1);
            }
        } else {
            setPagination(page);
        }
    };

    let doctorDetail = document.getElementById('doctor-detail');

    const handleDisplayDoctorDetail = (id) => {
        fetch('https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-doctors/' + id)
            .then((response) => {
                return response.json()
            }).then((data) => {
                setDoctorItem(data);
            })

        doctorDetail.style.display = "block";
        doctorDetail.style.animation = 'opacity 1s ease';
    }

    const handleCloseDetail = () => {
        doctorDetail.style.display = 'none';
    }

    // const handleNextDetail = (id) => {
    //     // console.log(id);
    //     const doctorIndex = allDoctors.findIndex(id);
    //     console.log(doctorIndex);

    //     fetch('https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-doctors/' + (id + 1))
    //         .then((response) => {
    //             return response.json()
    //         }).then((data) => {
    //             setDoctorItem(data);
    //         })
    // }

    // const handlePreviousDetail = (id) => {
    //     // console.log(id);
    //     const doctorIndex = allDoctors.findIndex(id);
    //     console.log(doctorIndex);

    //     fetch('https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-doctors/' + (id - 1))
    //         .then((response) => {
    //             return response.json()
    //         }).then((data) => {
    //             setDoctorItem(data);
    //         })
    // }

    let AD = document.getElementById('AD');
    let PHC = document.getElementById('PHC');
    let PC = document.getElementById('PC');
    let OS = document.getElementById('OS');
    let CC = document.getElementById('CC');

    let $pagination = document.getElementById('pagination');

    const handleSelectAllDepartment = () => {
        AD.classList.add('selected');
        PHC.classList.remove('selected');
        PC.classList.remove('selected');
        OS.classList.remove('selected');
        CC.classList.remove('selected');

        $pagination.style.display = 'flex';

        fetch(
            `https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-doctors?page=1&limit=6`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDoctorList(data);
            });
    };

    const handleSelectPrimaryHealthCare = () => {
        AD.classList.remove('selected');
        PHC.classList.add('selected');
        PC.classList.remove('selected');
        OS.classList.remove('selected');
        CC.classList.remove('selected');

        $pagination.style.display = 'none';

        let selectedData = allDoctors.filter((doctor, index) => {
            return doctor.department.includes('Primary Health Care');
        });

        setDoctorList(selectedData);
    }

    const handleSelectPediatricClinic = () => {
        AD.classList.remove('selected');
        PHC.classList.remove('selected');
        PC.classList.add('selected');
        OS.classList.remove('selected');
        CC.classList.remove('selected');

        $pagination.style.display = 'none';

        let selectedData = allDoctors.filter((doctor, index) => {
            return doctor.department.includes('Pediatric Clinic');
        });

        setDoctorList(selectedData);
    }

    const handleSelectOutpatientSurgery = () => {
        AD.classList.remove('selected');
        PHC.classList.remove('selected');
        PC.classList.remove('selected');
        OS.classList.add('selected');
        CC.classList.remove('selected');

        $pagination.style.display = 'none';

        let selectedData = allDoctors.filter((doctor, index) => {
            return doctor.department.includes('Outpatient Surgery');
        });

        setDoctorList(selectedData);
    }

    const handleSelectCardiacClinic = () => {
        AD.classList.remove('selected');
        PHC.classList.remove('selected');
        PC.classList.remove('selected');
        OS.classList.remove('selected');
        CC.classList.add('selected');

        $pagination.style.display = 'none';

        let selectedData = allDoctors.filter((doctor, index) => {
            return doctor.department.includes('Cardiac Clinic');
        });

        setDoctorList(selectedData);
    }

    return (
        <React.Fragment>
            <div className='doctorSite-container'>
                <div className='doctor-container'>
                    <div className='doctor-content'>
                        <div className='doctor-title-container'>
                            <h2 id='doctor-title' className='doctor-title'>Our Doctors</h2>
                            <ul className='bread-crumb'>
                                <li>
                                    <Link to='/' style={{ color: 'rgb(162, 162, 162)' }}>Home</Link>
                                </li>
                                <span>→</span>
                                <li>Our Doctors</li>
                            </ul>
                        </div>

                        <div className='doctorDetail-container' id='doctor-detail'>
                            <div className='doctor-detail'>
                                <div className='left-detail'>
                                    <img src={`${doctorItem.doctorImg}`} alt=''/>
                                    <div className='doctor-shortInfo'>
                                        <h6 className='doctor-name'>{doctorItem.name}, Prof.</h6>
                                        <div className='doctor-department'>{doctorItem.speciality}</div>
                                    </div>
                                </div>

                                <div className='right-detail'>
                                    <div className='detail-name'>{doctorItem.name}, Prof.</div>
                                    <div className='line'></div>

                                    <div className='detail-info-container'>
                                        <b><p className='info-field'>Speciality</p></b>
                                        <span className='info-value'>{doctorItem.speciality}</span>
                                    </div>
                                    <div className='detail-info-container'>
                                        <b><p className='info-field'>Degrees</p></b>
                                        <span className='info-value'>{doctorItem.degrees}</span>
                                    </div>
                                    <div className='detail-info-container'>
                                        <b><p className='info-field'>Training</p></b>
                                        <span className='info-value'>{doctorItem.training}</span>
                                    </div>
                                    <div className='detail-info-container'>
                                        <b><p className='info-field'>Office</p></b>
                                        <span className='info-value'>{doctorItem.office}</span>
                                    </div>
                                    <div className='detail-info-container'>
                                        <b><p className='info-field'>Work days</p></b>
                                        <span className='info-value'>{doctorItem.workDays}</span>
                                    </div>

                                    <Link to='/timetable'>
                                        <div className='timetable-btn'>
                                            Timetable →
                                        </div>
                                    </Link>

                                    <div className='control-btns-container'>
                                        <div onClick={handleCloseDetail} className='control-btn'>
                                            <i class="fa-solid fa-x"></i>
                                        </div>
                                        <div className='control-btn'>
                                            <i class="fa-solid fa-arrow-left"></i>
                                        </div>
                                        <div className='control-btn'>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='doctor-header'>
                            <h5>Meet The Team</h5>
                            <div className='line'></div>
                        </div>

                        <ul className='tab-navigaion-container'>
                            <li
                                id='AD'
                                onClick={handleSelectAllDepartment}
                                className='tab-navigaion-item'
                            >
                                All Departments
                            </li>
                            <li
                                id='PHC'
                                onClick={handleSelectPrimaryHealthCare}
                                className='tab-navigaion-item'
                            >
                                Primary Health Care
                            </li>
                            <li
                                id='PC'
                                onClick={handleSelectPediatricClinic}
                                className='tab-navigaion-item'
                            >
                                Pediatric Clinic
                            </li>
                            <li
                                id='OS'
                                onClick={handleSelectOutpatientSurgery}
                                className='tab-navigaion-item'
                            >
                                Outpatient Surgery
                            </li>
                            <li
                                id='CC'
                                onClick={handleSelectCardiacClinic}
                                className='tab-navigaion-item'
                            >
                                Cardiac Clinic
                            </li>
                        </ul>

                        <div className='doctorsList-container'>

                            {
                                doctorList.length > 0 ? (
                                    doctorList.map((doctor) => {
                                        return (
                                            <a href='#'>
                                                <div
                                                    onClick={() => { handleDisplayDoctorDetail(doctor.id) }}
                                                    className='grid-item'
                                                >
                                                    <img src={`${doctor.doctorImg}`} alt='' />
                                                    <div className='doctor-shortInfo'>
                                                        <h6 className='doctor-name'>{doctor.name}, Prof.</h6>
                                                        <div className='doctor-department'>{doctor.department}</div>
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
                                            </a>
                                        )
                                    })
                                ) : (
                                    <h3>Loading...</h3>
                                )
                            }

                        </div>

                        <div id='pagination' class="pagination p1">
                            <ul>
                                <div
                                    className={`${pagination === 1 ? 'disabled' : ''}`}
                                    // href="#id"
                                    onClick={() => {
                                        handleSelectPagination('prev');
                                    }}
                                >
                                    <li>{'<'}</li>
                                </div>
                                {Array(Math.ceil(allDoctorsLength / 6))
                                    .fill()
                                    .map((element, index) => (
                                        <div
                                            className={`${pagination === index + 1 ? 'is-active' : ''
                                                }`}
                                            onClick={() => {
                                                handleSelectPagination(index + 1);
                                            }}
                                        >
                                            <li>{index + 1}</li>
                                        </div>
                                    ))}
                                <div
                                    onClick={() => {
                                        handleSelectPagination('next');
                                    }}
                                    className={`${pagination === Math.ceil(allDoctorsLength / 6) ? 'disabled' : ''
                                        }`}
                                >
                                    <li>{'>'}</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Doctors;