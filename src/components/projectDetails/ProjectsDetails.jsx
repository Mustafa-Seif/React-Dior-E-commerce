import React from "react";
import "./productDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { addItemToCart } from "../../ReduxToolKit/slices/addItemSlice";
import { deleteItemFromCart } from "../../ReduxToolKit/slices/addItemSlice";

const ProjectsDetails = () => {
  const proId = useParams();
  const [data, setData] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [productsFilter, seTproductsFilter] = useState([]);
  const [route,setRoute] = useState()
  const [cartBtn, setcartBtn] = useState("Add To The Cart");
  // handle change product 
  const handleChangeProduct =()=>{
    setRoute(!route)
    setcartBtn("Add To The Cart")
  }

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${proId.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setDataArr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [route]);

  useEffect(() => {
    // filter products by category
    const FilterPro = dataArr.filter((el) => {
      return el.category === data.category;
    });
    seTproductsFilter(FilterPro);
  }, [dataArr, productsFilter]);


  const dispatch = useDispatch();
  const handleCart = (data) => {
    if (cartBtn === "Add To The Cart") {
      dispatch(addItemToCart(data));
      setcartBtn("Remove From The Cart");
    } else {
      dispatch(deleteItemFromCart(data));
      setcartBtn("Add To The Cart");
    }
  };

  if (data.length === 0) {
    return (
      <div className="Spinner_parent">
        <Spinner animation="border" variant="danger" className="spinner" />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row details-snippet1">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-2 mini-preview">
              <img className="img-fluid" src={data.image} alt="Preview"  />
              <img className="img-fluid" src={data.image} alt="Preview" />
              <img className="img-fluid" src={data.image} alt="Preview" />
            </div>
            <div className="col-md-10">
              <div className="product-image mb-3">
                <img
                  className="img-fluid "
                  style={{ height: "450px" }}
                  src={data.image}
                  alt="Main Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="category">
            <span className="theme-text">Category:</span> {data.category}
          </div>
          <div className="title">{data.title}</div>
          <div className="ratings my-2">
            <div className="stars d-flex">
              <div className="theme-text mr-2">Product Ratings: </div>
              <div>&#9733;</div>
              <div>&#9733;</div>
              <div>&#9733;</div>
              <div>&#9733;</div>
              <div>&#9733;</div>
              <div className="ml-2">({data.rating.rate}) </div>
            </div>
          </div>
          <div className="price my-2">
            ${data.price} <strike className="original-price">$120.00</strike>
          </div>
          <div className="theme-text subtitle">Brief Description:</div>
          <div className="brief-description">{data.description}</div>

          {/* <!-- TO REMOVE COLORS --> */}
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
                onClick={() => handleCart(data)}
                className="btn addBtn "
              >
                {cartBtn}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="additional-details my-5 text-center">
        {/* <!-- Nav pills --> */}
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
              class="nav-link"
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
          {productsFilter.length === 0 && <div className="Spinner_parent">
        <Spinner animation="border" variant="danger" className="spinner" />
      </div> }
          { productsFilter.length !== 0 && productsFilter.map((item) => {
            return (
              <div className="col-md-3 gy-4  text-center">
                <div className="related-product">
                  <img
                    className="img-fluid"
                    src={item.image}
                    alt="Related Product"
                    style={{ height: "200px" , marginBottom:"1rem"}}
                  />
                </div>
                <div style={{ textDecoration: "none", color: "#000", height:"50px" , overflow:"hidden" }}>
                <NavLink
                  to={`/products/${item.id}`}
                  onClick={handleChangeProduct}
                  style={{ textDecoration: "none", color: "#000" }}
                  className="related-title"
                >
                  {item.title}
                </NavLink>
                </div>
                <div className="d-flex justify-content-center">
                  <div>&#9733;</div>
                  <div>&#9733;</div>
                  <div>&#9733;</div>
                  <div>&#9733;</div>
                  <div>&#9733;</div>

                  ({item.rating.rate})
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
