import * as yup from 'yup';

let passwordRegEx = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[A-Z])(?=.*[a-z]).+$/;

export const houseFormSchema = yup.object().shape({
    size: yup.string().required('required').min(3, "Min 3 characters"),
    house_name: yup.string().required('required').min(3, "Min 3 characters"),
    location: yup.string().required('required').min(3, "Min 3 characters"),
    description: yup.string().required('required'),
    price: yup.number().required('required').positive('required'),
    image_url: yup.string().required('required')
})

export const loginSchema =yup.object().shape({
    username: yup.string().required("Required"),
    password: yup.string().min(8).matches(passwordRegEx, {message: 'Invalid Password'}).required("required"),
});

export const registerSchema = yup.object().shape({
    username: yup.string().required("Required"),
    password: yup.string().min(8).matches(passwordRegEx, {message: 'Invalid Password'}).required("required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Must match password").required('required')
})