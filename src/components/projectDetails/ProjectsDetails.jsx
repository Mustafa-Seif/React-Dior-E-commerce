import React from "react";
import "./productDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { addItemToCart } from "../../ReduxToolKit/slices/cartSlice";
import { deleteItemFromCart } from "../../ReduxToolKit/slices/cartSlice";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import Rating from "@mui/material/Rating";
import { getDataAsyncById } from "../../ReduxToolKit/slices/getDataByIdSlice";
import { getDataAsync } from "../../ReduxToolKit/slices/getDataSlice";

const ProjectsDetails = () => {
  const proId = useParams();
  const [productsFilter, seTproductsFilter] = useState([]);
  const [cartBtn, setcartBtn] = useState("Add To The Cart");
  const dispatch = useDispatch();

  // GET PRODUCTS OF DATA FROM SLICE
  const { productData, loading, error } = useSelector((val) => val.data);
  // GET PRODUCTS DETAILS OF DATA FROM SLICE
  const { productDataById, loadingById, errorById } = useSelector(
    (val) => val.dataById
  );


  useEffect(() => {
    // if (productData.find((val) => val.id === proId) === undefined) {
    //   setcartBtn("Add To The Cart");
    //    dispatch(addItemToCart(val));
    //  }else{
    //    setcartBtn("Remove From The Cart");
    //    dispatch(deleteItemFromCart(val));
    //  }
  // GET PRODUCT DETAILS
    dispatch(getDataAsyncById(proId));
  // GET All PRODUCTS
    dispatch(getDataAsync());
 
    getRelated();
  }, [dispatch,proId]);

  // GET RELATED DATA BY CATEGORY
  const getRelated = () => {
    const FilterPro = productData.filter((el) => {
      return el.category === productDataById.category ;
    });
    seTproductsFilter(FilterPro);
  };

  // ADD TO CART HANDLE
  const handleCart = (pro) => {
    if (cartBtn === "Add To The Cart") {
      setcartBtn("Remove From The Cart");
      dispatch(addItemToCart(pro));
    }else{
      setcartBtn("Add To The Cart");
      dispatch(deleteItemFromCart(pro));
    }
};

  if (loadingById) {
    return (
      <div className="Spinner_parent">
        <Spinner animation="border" variant="danger" className="spinner" />
      </div>
    );
  }

  return (
    <div className="container my-5">
      { !loading && !error ?  <div className="row details-snippet1">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-2 mini-preview">
              <img
                className="img-fluid"
                src={productDataById.image}
                alt="Preview"
              />
              <img
                className="img-fluid"
                src={productDataById.image}
                alt="Preview"
              />
              <img
                className="img-fluid"
                src={productDataById.image}
                alt="Preview"
              />
            </div>
            <div className="col-md-10">
              <div className="product-image mb-3">
                <Zoom>
                  <img
                    className="img-fluid "
                    style={{ height: "450px" }}
                    src={productDataById.image}
                    alt={productDataById.description}
                  />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="category">
            <span className="theme-text">Category:</span>{" "}
            {productDataById.category}
          </div>
          <div className="title">{productDataById.title}</div>
          <div className="ratings my-2">
            <div className="stars d-flex">
              <div className="theme-text mr-2">Product Ratings: </div>
              <Rating
                name="read-only"
                value={productDataById.rating.rate}
                readOnly
              />
              <div className="ml-2">({productDataById.rating.rate}) </div>
            </div>
          </div>
          <div className="price my-2">
            ${productDataById.price}{" "}
            <strike className="original-price">$120.00</strike>
          </div>
          <div className="theme-text subtitle">Brief Description:</div>
          <div className="brief-description">{productDataById.description}</div>
          <div>
            <div className="subtitle my-3 theme-text">Colors:</div>
            <div className="select-colors d-flex">
              <div className="color red"></div>
              <div className="color silver"></div>
              <div className="color black"></div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <button
                onClick={() => handleCart(productDataById)}
                className="btn addBtn "
              >
                {cartBtn}
              </button>
            </div>
          </div>
        </div>
      </div> : <h5 className="text-danger">Failed to fetch!</h5>}

      <div className="additional-details my-5 text-center">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-tabs">
            <a
              className="nav-link active"
              data-toggle="tab"
              data-bs-toggle="tab"
              href="#home"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              data-bs-toggle="tab"
              href="#menu1"
            >
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              data-bs-toggle="tab"
              href="#menu2"
            >
              Specifications
            </a>
          </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div className="tab-content mt-4 mb-3">
          <div className="tab-pane container active" id="home">
            <div className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident magni assumenda consectetur facere eius. Minus
              reprehenderit placeat ullam vel ab eaque sequi impedit, ipsum
              soluta temporibus fugit ipsa. Dolor libero modi molestiae dicta,
              vitae minus laborum error cum consequatur autem minima eveniet
              porro obcaecati quibusdam possimus eos, debitis sint magnam,
              explicabo accusantium aspernatur ipsa repellat tempore nihil. Cum
              placeat voluptate dignissimos dicta harum consectetur, nemo
              debitis tempore. Quod culpa perspiciatis unde natus. Modi
              expedita, ab repellendus reiciendis sed voluptate, culpa laborum
              ad, consectetur quas tempora quo? Quibusdam doloribus magnam
              maxime, accusamus officiis odit reiciendis labore laudantium.
              Molestiae corporis temporibus ad?
            </div>
          </div>
          <div className="tab-pane container fade" id="menu1">
            <div className="review">
              <p>PUT REVIEWS DESIGN HERE</p>
            </div>
          </div>
          <div className="tab-pane container fade" id="menu2">
            <div className="specification">
              <p>PUT SPECIFICATIONS HERE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="related-products details-snippet1">
        <div className="related-heading theme-text mb-5">Related Products</div>
        <div className="row gx-y">
          {loading ?(
            <div className="Spinner_parent">
              <Spinner
                animation="border"
                variant="danger"
                className="spinner"
              />
            </div>
          ):true}
          {!loading&& !error ?(
            productsFilter.map((item) => {
              return (
                <div className="col-md-3 gy-4  text-center" key={item.id}>
                  <div className="related-product">
                    <img
                      className="img-fluid"
                      src={item.image}
                      alt="Related Product"
                      style={{ height: "200px", marginBottom: "1rem" }}
                    />
                  </div>
                  <div
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      height: "50px",
                      overflow: "hidden",
                    }}
                  >
                    <NavLink
                      to={`/products/${item.id}`}
                      style={{ textDecoration: "none", color: "#000" }}
                      className="related-title"
                    >
                      {item.title}
                    </NavLink>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Rating
                      name="read-only"
                      value={item.rating.rate}
                      readOnly
                    />
                    ({item.rating.rate})
                  </div>
                </div>
              );
            })):<h5 className="text-danger">{error}!</h5>}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
