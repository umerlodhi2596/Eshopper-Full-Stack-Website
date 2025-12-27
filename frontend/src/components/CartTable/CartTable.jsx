import React from "react";
import "./carttable.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { FaShoppingCart } from "react-icons/fa";

function CartTable() {
  const { cart, removeFromCart, increamentCartQuantity, decreamentCartQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <>
      <div className="cart-table section-space">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((cartItem) => (
                <tr>
                  <td>
                    <div className="product-info">
                      <img src={cartItem.item.image} alt="" />
                      <h5>{cartItem.item.title}</h5>
                    </div>
                  </td>
                  <td>{cartItem.item.price}</td>
                  <td>
                    <button onClick={() => increamentCartQuantity(cartItem.item._id)} className="quantity-btn">+</button>
                    <span className="quantity-count">{cartItem.quantity}</span>
                    <button onClick={() => decreamentCartQuantity(cartItem.item._id)} className="quantity-btn">-</button>
                  </td>
                  <td>{cartItem.item.price * cartItem.quantity}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveFromCart(cartItem.item._id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  <div className="empty-cart">
                    <FaShoppingCart className="cart-icon"/>
                    <h3>Your Cart is Empty</h3>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CartTable;
