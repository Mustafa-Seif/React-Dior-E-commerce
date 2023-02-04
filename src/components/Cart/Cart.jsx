import { React, useState,useEffect } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteItemFromCart,increaseQuantity,decreaseQuantity } from "../../ReduxToolKit/slices/addItemSlice";
import empty from "../../../src/assets/empty-cart.svg";
import { getAllTotal } from "../../ReduxToolKit/slices/totalSlice";
const Cart = () => {
  // GET CART ITEM FROM REDUX TOOLKIT
  const product = useSelector((state) => state.cart.value);
  // REMOVE ITEM FROM CART
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(deleteItemFromCart(item));
    SetTotal(0);
    getTotal();
  };
  // handle count products
  const handleIncrease = (pro) => {
    dispatch(increaseQuantity(pro))
    SetTotal(0);
    getTotal();

  };
  const handleDecrease = (pro) => {
    dispatch(decreaseQuantity(pro))
    SetTotal(0);
    getTotal();

  };
  const emptyCart = () => {
    return (
      <div className="text-center">
        <img src={empty} alt="img" width="50%" />
      </div>
    );
  };
// GET TOTAL FUNCTION 
const [total,SetTotal]=useState(0);
  useEffect(() => {
    SetTotal(0)
    getTotal()
  }, [product])
  useEffect(()=>{
 // SEND TOTAL TO TOTAL SLICE 
 dispatch(getAllTotal(total))
  },[total])
  const getTotal=()=>{
    let count=0;
    for(let i = 0; i < product.length; i++){
      count+= product[i].price * product[i].quantity;
    }
    SetTotal(Math.round(count));
  };

  const items = () => {
    return (
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black fw-bold">
                  Shopping Cart
                </h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>{" "}
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              {product.map((pro, inx) => {
                return (
                  <div className="card rounded-3 mb-4" key={inx}>
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={pro.image}
                            className="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{pro.title}</p>
                          <p>
                            <span className="text-muted">{pro.category}</span>
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn btn-link px-2"
                            onClick={() => handleDecrease(pro)}
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="1"
                            value={pro.quantity}
                            name="quantity"
                            type="number"
                            className="form-control form-control-sm"
                          />

                          <button
                            className="btn btn-link px-2"
                            onClick={() => handleIncrease(pro)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">${pro.price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <i
                            className="fas fa-trash fa-lg text-danger"
                            onClick={() => handleClose(pro)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div class="card">
                <div class="card-body d-flex justify-content-between">
                  <NavLink
                    to="/checkout"
                    className="btn btn-danger btn-block btn-lg"
                  >
                    Proceed to Checkout
                  </NavLink>
                  <div class="fs-2 fw-bolder">Total: ${total} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {product.length !== 0 && items()}
      {product.length === 0 && emptyCart()}
    </>
  );
};

export default Cart;
