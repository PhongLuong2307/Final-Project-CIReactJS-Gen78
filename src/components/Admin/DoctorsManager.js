import React, { useEffect, useState } from 'react';
import './Admin.css';

const DoctorsManger = () => {

  const [name, setName] = useState('');
  const [degrees, setDegrees] = useState('');
  const [office, setOffice] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [department, setDepartment] = useState('');
  const [workDays, setWorksDay] = useState('');
  const [doctorImg, setDoctorImg] = useState('');
  const [training, setTraining] = useState('');
  const [idDoctor, setIdDoctor] = useState(0);

  const [allDoctors, setAllDoctors] = useState([]);

  useEffect(() => {
    const handleFetchAllBlogs = () => {
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

    handleFetchAllBlogs();
  }, [allDoctors]);

  const handleSetName = (event) => {
    setName(event.target.value);
  }

  const handleSetDegrees = (event) => {
    setDegrees(event.target.value);
  }

  const handleSetOffice = (event) => {
    setOffice(event.target.value);
  }

  const handleSetSpeciality = (event) => {
    setSpeciality(event.target.value);
  }

  const handleSetWorksDay = (event) => {
    setWorksDay(event.target.value);
  }

  const handleSetDoctorImg = (event) => {
    setDoctorImg(event.target.value);
  }

  const handleSetTraining = (event) => {
    setTraining(event.target.value);
  }

  const handleSetDepartment = (event) => {
    setDepartment(event.target.value);
  }

  const handleUploadDoctor = () => {
    const newDoctor = {
      name: name,
      degrees: degrees,
      office: office,
      speciality: speciality,
      department: department,
      workDays: workDays,
      doctorImg: doctorImg,
      training: training,
    }

    fetch('https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-doctors', {
      method: 'POST',
      body: JSON.stringify(newDoctor),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setAllDoctors(data);
        alert('Upload Successfully!');
      })
  }

  const onUpdateDoctor = (id) => {
    fetch(
      'https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-doctors/' + id,
    )
      .then((response) => {
        return response.json();
      })
      .then((doctor) => {
        setName(doctor.name);
        setDegrees(doctor.degrees);
        setOffice(doctor.office);
        setSpeciality(doctor.speciality);
        setWorksDay(doctor.workDays);
        setDepartment(doctor.department);
        setDoctorImg(doctor.doctorImg);
        setTraining(doctor.training);
        setIdDoctor(doctor.id);
      });

    const addDoctorContainer = document.getElementById('addDoctor-form');
    addDoctorContainer.classList.add("toggle-display");

    console.log(id);
  }

  const handleUpdateDoctor = (id) => {
    const updateDoctor = {
      name: name,
      degrees: degrees,
      office: office,
      speciality: speciality,
      workDays: workDays,
      department: department,
      doctorImg: doctorImg,
      training: training,
    }

    fetch('https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-doctors/' + id, {
      method: 'PUT',
      body: JSON.stringify(updateDoctor),
      headers: {
        'Content-Type': 'application/json'
      },

    })
      .then((response) => response.json())
      .then((result) => {
        alert('Update successfully!');
      })
  }

  const handleDeleteDoctor = (id) => {
    fetch('https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-doctors/' + id, {
        method: 'DELETE',
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setAllDoctors(data);
            alert("Delete successfully!");
        });
}

  const toggleForm = () => {
    const addDoctorContainer = document.getElementById('addDoctor-form');
    addDoctorContainer.classList.toggle("toggle-display");
  }

  return (
    <React.Fragment>
      <div className='manager-container'>
        <h4 className='manager-title'>Doctors Manager</h4>

        <button
          onClick={toggleForm}
          className='toggle-btn'
        >
          <span className='plus'>+</span> Upload New Doctor
        </button>

        <div className='addForm-container' id='addDoctor-form'>
          <h2 className='addBlog-title'>Upload Doctor</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }} className='addBlog--form__container'>
            <div className='input-group'>
              <div className='input-item'>
                <label className='doctor-label' htmlFor='doctor-name'>Doctor Name</label>
                <input
                  onChange={handleSetName}
                  value={name}
                  className='doctor-input'
                  id='doctor-name'
                />
              </div>
              <div className='input-item'>
                <label className='doctor-label' htmlFor='doctor-degree'>Degrees</label>
                <input
                  onChange={handleSetDegrees}
                  value={degrees}
                  className='doctor-input'
                  id='doctor-degree'
                />
              </div>
            </div>

            <div className='input-group'>
              <div className='input-item'>
                <label className='doctor-label' htmlFor='doctor-office'>Office</label>
                <input
                  onChange={handleSetOffice}
                  value={office}
                  className='doctor-input'
                  id='doctor-office'
                />
              </div>
              <div className='input-item'>
                <label className='doctor-label' htmlFor='doctor-speciality'>Speciality</label>
                <input
                  onChange={handleSetSpeciality}
                  value={speciality}
                  className='doctor-input'
                  id='doctor-speciality'
                />
              </div>
            </div>

            <div className='input-group'>
              <div className='input-item'>
                <label className='doctor-label' htmlFor='doctor-workDays'>Work Days</label>
                <input
                  onChange={handleSetWorksDay}
                  value={workDays}
                  className='doctor-input'
                  id='doctor-workDays'
                />
              </div>
              <div className='input-item'>
                <label className='doctor-label' htmlFor='doctor-department'>Department</label>
                <input
                  onChange={handleSetDepartment}
                  value={department}
                  className='doctor-input'
                  id='doctor-department'
                />
              </div>
            </div>

            <div className='input-group'>
              <div className='input-item'>
                <label className='doctor-label' htmlFor='doctor-img'>Image Source</label>
                <input
                  onChange={handleSetDoctorImg}
                  value={doctorImg}
                  className='doctor-input'
                  id='doctor-img'
                />
              </div>
              <div className='input-item'>
                <label className='doctor-label' htmlFor='training'>Training</label>
                <textarea
                  onChange={handleSetTraining}
                  value={training}
                  className='doctor-input'
                  id='training'
                />
              </div>
            </div>

            <div className="form-btns-container">
              <div className='addBtn-container'>
                <input
                  onClick={handleUploadDoctor}
                  className='formBtn'
                  value='Upload'
                  type='button'
                />
              </div>
              <div className='updateBtn-container'>
                <input
                  onClick={() => { handleUpdateDoctor(idDoctor) }}
                  className='updateBtn formBtn'
                  value='Update'
                  type='button'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Doctors List */}

        <div className='manage-blogsList'>
          <div class="table-responsive">
            <table class="table" id="dataTable" width="100%" cellspacing="0">
              <thead className='admin-thead'>
                <tr>
                  <th className='doctorID-th'>Doctor ID</th>
                  <th className='doctorName-th'>Name</th>
                  <th className='doctorDegree-th'>Degrees</th>
                  <th className='doctorSpeciality-th'>Speciality</th>
                  <th className='doctorOffice-th'>Office</th>
                  <th className='doctorWorkdays-th'>Work Days</th>
                  <th className='actions'>Actions</th>
                </tr>
              </thead>
              <tbody>

                {
                  allDoctors.length > 0 ? (
                    allDoctors.map((doctor) => {
                      return (
                        <tr className='table-row'>
                          <td className='padding doctorID-td'>{doctor.id}</td>
                          <td className='padding'>{doctor.name}</td>
                          <td className='padding'>{doctor.degrees}</td>
                          <td className='padding'>{doctor.speciality}</td>
                          <td className='padding'>{doctor.office}</td>
                          <td className='padding'>{doctor.workDays}</td>
                          <td className='padding'>
                            <div className='actions-btns-container'>
                              <button
                                onClick={() => { onUpdateDoctor(doctor.id) }}
                                className='actionBtn updateBtn'
                              >
                                Update
                              </button>
                              <button
                                onClick={() => { handleDeleteDoctor(doctor.id) }}
                                className='actionBtn deleteBtn'
                              >
                                Delete
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
      </div>
    </React.Fragment>
  )
}

export default DoctorsManger;