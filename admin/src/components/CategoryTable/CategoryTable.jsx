import React, { useEffect, useState } from "react";
import "./categorytable.css";
import api from "../../api/api";
import toast from 'react-hot-toast';

function CategoryTable() {
  const [categories, setCategories] = useState([]);


  const getAllCategories = async () => {
    const res = await api.get("/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);


  const handleDeleteCategory = async (id) => {
    let res = await api.delete(`/category/delete/${id}`);
    getAllCategories();
    toast.error(res.data.message)

  }


  return (
    <>
      <div className="category-table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr>
                <td>
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                    src={category.image}
                    alt=""
                  />
                </td>
                <td>{category.name}</td>
                <td>
                  <button onClick={() => handleDeleteCategory(category._id)} className="category-table-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoryTable;
