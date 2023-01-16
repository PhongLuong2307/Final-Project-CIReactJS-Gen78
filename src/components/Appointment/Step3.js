import React from 'react';
import './Step3.css';

const Step3 = (props) => {
  const {
    setIsStep1,
    setIsStep2,
    setIsStep3,
    availableDoctor,
    appointmentTime,
    appointmentDate,
    facility,
    department,
    customName,
    customBirthday,
    customGender,
    customPhoneNumber,
    customReason
  } = props;

  const handlePreviousStep = () => {
    setIsStep1(false);
    setIsStep2(true);
    setIsStep3(false)
  }

  const handleConfirm = () => {
    
      let OTP = prompt('We have sent an OTP code to your phone, please enter here to confirm:');

      if (OTP !== '060203') {
        alert('Incorrect OTP');
      } else {
        let newAppointment = {
          customName: customName,
          birthDay: customBirthday,
          gender: customGender,
          phoneNumber: customPhoneNumber,
          reason: customReason,
          appointmentTime: appointmentTime,
          appointmentDate: appointmentDate,
          location: facility,
          department: department,
          doctor: availableDoctor,
        }

        fetch('https://63c2875ee3abfa59bdae7af7.mockapi.io/api/v1/medicenter-appointment', {
          method: 'POST',
          body: JSON.stringify(newAppointment),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            alert('Appointment Sent Successfully!');
          })
      }
  }

  return (
    <React.Fragment>
      <div id='step2' className='stepItem'>
        <h6 className='step-title'>
          <span style={{ color: '#3156a3' }}>STEP 3/3 </span>
          -
          CONFIRM INFORMATION
        </h6>

        <div className='step-body'>
          <div className='step-left'>
            <div className='booking-info'>
              <div className='info-list'>
                <h4>Service</h4>
                <div className='line apnt-line'></div>
                <div className='info-item'>
                  <div className='info-key'>Type</div>
                  <span className='info-value'>Medical examination at the hospital</span>
                </div>
              </div>

              <div className='info-list'>
                <h4>Doctor</h4>
                <div className='line apnt-line'></div>
                <div className='info-item'>
                  <div className='info-key'>Doctor</div>
                  <span className='info-value'>Doctor {availableDoctor}</span>
                </div>
                <div className='info-item'>
                  <div className='info-key'>Appointment</div>
                  <span className='info-value'>{appointmentTime}, {appointmentDate}</span>
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
            <div className='info-list'>
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

        <div className='step-footer-container'>
          <div className='step-footer-btn'>
            <button
              onClick={handlePreviousStep}
              className='step-btn back-btn'
            >
              BACK
            </button>
            <button
              onClick={handleConfirm}
              className='step-btn next-btn'
            >
              CONFIRM
            </button>
          </div>
          <div className='step-footer-text'>
            By clicking Confirm,I have read and acknowledged <span style={{ color: '#0384ce', cursor: 'pointer' }}>Terms of Service</span> and Privacy Notice.
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Step3;