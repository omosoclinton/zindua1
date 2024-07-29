import React from "react";
import {useFormik } from "formik";
import { loginSchema } from "../schema";
import Navbar from "./Navbar";
import app from "../firebaseconfig";
import { getDatabase, get, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()
    const onSubmit = async () => {
        const db = getDatabase(app)
        console.log(ref(db))
        const docRef = ref(db, `patanyumba/users/${values.username}`)
        const snapshot = await get(docRef)
        if (snapshot.exists()){
            let userArray = Object.values(snapshot.val())
            console.log(userArray)
            //check pawd
            if(userArray[0].password == values.password){
                alert("succesful login")
                navigate("/houses")
                setSubmitting(false)
            }
        }else{
            alert('wrong username') 
        }
        
    }
    const {values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit
    })

    console.log(errors)

    return (
        <>
            <Navbar/>
            <form className="card container form-area" style={{ backgroundColor: '#a7b5bb', width:'20%' }} onSubmit={handleSubmit}>
            <legend style={{textAlign:'center'}}>Login Form</legend>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="username">username</label>
                        <input
                            type="username"
                            name='username'
                            className={"form-control"}
                            id="username"
                            placeholder="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            style={errors.username && touched.username ? { borderColor: "red" } : {}}
                        />
                        {errors.username && touched.username ? <p className="error-message">{errors.username}</p> : ""}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            style={errors.password && touched.password ? { borderColor: "red" } : {}}
                        />
                        {errors.password && touched.password ? <p className="error-message">{errors.password}</p> : ""}
                    </div>
                </div>

                <br />
                <br />
                <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ marginTop: '10px', paddingTop: '5px' }}>Login</button>
            </form>

        </>
    )
}

export default Login