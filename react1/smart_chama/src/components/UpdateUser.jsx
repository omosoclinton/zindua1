import React from "react";
import { useFormik } from "formik";
import NavBar from "./NavBar";
import { updateSchema } from "../schema";
import app from "../firebaseconfig";
import { getDatabase, ref, set, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateAccount = () => {
    const location = useLocation();
    const user = location.state;
    const navigate = useNavigate();
    console.log(location)
    
    const onSubmit = async (values) => {
        const db = getDatabase(app);
        
        // This will update the existing user data
        const userRef = ref(db, `smartchama/users/${user.username}/${user.userId}`);
       console.log(values.userImg)
        set(userRef, {
            username: values.username,
            password: values.password,
            userFullName: values.userFullName,
            userIdNumber: values.userIdNumber,
            userEmail: values.userEmail,
            userImg: values.userImg
        }).then(() => {
            alert("Data Updated");
            navigate("/userpage"); // Navigate to another page after successful update
        }).catch((err) => {
            console.log(err);
            alert("Error updating");
        });

        resetForm();
    };

    const { values, errors, handleChange, handleBlur, handleSubmit, touched, resetForm } = useFormik({
        initialValues: {
            username: user.username,
            password: user.password,
            userFullName: user.userFullName,
            userIdNumber: user.userIdNumber,
            userEmail: user.userEmail,
            userImg: user.userImg
        },
        validationSchema: updateSchema,
        onSubmit
    });

    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit} className="card">
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
                        type="email"
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
                        label='Image Link'
                        name='userImg'
                        id='userImg'
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userImg}
                        style={errors.userImg && touched.userImg ? { borderColor: 'red' } : {}}
                    />
                    {errors.userImg && touched.userImg ? <p className='error-message'>{errors.userImg}</p> : ""}
                </div>
                <Link type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">
                    Update
                </Link>
            </form>
        </>
    );
};

export default UpdateAccount;
