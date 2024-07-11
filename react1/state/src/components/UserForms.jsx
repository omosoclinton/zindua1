import React from "react";
import { useFormik } from "formik";


const onSubmit = () => {
        console.log('submitting')
        setSubmitting(false)
        
}
const UserForm = () =>  {
    const {values, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting} = useFormik({
        initialValues: {
            email:'',
            age:'',
            password:'',
            comfirmPassword:''
        }, 
        onSubmit
    })

    

    return (
        <>
            <h1>User Forms</h1>
            <div className="form-area">
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input 
                            type="email" 
                            name='email'
                            className="form-control" 
                            onChange={handleChange}
                            value={values.email}
                            id="eemail" 
                            placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="age" 
                            name="age"
                            onChange={handleChange}
                            value={values.age}
                            placeholder="Age"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            className="form-control" 
                            id="password" 
                            placeholder="password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comfirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            name='comfirmPassword'
                            value={values.comfirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control" 
                            id="comfirmPassword" 
                            placeholder="comfirmPassword"/>
                    </div>
                    <button disabled={isSubmitting} type="submit" className="btn btn-primary" style={{backgroundColor:'red'}}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default UserForm