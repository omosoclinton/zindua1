import React, { useState } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../schema';
import { registerSchema } from '../schema';


const PillsNavs = () => {
    const [activeTab, setActiveTab] = useState('login');
    const onSubmit = () => {
        console.log("submitted")
        console.log(values.username)
        setSubmitting(false)
        // something
    }
    const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched } = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
            userFullName: '',
            userIdNumber: '',
            userEmail: ''
        },
        validationSchema: loginSchema,
        validationSchema: registerSchema,
        onSubmit
    })

    return (
        <div className='container'>
            {/* Pills navs */}
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                        id="tab-login"
                        onClick={() => setActiveTab('login')}
                        role="tab"
                        data-mdb-pill-init
                        aria-controls="pills-login"
                        aria-selected={activeTab === 'login'}
                    >
                        LOGIN
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                        id="tab-register"
                        onClick={() => setActiveTab('register')}
                        role="tab"
                        data-mdb-pill-init
                        aria-controls="pills-register"
                        aria-selected={activeTab === 'register'}
                    >
                        REGISTER
                    </a>
                </li>
            </ul>
            {/* Pills navs */}

            {/* Pills content */}

            {/* Login Section */}
            <div className="tab-content">
                {activeTab === 'login' && (
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form>
                            <div className="text-center mb-3">
                                <p>Sign in with:</p>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>

                            <p className="text-center">or:</p>

                            {/* Email input */}
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="text"
                                    name='username'
                                    id='username'
                                    placeholder='username'
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    style={errors.username && touched.username ? { borderColor: 'red' } : {}}
                                />
                                <label className="form-label" htmlFor="loginName">Email or username</label>
                                {errors.username && touched.username ? <p className='error-message'>{errors.username}</p> : ""}
                            </div>

                            {/* Pass word input */}
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="text"
                                    name='username'
                                    id='username'
                                    placeholder='username'
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    style={errors.username && touched.username ? { borderColor: 'red' } : {}}
                                />
                                <label className="form-label" htmlFor="loginPassword">Password</label>
                                {errors.username && touched.username ? <p className='error-message'>{errors.username}</p> : ""}

                            </div>

                            {/* 2 column grid layout */}
                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div className="form-check mb-3 mb-md-0">
                                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                                        <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                    </div>
                                </div>

                                <div className="col-md-6 d-flex justify-content-center">
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

                            {/* Register button */}
                            <div className="text-center">
                                <p>Not a member? <a href="#!">Register</a></p>
                            </div>
                        </form>
                    </div>
                )}


                {/* Register Section */}
                {activeTab === 'register' && (
                    <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                        <form>
                            <div className="text-center mb-3">
                                <p>Sign up with:</p>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>

                            <p className="text-center">or:</p>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="text"
                                    name='userFullName'
                                    id='userFullName'
                                    className="form-control"
                                    placeholder='userFullName'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userFullName}
                                    style={errors.userFullName && touched.userFullName ? { borderColor: 'red' } : {}}
                                />
                                <label className="form-label" htmlFor="registerName">Name</label>
                                {errors.userFullName && touched.userFullName ? <p className='error-message'>{errors.userFullName}</p> : ""}
                            </div>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="text"
                                    name='userIdNumber'
                                    id='userIdNumber'
                                    className="form-control"
                                    placeholder='User Id Number'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userIdNumber}
                                    style={errors.userIdNumber && touched.userIdNumber ? { borderColor: 'red' } : {}}
                                />
                                <label className="form-label" htmlFor="registerUsername">ID Number</label>
                                {errors.userIdNumber && touched.userIdNumber ? <p className='error-message'>{errors.userIdNumber}</p> : ""}
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="text"
                                    name='username'
                                    className="form-control"
                                    id='username'
                                    placeholder='username'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    style={errors.username && touched.username ? { borderColor: 'red' } : {}}
                                />
                                <label className="form-label" htmlFor="registerUsername">Username</label>
                                {errors.username && touched.username ? <p className='error-message'>{errors.username}</p> : ""}
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="text"
                                    name='userEmail'
                                    className="form-control"
                                    id='userEmail'
                                    placeholder='userEmail'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userEmail}
                                    style={errors.userEmail && touched.userEmail ? { borderColor: 'red' } : {}}
                                />
                                <label className="form-label" htmlFor="registerEmail">Email</label>
                                {errors.userEmail && touched.userEmail ? <p className='error-message'>{errors.userEmail}</p> : ""}
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="text"
                                    name='password'
                                    id='password'
                                    className="form-control"
                                    placeholder='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    style={errors.password && touched.password ? { borderColor: 'red' } : {}}
                                />
                                <label className="form-label" htmlFor="registerPassword">Password</label>
                                {errors.password && touched.password ? <p className='error-message'>{errors.username}</p> : ""}
                            </div>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="text"
                                    name='confirmPassword'
                                    id='confirmPassword'
                                    className="form-control"
                                    placeholder='confirmPassword'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    style={errors.confirmPassword && touched.confirmPassword ? { borderColor: 'red' } : {}}
                                />
                                <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                                {errors.confirmPassword && touched.confirmPassword ? <p className='error-message'>{errors.confirmPassword}</p> : ""}
                            </div>

                            <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" defaultChecked />
                                <label className="form-check-label" htmlFor="registerCheck">
                                    I have read and agree to the terms.
                                </label>
                            </div>

                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">Sign up</button>
                        </form>
                    </div>
                )}
            </div>
            {/* Pills content */}
        </div>
    );
};

export default PillsNavs;
