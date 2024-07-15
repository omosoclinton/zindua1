import React from "react";
import { Formik, useFormik } from "formik";
import { studentFormSchema } from "./schema";


function Registration() {
    const onSubmit = (values, {resetForm}) => {
        console.log("submitting")
        setTimeout(()=>{
            console.log("submitted")
        }, 3000)
        resetForm()
    }
    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
            yob:'',
            course:'',
            county:''
        },
        validationSchema:studentFormSchema,
        onSubmit 
    })
    
    return (
        <>
            <h1>Registration Form</h1>
            <form className="card" style={{backgroundColor:'#a7b5bb'}} onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text"
                            name='firstName' 
                            className="form-control" 
                            id="firstName" 
                            placeholder="First Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            style={formik.errors.firstName && formik.touched.firstName ? {borderColor:"red"}: {}} 
                        />
                        {formik.errors.firstName && formik.touched.firstName? <p className="error-message">{formik.errors.firstName}</p>:""} 
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text"
                            name='lastName' 
                            className="form-control" 
                            id="lastName" 
                            placeholder="Lasr Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName} 
                            style={formik.errors.lastName && formik.touched.lastName ? {borderColor:"red"}: {}}
                        />
                        {formik.errors.lastName && formik.touched.lastName? <p className="error-message">{formik.errors.lastName}</p>:""}
                    </div>
                    
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="yob">Year Of Birth</label>
                        <input 
                            type="number"
                            name='yob' 
                            className="form-control" 
                            id="yob" 
                            placeholder="Year of Birth"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.yob} 
                            style={formik.errors.lastName && formik.touched.lastName ? {borderColor:"red"}: {}}
                        />
                        {formik.errors.firstName && formik.touched.firstName? <p className="error-message">{formik.errors.firstName}</p>:""}
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            name='email' 
                            className="form-control" 
                            id="email" 
                            placeholder="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email} 
                            style={formik.errors.email && formik.touched.email ? {borderColor:"red"}: {}}
                        />
                        {formik.errors.email && formik.touched.email? <p className="error-message">{formik.errors.email}</p>:""}
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="course">Course</label>
                        <input 
                            type="text"
                            name='course' 
                            className="form-control" 
                            id="course" 
                            placeholder="Course"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.course} 
                            style={formik.errors.course && formik.touched.course ? {borderColor:"red"}: {}}
                        />
                        {formik.errors.course && formik.touched.course? <p className="error-message">{formik.errors.course}</p>:""}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="county">County</label>
                        <input 
                            type="text"
                            name='county' 
                            className="form-control" 
                            id="county" 
                            placeholder="County"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.county} 
                            style={formik.errors.county && formik.touched.county ? {borderColor:"red"}: {}}
                        />
                        {formik.errors.county && formik.touched.county? <p className="error-message">{formik.errors.county}</p>:""}
                    </div>
                </div>

                <br />
                <br />
                <button type="submit" className="btn btn-primary" style={{marginTop:'10px', paddingTop:'5px'}}>Submit</button>
            </form>

        </>
    )
}

export default Registration

{
    <>


        <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
        </div>
    </>
}