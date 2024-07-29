import * as yup from 'yup';
let passwordRegEx = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[A-Z])(?=.*[a-z]).+$/;

export const loginSchema = yup.object().shape({
    username: yup.string().required("Required field"),
    password: yup.string().min(8).matches(passwordRegEx, {message:'Invalid Password'}).required("Required field")
})

export const registerSchema = yup.object().shape({
    userFullName: yup.string().required("required field"),
    userIdNumber : yup.number().required("required"),
    userEmail: yup.string().required("Required"),
    username: yup.string().required("Required field"),
    password: yup.string().min(8).matches(passwordRegEx, {message:'Invalid Password'}).required("Required field"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Must match password").required("Required Field")
})

export const updateSchema = yup.object().shape({
    userFullName: yup.string(),
    userEmail: yup.string(),
    username: yup.string(),
    password: yup.string().min(8).matches(passwordRegEx, {message:'Invalid Password'}),
    userImg: yup.string()

})