import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { CategoryContext } from "../../context/CategoryProvider";

import "./navbar.css";

function Navbar() {
  const { isAuthenticated, user, logoutUser } = useContext(AuthContext);

  const { categories } = useContext(CategoryContext);

  let [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="navbar-wrapper">
        <div className="container">
          <div className="row flex">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="categories-dropdown">
                <div className="dropdown">
                  <div
                    onClick={() => setDropdown(!dropdown)}
                    className="dropdown-title flex"
                  >
                    <h5>Categories</h5>
                    <IoIosArrowDown />
                  </div>
                  <div className={`menu ${dropdown ? "open" : ""}`}>
                    <ul>
                      {categories.map((category, index) => (
                        <li key={index}>
                          <a href="#">{category.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                  <span>E</span> Shopper
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/shop">
                        Shop
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Pages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mb-show" href="#">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mb-show" href="#">
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-right">
                  {isAuthenticated ? (
                    <div className="current-user-info">
                      <div className="user-info-inner">
                        <h6>{user.username}</h6>
                        <button onClick={logoutUser}>Logout</button>
                      </div>
                    </div>
                  ) : (
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink to="/login" className="nav-link">
                          Login
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/signup" className="nav-link">
                          Register
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
