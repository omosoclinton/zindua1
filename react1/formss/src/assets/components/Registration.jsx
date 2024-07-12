import React from "react";
import { Formik, useFormik } from "formik";


function Registration() {
    const onSubmit = (values, {resetForm}) => {
        console.log(values)
        resetForm()
    }
    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            course:'',
            county:''
        },
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
                        />
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
                        />
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
                        />
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
                        />
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
                        />
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
                        />
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