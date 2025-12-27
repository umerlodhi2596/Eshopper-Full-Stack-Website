import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import ProtectedRoute from "./pages/ProtectedRoute";
import DashboardLayout from "./pages/DashboardLayout";
import ProductsList from "./pages/ProductsList";
import AddCategory from "./pages/AddCategory";
import CategoryList from "./pages/CategoryList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            removeDelay: 1000,
          }}
        />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AddProduct />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/all-products"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ProductsList />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-category"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AddCategory />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/all-categories"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <CategoryList />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
