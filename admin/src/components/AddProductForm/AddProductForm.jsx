import React from "react";
import "./addproductform.css";
import { useRef } from "react";
import { MdUpload } from "react-icons/md";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../api/api";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";

function AddProductForm() {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const res = await api.get("/categories");
    setCategories(res.data);
  };

  const fileInputRef = useRef(null);

  const {
    getFieldProps,
    handleSubmit,
    resetForm,
    errors,
    setFieldValue,
    touched,
    values,
    isSubmitting,
  } = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      price: "",
      category: "",
      tag: "shop",
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required("Image is required"),
      title: Yup.string()
        .min(8, "Title must have atleast 8 characters")
        .required("Title is required"),
      description: Yup.string()
        .min(15, "Descripiton must have atleast 15 characters")
        .required("Description is required"),
      price: Yup.number().positive("price must contain positive numbers"),
      category: Yup.string().required("Category is required"),
      tag: Yup.string().required("tag is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const res = await api.post("/product/create", values);
      toast.success(res.data.message);
      resetForm();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFieldValue("image", reader.result);
    };
  };

  const typeOptions = ["trendy", "featured", "recent", "shop"];

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <div className="add-product-wrapper">
        <div className="add-product-form">
          <div className="form-title">
            <h4>Add Product</h4>
          </div>
          <div className="product-form">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                {values.image && (
                  <div className="image-preview">
                    <img
                      src={values.image}
                      alt="Preview"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        marginTop: "10px",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  onChange={handleImageChange}
                  id="uploadFile"
                  ref={fileInputRef}
                />
                <label htmlFor="uploadFile">
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
                  type="text"
                  className="form-control"
                  placeholder="Product Title"
                  {...getFieldProps("title")}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Product Description"
                  {...getFieldProps("description")}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  {...getFieldProps("price")}
                />
              </div>
              <div className="mb-3">
                <select {...getFieldProps("tag")} className="form-select">
                  {typeOptions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <CustomDropdown
                  options={categories}
                  onChange={(value) => setFieldValue("category", value)}
                  value={values.category}
                  placeholder={"Select Categories"}
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="add-product-btn"
              >
                {isSubmitting ? (
                  <div className="d-flex align-items-center">
                    <div
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <small style={{ paddingLeft: "5px" }}>Loading</small>
                  </div>
                ) : (
                  "Add Product"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProductForm;
