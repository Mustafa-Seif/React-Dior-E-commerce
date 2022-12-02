import axios from "axios";
import "./producta.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import ToTopIcon from "../ToTopIcon/index";
import { BsSearch } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";

const Products = () => {
  // liked product
  const [liked, setLiked] = useState(false);
  const handleLiked = (e, id) => {
    if (liked === false) {
      setLiked(!liked);
      e.target.style.color = "red";
    }
  };

  // get data detais
  const [data, setData] = useState([]);
  const [neWdata, setNewData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        // setNewData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // handle Search input
  // const [searchVal, setSearchVal] = useState("");

  // const handleSearch = (e) => {
  //   setSearchVal(e.target.value);
  // };
  // useEffect(() => {
  //   if (searchVal.length !== 0) {
  //     const dataFiltered = data.filter((el, ind) => {
  //       return el.title.toLowerCase().includes(searchVal.toLowerCase());
  //     });
  //     setNewData(dataFiltered);
  //   } else {
  //     setNewData(data);
  //   }
  // }, [searchVal]);

  // show spinner if no data 
  if (data.length === 0) {
    return (
      <div className="Spinner_parent">
        <Spinner animation="border" variant="danger" className="spinner" />
      </div>
    );
  }

  return (
    <div>
      <div className="container py-5">
        {/* <div className="inputSearchRapper">
          <input
            placeholder="Search..."
            // value={searchVal}
            // onChange={handleSearch}
          />
          <BsSearch
            style={{ position: "absolute", right: "10px", top: "10px" }}
          />
        </div> */}

        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">
            {data.map((d) => {
              return (
                <div
                  className="card text-center mb-5 mt-5 p-4 col-4 "
                  style={{ width: "22rem", height: "450px" }}
                  key={d.id}
                >
                  <div className="img_container">
                    <img
                      src={d.image}
                      className="card-img-top"
                      alt="..."
                      height={"200px"}
                    />
                    <div className="layOut"></div>
                  </div>

                  <div className="card-body">
                    <p
                      className="card-title"
                      style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {d.title}
                    </p>
                    <div className="row mb-5">
                      <h5 className="card-text col">${d.price} </h5>
                      <AiOutlineHeart
                        className="col"
                        style={{ fontSize: "1.5rem" }}
                        onClick={(e) => handleLiked(e, d.id)}
                      />
                    </div>
                    <NavLink
                      to={`/products/${d.id}`}
                      className="mb-0 more_details"
                    >
                      More Details
                    </NavLink>
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
