import React from "react";
import { useFormik } from "formik";
import { houseFormSchema } from "../schema";
const Form = () => {
    const onSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Submitted')
        setSubmitting(false)
        resetForm()
    }
    const { handleChange, handleSubmit, handleBlur, setSubmitting, values, errors, isSubmitting, touched } = useFormik({
        initialValues: {
            price: '',
            price: '',
            location: '',
            description: '',
            image_url: ''

        },
        houseFormSchema,
        onSubmit
    })
    return (
        <>
            <div className="container">
                <form className="card" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label for="size" className="form-label">Size</label>
                            <input
                                type="text"
                                name='size'
                                className="form-control"
                                id="size"
                                placeholder="size"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.size}
                                style={errors.size && touched.size ? { borderColor: "red" } : {}}
                            />
                            {errors.size && touched.size ? <p className="error-message">{errors.size}</p> : ""}
                        </div>
                        <div className="form-group col-md-6">
                            <label for="exampleInputPassword1" className="form-label">Price</label>
                            <input
                                type="text"
                                name='price'
                                className="form-control"
                                id="price"
                                placeholder="Price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                                style={errors.price && touched.price ? { borderColor: "red" } : {}}
                            />
                            {errors.price && touched.price ? <p className="error-message">{errors.price}</p> : ""}
                        </div>
                        <div className="form-group col-md-6">
                            <label for="exampleInputPassword1" className="form-label">Location</label>
                            <input
                                type="text"
                                name='location'
                                className="form-control"
                                id="location"
                                placeholder="Location"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.location}
                                style={errors.location && touched.location ? { borderColor: "red" } : {}}
                            />
                            {errors.location && touched.location ? <p className="error-message">{errors.location}</p> : ""}
                        </div>
                        <div className="form-group col-md-6">
                            <label for="exampleInputPassword1" className="form-label">Image URL</label>
                            <input
                                type="text"
                                name='image_url'
                                className="form-control"
                                id="image_url"
                                placeholder="Image URL"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.image_url}
                                style={errors.image_url && touched.image_url ? { borderColor: "red" } : {}}
                            />
                            {errors.image_url && touched.image_url ? <p className="error-message">{errors.image_url}</p> : ""}
                        </div>
                        <div className="form-group col-md-6">
                            <label for="exampleInputPassword1" className="form-label">House Description</label>
                            <textarea
                                type="text"
                                name='description'
                                className="form-control"
                                id="description"
                                placeholder="First Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                                style={errors.description && touched.description ? { borderColor: "red" } : {}}
                            ></textarea>
                            {errors.description && touched.description ? <p className="error-message">{errors.description}</p> : ""}
                        </div>

                    </div>
                    <button disabled={isSubmitting} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form