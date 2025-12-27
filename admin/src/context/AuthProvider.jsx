import React, { useState, useEffect } from "react";
import { createContext } from "react";
import api from "../api/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);
  let [isAdmin, setIsAdmin] = useState(false);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");

  const loginAdmin = async (values) => {
    try {
      let res = await api.post("/login", values);
      if (res.data.success) {
        await getCurrentUser();
      }

      return res.data;
    } catch (error) {
      console.log(error || "something went wrong");
    }
  };

  const getCurrentUser = async () => {
    try {
      let res = await api.get("/me");
      if (res.data.role === "admin") {
        setUser(res.data);
        setIsAdmin(true);
      } else {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      setUser(null);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{
        user,
        isAdmin,
        loading,
        error,
        loginAdmin,
      }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
