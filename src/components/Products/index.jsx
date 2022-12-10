import axios from "axios";
import "./products.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ToTopIcon from "../ToTopIcon/index";
import { BsSearch, BsFillHeartFill } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch } from "react-redux";
import { addWish, addItem } from "../../Redux/actions/actions";
import noResults from '../../assets/searching-data.svg'
// ///////////////////////////////////
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const [openWish, setOpenWish] = React.useState(false);

  const handleClickAdd = () => {
    setOpen(true);
  };

  const handleCloseAdd = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

// handle alert 
  const handleClickWish = () => {
    setOpenWish(true);
  };

  const handleCloseWish = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenWish(false);
  };

  // liked product
  const dispatch = useDispatch();
  const handleWish = (item) => {
    dispatch(addWish(item));
  };
  const handleToCart = (item) => {
    dispatch(addItem(item));
  };

  // get data detais
  const [data, setData] = useState([]);
  const [neWdata, setNewData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    setNewData(data);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setNewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //  handle search
  useEffect(() => {
    if (searchVal) {
      const dataFiltered = data.filter((el, ind) => {
        return el.title.toLowerCase().includes(searchVal.toLowerCase());
      });
      setNewData(dataFiltered);
    } else {
      setNewData(data);
    }
  }, [searchVal]);

  // show spinner if no data
  if (data.length === 0) {
    return (
      <div className="Spinner_parent ">
        <Spinner animation="border" variant="danger" className="spinner" />
      </div>
    );
  }

  // no results 
  const emptyCart = () => {
    return (
      <div className="text-center">
        <img src={noResults} alt="img" width="50%" />
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            {/* <h1>Products</h1> */}
            <div id="search-wrapper">
              <BsSearch class="search-icon fas fa-search"></BsSearch>

              <input
                type="text"
                id="search"
                placeholder="search..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <button id="search-button">Search</button>
            </div>
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around gy-5">
            {neWdata.length === 0 && emptyCart()}
            {neWdata.map((d) => {
              return (
                <div className="col-lg-4 col-md-6 col-8 pb-3 " key={d.id}>
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
                          <a
                            href="https://www.facebook.com/sharer/sharer.php?u=https://unrivaled-otter-0d293c.netlify.app/"
                            target="_blank"
                          >
                            <i className="material-icons shareIcon">share</i>
                          </a>
                        </li>
                        <li>
                          <a className="" onClick={() => handleWish(d)}>
                            <i
                              className="material-icons like heartIcon"
                              onClick={handleClickWish}
                            >
                              favorite_border
                            </i>
                          </a>
                          <Stack spacing={2} sx={{ width: "100%" }}>
                            <Snackbar
                              open={openWish}
                              autoHideDuration={1000}
                              onClose={handleCloseWish}
                            >
                              <Alert
                                onClose={handleCloseWish}
                                severity="success"
                                sx={{ width: "100%" }}
                              >
                                this product added to wish list
                              </Alert>
                            </Snackbar>
                          </Stack>
                        </li>
                        <li>
                          <a
                            id="buy"
                            className=""
                            onClick={() => handleToCart(d)}
                          >
                            <i
                              className="material-icons buy addIcon"
                              onClick={handleClickAdd}
                            >
                              add_shopping_cart
                            </i>
                          </a>
                          <Stack spacing={2} sx={{ width: "100%" }}>
                            <Snackbar
                              open={open}
                              autoHideDuration={1000}
                              onClose={handleCloseAdd}
                            >
                              <Alert
                                onClose={handleCloseAdd}
                                severity="success"
                                sx={{ width: "100%" }}
                              >
                                this product added to cart
                              </Alert>
                            </Snackbar>
                          </Stack>
                        </li>
                      </ul>
                      <div className="card-content">
                        <div className="row">
                          <div className="col" style={{ height: "100px" }}>
                            <p>
                              <strong>Description:</strong> <br />
                              {d.title}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div style={{ width: "95%", margin: "auto" }}>
                            <div className="text-success">in Stock</div>
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
            })}
          </div>
        </div>
      </div>
      <ToTopIcon></ToTopIcon>
    </div>
  );
};

export default Products;
