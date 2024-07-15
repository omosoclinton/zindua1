import * as yup from 'yup';

let passwordRegEx = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[A-Z])(?=.*[a-z]).+$/;

export const userFormSchema =yup.object().shape({
    email: yup.string().email("Not a valid Email").required("Required"),
    age: yup.number("Must be a number").positive("Invalid Age"),
    password: yup.string().min(8).matches(passwordRegEx, {message: 'Invalid Password'}).required("required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Must match password").required('required')
});

export const studentFormSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Not a valid email").required("required"),
    age: yup.number("Must be a number").positive("Invalid Age"),
    course: yup.string().required("required"),
    county: yup.string().required("required")
})