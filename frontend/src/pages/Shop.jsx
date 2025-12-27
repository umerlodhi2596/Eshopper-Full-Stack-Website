import React, { useEffect, useState } from "react";
import PageIntro from "../components/PageIntro/PageIntro";
import PriceFilter from "../components/PriceFilter/PriceFilter";
import ProductCard from "../components/ProductCard/ProductCard";
import { FaSearch } from "react-icons/fa";
import api from "../api/api";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import PageLoader from "../components/PageLoader/PageLoader";

function Shop() {
  let [loading, setLoading] = useState(true);
  console.log(loading);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  console.log(sort);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(6);

  let [products, setProducts] = useState([]);

  let [price, setPrice] = useState(null);

  let [search, setSearch] = useState("");

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  const [searchParams] = useSearchParams();

  const slug = searchParams.get("slug");

  const getAllProducts = async () => {
    try {
      const query = new URLSearchParams();

      if (slug) {
        query.append("slug", slug);
      }

      if (search.trim() !== "") {
        query.append("search", search);
      }

      if (price?.min !== undefined && price?.max !== undefined) {
        query.append("minPrice", price.min);
        query.append("maxPrice", price.max);
      }

      if (sort) {
        query.append("sort", sort);
      }

      query.append("page", page);
      query.append("limit", limit);

      const res = await api.get(`/products?${query.toString()}`);

      setProducts(res.data.products);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let searchDelay = setTimeout(() => {
      getAllProducts();
    }, 500);
    return () => clearTimeout(searchDelay);
  }, [price, slug, search, sort]);

  useEffect(() => {
    getAllProducts();
  }, [page, limit]); // only page & limit, no debounce needed


  return (
    <>
      <PageIntro pageTitle={"Our Shop"} page={"Shop"} />
      <div className="shop-wrapper section-space">
        <div className="container">
          <div className="row">
            <PriceFilter setPrice={setPrice} />
            <div className="col-md-9">
              <div className="shop-inner flex pb-4">
                <div className="shop-left-col">
                  <div className="shop-search">
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      placeholder="Search by name"
                    />
                  </div>
                </div>
                <div className="shop-right-col">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Showing
                    </button>
                    <ul className="dropdown-menu">
                      {[6, 9, 12].map((item) => (
                        <li key={item}>
                          <button
                            onClick={() => {
                              setLimit(item);
                              setPage(1);
                            }}
                            className="dropdown-item"
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {sort !== "" ? sort : "Sort By"}
                    </button>
                    <ul className="dropdown-menu">
                      {["Ascending", "Descending"].map((item) => (
                        <li>
                          <button
                            onClick={() => {
                              setSort(item);
                              setPage(1);
                            }}
                            className="dropdown-item"
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                {loading ? <PageLoader /> : products.map((product, index) => (
                  <div key={index} className="col-md-4">
                    <ProductCard product={product} />
                  </div>
                ))}
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  previousLabel="<"
                  pageCount={totalPages}
                  onPageChange={handlePageClick}
                  containerClassName="pagination"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  activeClassName="active"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
