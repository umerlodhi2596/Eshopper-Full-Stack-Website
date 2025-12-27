import React from "react";
import "./pricefilter.css";

function PriceFilter({ setPrice }) {
  const priceRange = [
    { id: 1, label: "All Prices" },
    { id: 2, label: "$500 - 1000", min: 500, max: 1000 },
    { id: 3, label: "$100 - 200", min: 800, max: 1800 },
    { id: 4, label: "$200 - 300", min: 1000, max: 2000 },
    { id: 5, label: "$300 - 400", min: 2000, max: 2500 },
  ];

  const sizes = [
    { id: 1, label: "All Sizes" },
    { id: 2, label: "S" },
    { id: 3, label: "M" },
    { id: 4, label: "L" },
    { id: 5, label: "XL" },
  ];

  return (
    <>
      <div className="col-md-3">
        <div className="price-filter">
          <h3>Filter by price</h3>
          {priceRange.map((item) => (
            <div key={item.id} className="filter-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setPrice(item); // apply filter
                  } else {
                    setPrice(null); // remove filter → bring all products back
                  }
                }}
              />
              <label htmlFor="">{item.label}</label>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="size-filter">
              <h3>Filter by size</h3>
              {sizes.map((item) => (
                <div key={item.id} className="filter-item">
                  <input type="checkbox" />
                  <label htmlFor="">{item.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceFilter;
