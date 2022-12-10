import React from "react";
import "./buttons.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import LoginIcon from "@mui/icons-material/Login";
import { isLog } from "../../Redux/actions/actions";
import { NavLink } from "react-router-dom";
const Login = () => {
  const isLoged = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    window.document.body.style.overflowY = "scroll";
    dispatch(isLog(true));
  };
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="sign"
        style={{ border: "none" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span>
          <LoginIcon></LoginIcon>
        </span>
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="fales"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bolder" id="exampleModalLabel">
                login
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-2 mb-4">
                <span>
                  <i class="fa fa-google" aria-hidden="true"></i>
                </span>
                Sign in with Google
              </button>
              <button className="btn btn-primary w-100 mb-2">
                <span>
                  <i class="fa fa-facebook-official"></i>
                </span>
                Sign in with Facebook
              </button>
              <form
                style={{ width: "100%" }}
                className="col-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div class="form-group mb-4">
                <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    {...register("eMail", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                    aria-invalid={errors.eMail ? "true" : "false"}
                  />
                  <small id="emailHelp" class="form-text text-muted ">
                    {errors.eMail?.type === "required" && (
                      <p className="text-danger" role="alert">
                        Email Is Required
                      </p>
                    )}
                    {errors.eMail?.type === "pattern" && (
                      <p className="text-danger" role="alert">
                        Invalid Email... Please Write Valid Email
                      </p>
                    )}
                  </small>
                </div>
                <div class="form-group mb-4">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    {...register("firstName", {
                      required: true,
                      minLength: 6,
                      maxLength: 10,
                    })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />
                  <small id="emailHelp" class="form-text text-muted ">
                    {errors.firstName?.type === "required" && (
                      <p className="text-danger" role="alert">
                        Password Is Required
                      </p>
                    )}
                    {errors.firstName?.type === "minLength" && (
                      <p className="text-danger" role="alert">
                        Min Length Is 6
                      </p>
                    )}
                    {errors.firstName?.type === "maxLength" && (
                      <p className="text-danger" role="alert">
                        Max Length Is 10
                      </p>
                    )}
                  </small>
                </div>
                <p>
                  Don't have an account?{" "}
                  <NavLink to="/">Sign up</NavLink>
                </p>
                <button type="submit" class="Submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
