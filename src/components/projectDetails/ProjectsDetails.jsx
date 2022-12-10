import React from "react";
import "./productDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Redux/actions/actions";
import Spinner from "react-bootstrap/Spinner";

const ProjectsDetails = () => {
  const products = useSelector((state) => state.addItem);
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
      dispatch(addItem(data));
      setcartBtn("Remove From The Cart");
    } else {
      dispatch(removeItem(data));
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
    <div class="container my-5">
      <div class="row details-snippet1">
        <div class="col-md-7">
          <div class="row">
            <div class="col-md-2 mini-preview">
              <img class="img-fluid" src={data.image} alt="Preview"  />
              <img class="img-fluid" src={data.image} alt="Preview" />
              <img class="img-fluid" src={data.image} alt="Preview" />
            </div>
            <div class="col-md-10">
              <div class="product-image">
                <img
                  class="img-fluid "
                  style={{ height: "450px" }}
                  src={data.image}
                  alt="Main Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="category">
            <span class="theme-text">Category:</span> {data.category}
          </div>
          <div class="title">{data.title}</div>
          <div class="ratings my-2">
            <div class="stars d-flex">
              <div class="theme-text mr-2">Product Ratings: </div>
              <div>&#9733;</div>
              <div>&#9733;</div>
              <div>&#9733;</div>
              <div>&#9733;</div>
              <div>&#9733;</div>
              <div class="ml-2">({data.rating.rate}) </div>
            </div>
          </div>
          <div class="price my-2">
            ${data.price} <strike class="original-price">$120.00</strike>
          </div>
          <div class="theme-text subtitle">Brief Description:</div>
          <div class="brief-description">{data.description}</div>

          {/* <!-- TO REMOVE COLORS --> */}
          <div>
            <div class="subtitle my-3 theme-text">Colors:</div>
            <div class="select-colors d-flex">
              <div class="color red"></div>
              <div class="color silver"></div>
              <div class="color black"></div>
            </div>
          </div>

          <hr />
          <div class="row">
            <div class="col-12">
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

      <div class="additional-details my-5 text-center">
        {/* <!-- Nav pills --> */}
        <ul class="nav nav-tabs justify-content-center">
          <li class="nav-tabs">
            <a
              class="nav-link active"
              data-toggle="tab"
              data-bs-toggle="tab"
              href="#home"
            >
              Description
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              data-bs-toggle="tab"
              href="#menu1"
            >
              Reviews
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              data-bs-toggle="tab"
              href="#menu2"
            >
              Specifications
            </a>
          </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div class="tab-content mt-4 mb-3">
          <div class="tab-pane container active" id="home">
            <div class="description">
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
          <div class="tab-pane container fade" id="menu1">
            <div class="review">
              <p>PUT REVIEWS DESIGN HERE</p>
            </div>
          </div>
          <div class="tab-pane container fade" id="menu2">
            <div class="specification">
              <p>PUT SPECIFICATIONS HERE</p>
            </div>
          </div>
        </div>
      </div>

      <div class="related-products details-snippet1">
        <div class="related-heading theme-text mb-5">Related Products</div>

        <div class="row gx-y">
          {productsFilter.length === 0 && <div className="Spinner_parent">
        <Spinner animation="border" variant="danger" className="spinner" />
      </div> }
          { productsFilter.length !== 0 && productsFilter.map((item) => {
            return (
              <div class="col-md-3 gy-4  text-center">
                <div class="related-product">
                  <img
                    class="img-fluid"
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
                  class="related-title"
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
