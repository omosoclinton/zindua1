import React from "react";
import SocialComponent from "./SocialComponent";
import { useFormik } from "formik";


const LoginComponent = () => {
    const onSubmit = () => {
        console.log("submitted")
        console.log(values.username)
        setSubmitting(false)
        // something
    }
    const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit
    })
    return (
        <form onSubmit={handleSubmit}>
            <div className="text-center mb-3">
                <p>Sign in with:</p>
                <SocialComponent/>
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
                <label className="form-label" htmlFor="username">Email or username</label>
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
                <label className="form-label" htmlFor="password">Password</label>
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
    )
}

export default LoginComponent