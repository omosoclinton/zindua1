import React from "react";
import { useFormik } from "formik";
import SocialComponent from "./SocialComponent";
import { registerSchema } from "../../schema";
import app from "../../firebaseconfig";
import { getDatabase, ref, set, push, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";

const RegisterComponent = () => {
    const navigate = useNavigate();

    // userExists checks if user is availble and returns either true or false
    const userExists = async (username) => {
        const db = getDatabase(app);
        const dbRef = ref(db, `smartchama/users/${username}`);
        const snapshot = await get(dbRef);
        return snapshot.exists(); 
    }

    const onSubmit = async () => {
        let userIsPresent = await userExists(values.username);

        if (userIsPresent) {
            alert('Username is taken');
            return;
        }
        const db = getDatabase(app);

        // This will create our database with user/uniqueid
        const newDbRef = push(ref(db, `smartchama/users/${values.username}`)) 
        set(newDbRef, {
            username: values.username,
            password: values.password,
            userFullName: values.userFullName,
            userIdNumber: values.userIdNumber,
            userEmail: values.userEmail,
            userImg:''
        }).then((resp) => {
            alert("Registration successful")
            navigate("/accounts")
        }).catch((err)=> {
            console.log(err)
            alert("Error creating account")
        })
        setTimeout(() => {
            console.log("submitted")
        }, 3000)
        resetForm()
    }
    const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched, resetForm} = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
            userFullName: '',
            userIdNumber: '',
            userEmail: '',
            userImg:''
        },
        validationSchema: registerSchema,
        onSubmit
    })
    return (
        <form onSubmit={handleSubmit}>
            <div data-mdb-input-init className="form-outline mb-4">
                <MDBInput
                    label='Full Name'
                    type="text"
                    name='userFullName'
                    id='userFullName'
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userFullName}
                    style={errors.userFullName && touched.userFullName ? { borderColor: 'red' } : {}}
                />
                {errors.userFullName && touched.userFullName ? <p className='error-message'>{errors.userFullName}</p> : ""}
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
                <MDBInput
                    type="text"
                    label="ID Number"
                    name='userIdNumber'
                    id='userIdNumber'
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userIdNumber}
                    style={errors.userIdNumber && touched.userIdNumber ? { borderColor: 'red' } : {}}
                />
                {errors.userIdNumber && touched.userIdNumber ? <p className='error-message'>{errors.userIdNumber}</p> : ""}
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
                <MDBInput
                    type="text"
                    label='Username'
                    name='username'
                    className="form-control"
                    id='username'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    style={errors.username && touched.username ? { borderColor: 'red' } : {}}
                />
                {errors.username && touched.username ? <p className='error-message'>{errors.username}</p> : ""}
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
                <MDBInput
                    type="text"
                    label='Email'
                    name='userEmail'
                    className="form-control"
                    id='userEmail'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userEmail}
                    style={errors.userEmail && touched.userEmail ? { borderColor: 'red' } : {}}
                />
                {errors.userEmail && touched.userEmail ? <p className='error-message'>{errors.userEmail}</p> : ""}
            </div>

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
                {errors.password && touched.password ? <p className='error-message'>{errors.username}</p> : ""}
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
                <MDBInput
                    type="text"
                    label='Confirm Password'
                    name='confirmPassword'
                    id='confirmPassword'
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    style={errors.confirmPassword && touched.confirmPassword ? { borderColor: 'red' } : {}}
                />
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