import React from 'react'
import './sidebar.css'
import { BiMessageSquareAdd } from "react-icons/bi";
import { TiThListOutline } from "react-icons/ti";
import { BsBoxSeamFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div className="side-bar">
        <div className="side-bar-links">
          <ul>
            <li><NavLink to={'/'}><BiMessageSquareAdd className='side-bar-icon'/>Add Product</NavLink></li>
            <li><NavLink to={'/all-products'}><TiThListOutline className='side-bar-icon'/>Products List</NavLink></li>
            <li><NavLink to={'/add-category'}><BiMessageSquareAdd className='side-bar-icon'/>Add Category</NavLink></li>
            <li><NavLink to={'/all-categories'}><TiThListOutline className='side-bar-icon'/>Category List</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
