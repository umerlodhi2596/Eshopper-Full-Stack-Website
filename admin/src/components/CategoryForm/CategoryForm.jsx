import React from "react";
import "./categoryform.css";
import api from "../../api/api";
import { MdUpload } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

function CategoryForm() {
  const {
    getFieldProps,
    handleSubmit,
    resetForm,
    touched,
    setFieldValue,
    errors,
    isSubmitting,
    values,
  } = useFormik({
    initialValues: {
      image: "",
      name: "",
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Image is required"),
      name: Yup.string().min(
        5,
        "Category name must contain atleast 5 characters"
      ),
    }),
    onSubmit: async (values) => {
      const res = await api.post("/category/new", values);
      toast.success(res.data.message);
      resetForm();
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFieldValue("image", reader.result);
    };
  };

  return (
    <>
      <div className="form-wrapper">
        <div className="category-form">
          <h4 className="form-title">Add Category</h4>
          <form onSubmit={handleSubmit}>
            {values.image && (
              <div className="image-preview mb-3">
                <img
                  src={values.image}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                  alt={values.name}
                />
                {errors.image && touched.image && (
                  <small style={{ color: "red" }}>{errors.image}</small>
                )}
              </div>
            )}
            <div className="mb-3">
              <input type="file" id="uploadfile" onChange={handleImageChange} />
              <label htmlFor="uploadfile">
                <MdUpload
                  style={{
                    color: "#000",
                    fontSize: "25px",
                    marginRight: "5px",
                  }}
                />
                Upload Image
              </label>
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Category Name"
                {...getFieldProps("name")}
              />
              {errors.name && touched.name && (
                <small style={{ color: "red" }}>{errors.name}</small>
              )}
            </div>
            <button disabled={isSubmitting} type="submit" className="form-btn">
              {isSubmitting ? (
                <div className="d-flex align-items-center">
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <small className="ms-2">Loading</small>
                </div>
              ) : (
                "Add Category"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CategoryForm;
