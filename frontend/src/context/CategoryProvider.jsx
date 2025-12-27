import React, { useState, useEffect } from "react";
import { createContext } from "react";
import api from "../api/api";
export const CategoryContext = createContext();

function CategoryProvider({children}) {
  let [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    let res = await api.get("/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <CategoryContext.Provider value={{categories}}>
        {children}
      </CategoryContext.Provider>
    </>
  );
}

export default CategoryProvider;
