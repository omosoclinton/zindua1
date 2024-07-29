import React, {useEffect} from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../schema";
import { MDBInput } from "mdb-react-ui-kit";
import app from "../../firebaseconfig";
import { getDatabase, get, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";



const LoginComponent = () => {
    const navigate = useNavigate()
    const onSubmit = async () => {
        const db = getDatabase(app)
        const dbRef = ref(db, `smartchama/users/${values.username}`)
        const snapshot = await get(dbRef)
        if (snapshot.exists()){
            let userArray = Object.values(snapshot.val())
            if (userArray[0].password == values.password){
                alert("Login Successful")
                // pass props to userpage so that we are able to display user's data
                // we will pass values and use the values to populate the userpage
                console.log(userArray)
                navigate("/user", {state: userArray})
            }
        }else {
            alert('Wrong credentials')
        }
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
            {/* Email input */}
            <div className="form-outline mb-4" data-mdb-input-init>
                <MDBInput
                    type="text"
                    label='Username'
                    name='username'
                    id='username'
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    style={errors.username && touched.username ? { borderColor: 'red' } : {}}
                />
                {errors.username && touched.username ? <p className='error-message'>{errors.username}</p> : ""}
            </div>

            {/* Pass word input */}
            <div data-mdb-input-init className="form-outline mb-4">
                <MDBInput
                    type="text"
                    label='Password'
                    name='password'
                    id='password'
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    style={errors.password && touched.password ? { borderColor: 'red' } : {}}
                />
                {errors.password && touched.password ? <p className='error-message'>{errors.password}</p> : ""}

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