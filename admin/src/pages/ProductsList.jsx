import React, { useEffect, useState } from "react";
import api from "../api/api";

function ProductsList() {
  let [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="product-list-wrapper">
        <div className="product-list-table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr>
                  <th>
                    <div className="product-info">
                      <img src={product.image} alt={product.title} />
                      <h5 className="product-title">{product.title}</h5>
                    </div>
                  </th>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className="me-2">View Detail</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
