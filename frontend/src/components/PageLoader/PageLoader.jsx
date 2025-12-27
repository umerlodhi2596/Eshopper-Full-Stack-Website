import React from "react";
import "./pageloader.css";

function PageLoader() {
  return (
    <>
      <div className="page-loader">
        <div class="spinner-border " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default PageLoader;
