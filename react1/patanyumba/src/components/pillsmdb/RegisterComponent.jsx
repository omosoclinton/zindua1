import React from "react";
import { useFormik } from "formik";
import SocialComponent from "./SocialComponent";
import { registerSchema } from "../../schema";

const RegisterComponent = () => {
    const onSubmit = () => {
        console.log("submitted")
        console.log(values)
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
        validationSchema: registerSchema,
        onSubmit
    })
    return (
        <form onSubmit={handleSubmit}>
            <div className="text-center mb-3">
                <p>Sign up with:</p>
                <SocialComponent/>
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
                <label className="form-label" htmlFor="userFullName">Name</label>
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
                <label className="form-label" htmlFor="userIdNumber">ID Number</label>
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
                <label className="form-label" htmlFor="username">Username</label>
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
                <label className="form-label" htmlFor="userEmail">Email</label>
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
                <label className="form-label" htmlFor="password">Password</label>
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
                <label className="form-label" htmlFor="confirmPassword">Repeat password</label>
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
    )
}

export default RegisterComponent