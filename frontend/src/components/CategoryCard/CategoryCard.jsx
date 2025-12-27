import React from "react";
import "./categorycard.css";
import { Link } from "react-router-dom";

function CategoryCard({ image, title, slug }) {

  return (
    <>
      <Link to={`/shop?slug=${slug}`} className="col-md-4">
        <div className="category-card">
          <div className="category-products">
            <p>15 Products</p>
          </div>
          <div className="category-image">
            <img src={image} alt="" />
          </div>
          <div className="category-body">
            <h4 className="category-title">{title}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CategoryCard;
