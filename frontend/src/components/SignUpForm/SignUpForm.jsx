import React from 'react'
import './signupform.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import api from '../../api/api'
import {Link} from 'react-router-dom'

function SignUpForm() {

    const { handleChange, handleBlur, handleSubmit, errors, values, touched, resetForm, setStatus, setSubmitting, isSubmitting, status } = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().min(6, "Username must be atleast 8 characters").required("Username is required"),
            email: Yup.string().email("Invalid Email You Entered").required("Email is required"),
            password: Yup.string().min(8, "Password must have atleast 8 characters")
        }),
        onSubmit: async (values) => {
            try {
                let res = await api.post('/signup', values);
                resetForm(); // now this works
                setStatus(res.data);
            } catch (error) {
                console.log(error || "something went wrong")
            } finally {
                setSubmitting(false);
            }
        }
    })

    return (
        <>
            <div className="signup-wrapper">
                <div className="signup-form">
                    <div className="form-title">
                        <h2>SignUp</h2>
                    </div>
                    {
                        status &&  <div className={`${status.success ? 'alert alert-success': 'alert alert-danger'}`} role="alert">
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='m-0'>{status.message}</p>
                                <Link style={{color: "green"}} to={'/login'}>Login Now</Link>
                            </div>
                        </div>
                    }
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input className='form-control' name='username' value={values.username} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Your Username' />
                            {errors.username && touched.email && <p style={{ color: 'red' }}>{errors.username}</p>}
                        </div>
                        <div>
                            <input className='form-control' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder='Your Email' />
                            {errors.email && touched.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>
                        <div>
                            <input className='form-control' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" placeholder='Your Password' />
                            {errors.password && touched.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        </div>
                        <button type='submit' className='form-btn'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpForm
