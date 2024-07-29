import React from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../schema';
import { registerSchema } from '../schema';

const Login = () => {
    const onSubmit = () => {
        console.log("submitted")
        console.log(values.username)
        setSubmitting(false)
        // something
    }
    const {values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched} = useFormik ({
        initialValues:{
            username:'',
            password:''
        },
        validationSchema: loginSchema,
        onSubmit
    })
    return (
        <>
            <div className='card' style={{ backgroundColor: '#a7b5bb', width:'50%'}}>
                <form className="form-area" onSubmit={handleSubmit}>
                    <legend>Login</legend>
                    <div className='row createRow'>
                        <div className='form-group'>
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text"
                                name='username' 
                                id='username'
                                placeholder='username'
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                style={errors.username && touched.username ? {borderColor: 'red'}: {}} 
                            />
                            {errors.username && touched.username ? <p className='error-message'>{errors.username}</p>: ""}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="username">Password</label>
                            <input 
                                type="text"
                                name='password' 
                                id='password'
                                className="form-control"
                                placeholder='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                style={errors.password && touched.password ? {borderColor:'red'}: {}}
                            />
                            {errors.password && touched.password ? <p className='error-message'>{errors.username}</p>: ""}
                        </div>
                    </div>
                    <br />
                    <br />
                    <button type="submit" disabled={isSubmitting} className='btn btn-primary'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login