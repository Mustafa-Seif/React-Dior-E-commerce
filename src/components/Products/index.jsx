import axios from "axios";
import "./producta.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import ToTopIcon from "../ToTopIcon/index";

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
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // handleSearch
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e) => {
    const filter = e.target.value;
    setSearchVal(filter);

    if (searchVal.length !== 0) {
      const dataFiltered = data.filter((el, ind) => {
        return el.title.toLowerCase().includes(searchVal.toLowerCase());
      });
      setData(dataFiltered);
    }
    else{
       return setData(prevState=> setData(prevState))
    }
  };

  return (
    <div>
      <div className="container py-5">
        <input
          placeholder="Search..."
          value={searchVal}
          onChange={handleSearch}
          style={{
            margin: "auto",
            display: "block",
            marginBottom: "2rem",
            width: "50%",
            borderRadius: "30px",
            paddingLeft: "1rem",
            border: "solid 1px #A749FF",
            padding:".5rem 1rem"
          }}
        />
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
                    <p className="card-title" style={{textOverflow:"ellipsis" ,whiteSpace:"nowrap",overflow:"hidden"}}>{d.title}</p>
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
