import React from "react";
import { useDispatch, useSelector } from "react-redux";
import empty from "../../assets/no-records.svg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addItemToCart } from "../../ReduxToolKit/slices/cartSlice";
import { deleteItemFromWish } from "../../ReduxToolKit/slices/addWishSlice";


function WishList() {
  const wishlist = useSelector((state) => state.wish.value);
  const dispatch = useDispatch();
  const handleRemoveWish = (item) => {
    dispatch(deleteItemFromWish(item));
  };

  const emptyCart = () => {
    return (
      <div className="text-center" style={{height:'100vh'}}>
        <img src={empty} alt="img" width="50%" />
      </div>
    );
  };

  const items = () => {
    return (
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black fw-bold">Wish List</h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>{" "}
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>
              {wishlist.map((pro,index) => {
                return (
                  <div className="card rounded-3 mb-4" key={index}>
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
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">${pro.price}</h5>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 text-end">
                          <i>
                            <AddShoppingCartIcon
                              className="text-success"
                              onClick={() => dispatch(addItemToCart(pro))}
                            />
                          </i>
                          <i
                            className="fas fa-trash fa-lg text-danger ms-5 "
                            onClick={() => handleRemoveWish(pro)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {wishlist.length === 0 && emptyCart()}
      {wishlist.length !== 0 && items()}
    </>
  );
}

export default WishList;
