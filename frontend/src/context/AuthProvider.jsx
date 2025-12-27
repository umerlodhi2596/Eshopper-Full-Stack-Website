import React, { useState, useEffect } from "react";
import { createContext } from "react";
import api from "../api/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);
  let [isAuthenticated, setIsAuthenticated] = useState(null);

  const loginUser = async (values) => {
    try {
      let response = await api.post("/login", values);
      if (response.data.success) {
        await getCurrentUser();
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return { success: false, message: "Login Failed" };
    }
  };

  const getCurrentUser = async () => {
    try {
      let res = await api.get("/me");

      if (res.data.role !== "user") {
        setUser(null);
        setIsAuthenticated(false);
        return;
      }

      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      await api.post("/logout");
    } catch (error) {
      console.log(error || "logout user error");
    } finally {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ loginUser, isAuthenticated, user, logoutUser }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
