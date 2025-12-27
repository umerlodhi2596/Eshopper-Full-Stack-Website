import React from 'react'
import './loginform.css'
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom'

function LoginForm() {

    const { loginUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const { handleSubmit, handleChange, handleBlur, resetForm, touched, errors, values, status, isSubmitting, setStatus } = useFormik({
        initialValues: {
            identifier: "",
            password: "",
        },
        validationSchema: Yup.object({
            identifier: Yup.string().required("Email or username is required"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
        }),
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                const res = await loginUser(values);
                if (res.success) {
                    navigate('/');
                } else {
                    resetForm();
                    setStatus(res.message);
                }

            } catch (error) {
                console.log('Login failed', error);
                resetForm();
            } finally {
                setSubmitting(false);
            }
        }
    });

    return (
        <>
            <div className="login-wrapper">
                <div className="login-form">
                    {status &&
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <span>{status}</span>
                            <button type="button" className="btn-close" onClick={() => setStatus(null)}></button>
                        </div>
                    }
                    <div className="form-title">
                        <h2>Login</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input className='form-control' name='identifier' onChange={handleChange} onBlur={handleBlur} value={values.identifier} type="text" placeholder='Username or Email' />
                            {errors.identifier && touched.identifier && (
                                <p style={{ color: "red" }}>{errors.identifier}</p>
                            )}
                        </div>
                        <div>
                            <input className='form-control' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" placeholder='Password' />
                            {errors.password && touched.password && (
                                <p style={{ color: "red" }}>{errors.password}</p>
                            )}
                        </div>
                        <button disabled={isSubmitting} type='submit' className='form-btn'>{isSubmitting ? "Loading..." : "Login"}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm
