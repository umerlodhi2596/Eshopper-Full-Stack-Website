import React from "react";
import PageIntro from "../components/PageIntro/PageIntro";
import CartTable from "../components/CartTable/CartTable";
import SummaryCard from "../components/SummaryCard/SummaryCard";


function Cart() {
  return (
    <>
      <div className="cart-wrapper">
        <PageIntro pageTitle={"Cart"} page={"cart"} />
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <CartTable/>
            </div>
            <div className="col-md-3">
              <SummaryCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
