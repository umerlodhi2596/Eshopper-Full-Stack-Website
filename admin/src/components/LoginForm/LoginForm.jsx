import React from "react";
import "./loginform.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { loginAdmin, error } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    errors,
    values,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: Yup.object({
      identifier: Yup.string().required("This field is required"),
      password: Yup.string().min(
        8,
        "Password must contain atleast 8 characters"
      ),
    }),
    onSubmit: async (values) => {
      let res = await loginAdmin(values);
      if (res?.success) {
        navigate("/add-product");
      }
      resetForm();
    },
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="login-form-wrapper">
            <div className="col-md-4">
              <div className="login-form">
                <div className="login-form-title">
                  <h3>
                    <span>E</span>Shopper
                  </h3>
                  <h5>Admin Login</h5>
                </div>
                {error && (
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    {error}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username or Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.identifier}
                      name="identifier"
                    />
                    {errors.identifier && touched.identifier && (
                      <p className="input-error">{errors.identifier}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      name="password"
                    />
                    {errors.password && touched.password && (
                      <p className="input-error">{errors.password}</p>
                    )}
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="form-btn"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          className="spinner-border spinner-border-sm text-light"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <small style={{ paddingLeft: "6px" }}>Loading</small>
                      </div>
                    ) : (
                      "Login"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
