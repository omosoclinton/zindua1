import * as yup from 'yup';

export const houseFormSchema = yup.object().shape({
    size: yup.string().required('required').min(3, "Min 3 characters"),
    location: yup.string().required('required').min(3, "Min 3 characters"),
    description: yup.string().required('required'),
    price: yup.number().required('required').positive('required'),
    image_url: yup.string().required('required')


})