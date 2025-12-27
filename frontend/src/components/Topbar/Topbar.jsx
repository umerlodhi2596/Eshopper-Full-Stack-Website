import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaSearch,
  FaHeart,
  FaShoppingCart
} from "react-icons/fa"
import { CartContext } from '../../context/CartProvider'
import { useContext } from 'react'

function Topbar() {

  const {cart} = useContext(CartContext);

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="topbar d-none d-lg-block">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="top-bar-icons">
              <ul>
                <li><a href="#"><FaFacebookF /></a></li>
                <li><a href="#"><FaTwitter /></a></li>
                <li><a href="#"><FaLinkedinIn /></a></li>
                <li><a href="#"><FaYoutube /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="nav-top">
        <div className="container">
          <div className="row align-items-center">

            {/* LOGO (hidden below 992px) */}
            <div className="col-lg-3 d-none d-lg-block">
              <div className="nav-logo">
                <h3><span>E</span>Shopper</h3>
              </div>
            </div>

            {/* SEARCH */}
            <div className="col-lg-6 col-7">
              <div className="nav-search">
                <div className="search">
                  <input type="text" placeholder="Search For Products" />
                  <div className="search-icon">
                    <FaSearch />
                  </div>
                </div>
              </div>
            </div>

            {/* ICONS */}
            <div className="col-lg-3 col-5">
              <div className="nav-right">
                <div className="nav-icon">
                  <FaHeart style={{color: '#D19C97'}}/>
                  <span>0</span>
                </div>
                <Link to={'/cart'} className="nav-icon">
                  <FaShoppingCart style={{color: '#D19C97'}}/>
                  <span>{cart.length}</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
