import React, { useState, useEffect } from "react";
import { createContext } from "react";
import api from "../api/api";
export const CategoryContext = createContext();

function CategoryProvider({children}) {

  let [loading, setLoading] = useState(true);
  let [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      let res = await api.get("/categories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <CategoryContext.Provider value={{categories, loading}}>
        {children}
      </CategoryContext.Provider>
    </>
  );
}

export default CategoryProvider;
