import React from 'react'
import './productcard.css'
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../context/CartProvider';
import {toast} from 'react-hot-toast'
import { Link } from 'react-router-dom';

function ProductCard({product}) {

    const {addToCart} = useContext(CartContext);

    const handleCartClick = (product) => {
        addToCart(product);
        toast.success("Product Added To Cart")
    }

    return (
        <>
            <div className="product-card">
                <div className="card-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="card-content">
                    <h5>{product.title}</h5>
                    <p>PKR: {product.price}</p>
                </div>
                <div className="card-footer">
                    <div className="card-footer-inner">
                        <button><Link to={`/product/${product._id}`}><FaEye className='footer-icon' /> View Detail</Link></button>
                        <button onClick={() => handleCartClick(product)}><FaShoppingCart className='footer-icon' /> Add To Card</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
