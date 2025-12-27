import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import PageLoader from "../components/PageLoader/PageLoader";

function ProductDetail() {
  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      let res = await api.get(`/product/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="product-detail-wrapper">
          <div className="container">
            <div className="product-detail-inner">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-md-6">
                  <div className="product-image">
                    <img src={product.image} alt="" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="product-detail">
                    <h2>{product.title}</h2>
                    <div className="product-content">
                      <h5 className="product-description">
                        {product.description}
                      </h5>
                      <h5 className="product-price">
                        <strong>Price: </strong>
                        {product.price} PKR
                      </h5>
                    </div>
                    <div className="product-detail-btn">
                      <button className="me-3">Buy Now</button>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
