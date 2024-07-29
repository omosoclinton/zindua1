import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "../schema";
import Navbar from "./Navbar";
import app from "../firebaseconfig";
import { getDatabase, ref, set, push, get } from "firebase/database";
import { useNavigate } from "react-router-dom";


function Register() {

    const navigate = useNavigate()
    const userExists = async (username) => {
        const db = getDatabase(app)
        const docRef = ref(db, `patanyumba/users/${username}`)
        const snapshot = await get(docRef)
        return snapshot.exists()

    }
    const onSubmit = async () => {
        let userIsPresent = await userExists(values.username)
        if (userIsPresent){
            console.log(values.username)
            alert('Username exists')
            setSubmitting(false)
            return;
        }

        const db = getDatabase(app)
        const newDocRef = push(ref(db, `patanyumba/users/${values.username}`))
        set(newDocRef, {
            username: values.username,
            password: values.password
        }).then((resp) => {
            console.log(resp)
            alert("reg success")
            navigate("/login")
            setSubmitting(false)
        }).catch((err) => {
            console.log("Error")
            alert("Error")
            setSubmitting(false)
        })

        // shows 

        console.log("submitting")
        setTimeout(() => {
            console.log("submitted")
        }, 3000)
        setSubmitting(false)
        resetForm()
    }
    const {values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched, resetForm} = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: registerSchema,
        onSubmit
    })
    
    return (
        <>
            <Navbar/>
            <form className="card container form-area" style={{ backgroundColor: '#a7b5bb', width:'20%' }} onSubmit={handleSubmit}>
                <legend style={{textAlign:'center'}}>Registration Form</legend>
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
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

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="text"
                            name='confirmPassword'
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            style={errors.confirmPassword && touched.confirmPassword ? { borderColor: "red" } : {}}
                        />
                        {errors.confirmPassword && touched.confirmPassword ? <p className="error-message">{errors.confirmPassword}</p> : ""}
                    </div>


                </div>

                <br />
                <br />
                <button disabled={isSubmitting} type="submit" className="btn btn-primary" style={{ marginTop: '10px', paddingTop: '5px' }}>Submit {console.log('submit')}</button>
            </form>

        </>
    )
}

export default Register
