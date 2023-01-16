import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../components/Login/Login.css"
import useGetUsers from '../hooks/useGetUsers';

const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupPhone, setSignupPhone] = useState('');
    const [signupEmail, setSignupEmail] = useState('');

    const navigate = useNavigate();

    const handleSwitchSignupForm = () => {
        setIsLoginForm(false);
        console.log(isLoginForm);
    }

    const handleSwitchLoginForm = () => {
        setIsLoginForm(true);
    }

    const handleSetLoginUsername = (event) => {
        setLoginUsername(event.target.value);
    }

    const handleSetLoginPassword = (event) => {
        setLoginPassword(event.target.value);
    }

    const handleSetSignupUsername = (event) => {
        setSignupUsername(event.target.value);
    }

    const handleSetSignupPassword = (event) => {
        setSignupPassword(event.target.value);
    }

    const handleSetSignupPhone = (event) => {
        setSignupPhone(event.target.value);
    }

    const handleSetSignupEmail = (event) => {
        setSignupEmail(event.target.value);
    }

    let usersList = useGetUsers();

    const handleSignUp = () => {

        let isExist = true;
        function matchEmailRegex(signupEmail) {
            let emailRegex = /\S+@\S+\.\S+/;
            return signupEmail.match(emailRegex);
        };

        if (signupUsername === '' || signupPassword === '' || signupEmail === '' || signupPhone === '') {
            alert('All the fields must be filled!');
            isExist = false;
        } else if (matchEmailRegex(signupEmail) == null) {
            alert('Email is not valid.');
            isExist = false;
        } else {
            for (let i = 0; i < usersList.length; i++) {
                if (usersList[i].username === signupUsername) {
                    alert('This User Has Existed!');
                    isExist = false;
                    break;
                }
            }
        }

        if (isExist === true) {
            const newUser = {
                username: signupUsername,
                password: signupPassword,
                phoneNumber: signupPhone,
                email: signupEmail,
                role: "user",
            }

            fetch('https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-users', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function () {
                    alert('Sign Up Successfully!')
                })
        }
    }

    const handleLogIn = () => {
        if (loginUsername === '' || loginPassword === '') {
            alert('All the fields must be filled!');
        } else {
            let count = 0;
            for (let i = 0; i < usersList.length; i++) {
                if (usersList[i].username === loginUsername && usersList[i].password === loginPassword) {
                    if (usersList[i].role === 'user') {
                        localStorage.setItem('username', `${loginUsername}`);
                        localStorage.setItem('isLogin', true);
                        localStorage.setItem('role', `${usersList[i].role}`);
                        localStorage.setItem('avatar', `${usersList[i].avatar}`);
                        localStorage.setItem('phoneNumber', `${usersList[i].phoneNumber}`)

                        navigate('/');
                    } else if (usersList[i].role === 'admin') {
                        localStorage.setItem('username', `${loginUsername}`);
                        localStorage.setItem('isLogin', true);
                        localStorage.setItem('role', `${usersList[i].role}`);
                        localStorage.setItem('avatar', `${usersList[i].avatar}`);

                        navigate('/admin');
                    }
                    break
                } else {
                    count++;
                }
            }
            if (count === usersList.length) {
                alert('Incorrect Username or Password.');
            }
        }
    }

    return (
        <React.Fragment>
            <div className='page-container'>
                <div className='login-header'>
                    <div className='brand-container'>
                        <img className='brand-logo' src='assets/img/header_logo.png' alt='' />
                        <span className='brand-name'>medicenter</span>
                    </div>
                </div>
                <div style={{ backgroundImage: "url('assets/img/img3.jpg')" }} className='login-container'>
                    <div className='form-container'>
                        {
                            (
                                isLoginForm ? (
                                    <div className='login-form'>
                                        <h2 className='form-title'>Login</h2>
                                        <div className='logInPage-input-container'>
                                            <label className='login-label' htmlFor='login-username'>Username</label>
                                            <input onChange={handleSetLoginUsername} className='login-input' id='login-username' />
                                        </div>

                                        <div className='logInPage-input-container'>
                                            <label className='login-label' htmlFor='login-username'>Password</label>
                                            <input type='password' onChange={handleSetLoginPassword} className='login-input' id='login-username' />
                                        </div>

                                        <div className='loginBtn-container'>
                                            <button onClick={handleLogIn}>Login</button>
                                        </div>

                                        <div className='forgotPass-text'>
                                            Forgot password?
                                        </div>

                                        <div className='signUp-text'>
                                            Don't have an account? <span onClick={handleSwitchSignupForm} className='signUpHere'>Sign Up Here</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='signup-form'>
                                        <h2 className='form-title'>Sign Up</h2>
                                        <div className='logInPage-input-container signUp-input-container'>
                                            <label className='signup-label' htmlFor='signup-username'>Username</label>
                                            <input onChange={handleSetSignupUsername} className='signup-input' id='signup-username' />
                                        </div>

                                        <div className='logInPage-input-container signUp-input-container'>
                                            <label className='signup-label' htmlFor='signup-username'>Password</label>
                                            <input type='password' onChange={handleSetSignupPassword} className='signup-input' id='signup-username' />
                                        </div>

                                        <div className='logInPage-input-container signUp-input-container'>
                                            <label className='signup-label' htmlFor='signup-phonenumber'>Phone Number</label>
                                            <input onChange={handleSetSignupPhone} className='signup-input' id='signup-phonenumber' />
                                        </div>

                                        <div className='logInPage-input-container signUp-input-container'>
                                            <label className='signup-label' htmlFor='signup-email'>Email</label>
                                            <input type='email' onChange={handleSetSignupEmail} className='signup-input' id='signup-email' />
                                        </div>

                                        <div className='loginBtn-container signupBtn-container'>
                                            <button onClick={handleSignUp}>Sign Up</button>
                                        </div>

                                        <div className='logIn-text'>
                                            Have had an account yet? <span onClick={handleSwitchLoginForm} className='signUpHere'>Log In</span>
                                        </div>
                                    </div>
                                )
                            )
                        }

                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div className='backtohome'>
                                Back To Home Page
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;