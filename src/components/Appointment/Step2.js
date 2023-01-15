import React, { useRef, useState } from 'react';
import './Step2.css'

const Step2 = (props) => {
    const ref = useRef();

    const {
        setIsStep1,
        setIsStep2,
        setIsStep3,
        onChangeCustomName,
        onChangeCustomGender,
        onChangeCustomBirthday,
        onChangeCustomPhoneNumber,
        onChangeCustomEmail,
        onChangeCustomReason,
        customName,
        customGender,
        customBirthday,
        customPhoneNumber,
        customEmail,
        customReason,
        isActiveStep2,
        cursorStep2
    } = props;

    const handleNextStep = () => {
        if (isActiveStep2 === true) {
            setIsStep1(false);
            setIsStep2(false);
            setIsStep3(true);
        }
    }

    const handlePreviousStep = () => {
        setIsStep1(true);
        setIsStep2(false);
        setIsStep3(false)
    }

    return (
        <React.Fragment>
            <div id='step2' className='stepItem'>
                <h6 className='step-title'>
                    <span style={{ color: '#3156a3' }}>STEP 2/3 </span>
                    -
                    PATIENT'S INFORMATION
                </h6>

                <div className='step-body'>
                    <div className='step-left'>
                        <div className='input-tag input-tag-group'>
                            <input
                                onChange={onChangeCustomName}
                                value={customName}
                                placeholder='Name (*)'
                                className='apnt-input'
                            />
                            <div className='gender-container'>
                                <input
                                    onChange={onChangeCustomGender}
                                    className='gender-input'
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value='Male'
                                />
                                <label className='gender-label' for="male">Male</label>
                                <input
                                    onChange={onChangeCustomGender}
                                    className='gender-input'
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value='Female'
                                />
                                <label className='gender-label' for="female">Female</label>
                            </div>
                        </div>
                        <div className='input-tag'>
                            <input
                                className='apnt-input'
                                placeholder='Birth of date'
                                type="text"
                                ref={ref}
                                onChange={onChangeCustomBirthday}
                                value={customBirthday}
                                onFocus={() => (ref.current.type = "date")}
                                onBlur={() => (ref.current.type = "date")} />
                        </div>
                        <div className='input-tag'>
                            <input
                                onChange={onChangeCustomPhoneNumber}
                                value={customPhoneNumber}
                                placeholder='Input the phone number to get OTP (*)'
                                className='apnt-input'
                            />
                        </div>
                        <div className='input-tag'>
                            <input
                                onChange={onChangeCustomEmail}
                                value={customEmail}
                                type='email'
                                placeholder='Email address'
                                className='apnt-input'
                            />
                        </div>
                    </div>
                    <div className='step-right'>
                        <textarea
                            onChange={onChangeCustomReason}
                            value={customReason}
                            placeholder='Detail description your symptoms or your needs (*)'
                            className='symtoms-textarea'
                        />
                    </div>
                </div>

                <div className='step-footer'>
                    <button
                        onClick={handlePreviousStep}
                        className='step-btn back-btn'
                    >
                        BACK
                    </button>
                    <button
                        style={{
                            cursor: cursorStep2
                        }}
                        onClick={handleNextStep}
                        className='step-btn next-btn'
                    >
                        NEXT
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Step2;