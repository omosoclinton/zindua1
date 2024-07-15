import React from "react";
import { Formik, useFormik } from "formik";
import { userFormSchema } from "./schema";


function Login() {
    const onSubmit = (values, {resetForm}) => {
        console.log("submitting")
        setTimeout(()=>{
            console.log("submitted")
        }, 3000)
        resetForm()
    }
    const formik = useFormik({
        initialValues:{
            email:'',
            age:'',
            password:'',
            confirmPassword:'',
        },
        validationSchema:userFormSchema,
        onSubmit 
    })

    console.log(formik.errors)
    
    return (
        <>
            <h1>Registration Form</h1>
            <form className="card" style={{backgroundColor:'#a7b5bb'}} onSubmit={formik.handleSubmit}>
                <div className="row">
                <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            name='email' 
                            className={"form-control" }
                            id="email" 
                            placeholder="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            style={formik.errors.email && formik.touched.email ? {borderColor:"red"}: {}}
                        />
                         {formik.errors.email && formik.touched.email? <p className="error-message">{formik.errors.email}</p>:""} 
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="age">age</label>
                        <input 
                            type="number"
                            name='age' 
                            className="form-control" 
                            id="age" 
                            placeholder="Age"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.age}
                            style={formik.errors.age && formik.touched.age ? {borderColor:"red"}: {}} 
                        />
                        {formik.errors.age && formik.touched.age? <p className="error-message">{formik.errors.age}</p>:""} 
                    </div>
              
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="text"
                            name="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            style={formik.errors.password && formik.touched.password ? {borderColor:"red"}: {}}  
                        />
                        {formik.errors.password && formik.touched.password? <p className="error-message">{formik.errors.password}</p>:""} 
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="text"
                            name='confirmPassword' 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirm Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword} 
                            style={formik.errors.confirmPassword && formik.touched.confirmPassword ? {borderColor:"red"}: {}} 
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword? <p className="error-message">{formik.errors.confirmPassword}</p>:""}
                    </div>
                </div>

                <br />
                <br />
                <button type="submit" className="btn btn-primary" style={{marginTop:'10px', paddingTop:'5px'}}>Submit</button>
            </form>

        </>
    )
}

export default Login