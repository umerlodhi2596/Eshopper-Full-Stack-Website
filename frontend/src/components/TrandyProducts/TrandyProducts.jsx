import React, { useEffect, useState } from "react";
import "./trandyproducts.css";
import Title from "../Title/Title";
import ProductCard from "../ProductCard/ProductCard";
import api from "../../api/api";

function TrandyProducts() {
  const [trandyProducts, setTrandyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTrandyProducts = async () => {
    try {
      let res = await api.get("/products/trandy");
      setTrandyProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getTrandyProducts();
  }, []);

  return (
    <>
      <div className="trandy-products-wrapper section-space-bottom">
        <div className="container">
          <div className="trandy-products-title">
            <Title title={"Trandy Products"} />
          </div>
          <div className="row">
            {trandyProducts.map((product, index) => (
              <div key={index} className="col-md-3">
                <ProductCard product={product}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TrandyProducts;
