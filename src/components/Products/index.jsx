import "./products.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ToTopIcon from "../ToTopIcon/index";
import { BsSearch, BsXLg } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../ReduxToolKit/slices/cartSlice";
import { addItemToWish } from "../../ReduxToolKit/slices/addWishSlice";
import noResults from "../../assets/searching-data.svg";
import Rating from "@mui/material/Rating";
import { getDataAsync } from "../../ReduxToolKit/slices/getDataSlice";
import ReactPaginate from "react-paginate";

const Products = () => {
  // liked product
  const dispatch = useDispatch();
  const [neWdata, setNewData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  // GET PRODUCTS OF DATA FROM SLICE
  const { productData, loading, error } = useSelector((val) => val.data);

  // AAD ITEM TO WISHES
  const handleWish = (item) => {
    dispatch(addItemToWish(item));
  };
  // ADD ITEM TO CART
  const handleToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  // DISPATCH ACTION TO GET DATA
  useEffect(() => {
    dispatch(getDataAsync());
    setNewData(productData);
  }, [dispatch]);

  // FILTERATION DATA ON SEARCH
  useEffect(() => {
    if (searchVal) {
      const filterdData = productData.filter((el, ind) => {
        return el.title.toLowerCase().includes(searchVal.toLowerCase());
      });
      setNewData(filterdData);
    } else {
      setNewData(productData);
    }
  }, [searchVal]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of items per page

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * itemsPerPage; // Index of the first item on the current page
  const currentPageItems = neWdata.slice(offset, offset + itemsPerPage); // Items on the current page

  // SHOW SPINNER ON LOADING
  if (loading) {
    return (
      <div className="Spinner_parent ">
        <Spinner animation="border" variant="danger" className="spinner" />
      </div>
    );
  }

  // SHOW IMAGE IF NO DATA
  const emptyCart = () => {
    return (
      <div className="text-center">
        <img src={noResults} alt="img" width="50%" />
      </div>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <div id="search-wrapper">
              <BsXLg
                className="search-icon fas fa-search"
                onClick={() => setSearchVal("")}
              ></BsXLg>
              <input
                type="text"
                id="search"
                placeholder="search..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <button id="search-button">
                <BsSearch className="search-icon fas fa-search text-light"></BsSearch>
              </button>
            </div>
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around gy-5">
            {/* EMPTY IMAGE  */}
            {neWdata && !loading && !error
              ? !neWdata.length && emptyCart()
              : true}
            {/* PAGINATION  */}
            {!error && !loading ? (
              <div className="text-center border">
                <ReactPaginate
                  nextLabel="next >"
                  previousLabel="< previous"
                  pageCount={Math.ceil(neWdata.length / itemsPerPage)} // Total number of pages
                  onPageChange={handlePageClick} // Callback function to handle page clicks
                  forcePage={currentPage} // Current active page
                  containerClassName={"pagination"} // CSS class for the pagination container
                  activeClassName={"activeNav"} // CSS class for the active page
                />
              </div>
            ) : (
              true
            )}

            {!error && !loading ? (
              currentPageItems.map((d) => {
                return (
                  <div className="col-md-4 " key={d.id}>
                    <div className="product-card ">
                      <div className="card">
                        <div className="card-image">
                          <span className="price_card">{d.price} $</span>
                          <img
                            src={d.image}
                            alt="product-img"
                            className="card-img-top"
                            style={{ height: "200px" }}
                          />
                          <span className="card-title">
                            <span>{d.category}</span>
                          </span>
                        </div>
                        <ul className="card-action-buttons">
                          <li>
                            <div
                              href="https://www.facebook.com/sharer/sharer.php?u=https://unrivaled-otter-0d293c.netlify.app/"
                              target="_blank"
                            >
                              <i className="material-icons shareIcon text-dark">
                                share
                              </i>
                            </div>
                          </li>
                          <li>
                            <div onClick={() => handleWish(d)}>
                              <i className="material-icons like heartIcon">
                                favorite_border
                              </i>
                            </div>
                          </li>
                          <li>
                            <div id="buy" onClick={() => handleToCart(d)}>
                              <i className="material-icons buy addIcon">
                                add_shopping_cart
                              </i>
                            </div>
                          </li>
                        </ul>
                        <div className="card-content">
                          <div className="row">
                            <div className="col">
                              <p
                                style={{
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                  overflow: "hidden",
                                }}
                              >
                                <strong>Description:</strong> <br />
                                {d.title}
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <Rating
                                name="read-only"
                                value={d.rating.rate}
                                readOnly
                              />
                            </div>
                            <div className="col-12">
                              {d.rating.count ? (
                                <div className="text-success">
                                  In Stock ({d.rating.count})
                                </div>
                              ) : (
                                <div className="text-danger">Out Of Stock</div>
                              )}
                              <div className="see-more">
                                <NavLink to={`/products/${d.id}`}>
                                  More details
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h5 className="text-danger">{error}!</h5>
            )}
          </div>
        </div>
      </div>
      <ToTopIcon></ToTopIcon>
    </>
  );
};
export default Products;
