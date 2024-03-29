import React from "react";
import "./buttons.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import LoginIcon from "@mui/icons-material/Login";
import { isloged } from "../../ReduxToolKit/slices/authSlice";
import TextField from "@mui/material/TextField";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // REACT FORM HOOK
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // HANDLE SIGN IN
  const onSubmit = async ({ eMail, password }) => {
    await signInWithEmailAndPassword(auth, eMail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        // ...
        window.document.body.style.overflowY = "scroll";
        dispatch(isloged(true));
      })
      .then((u) => {
        // FIRE TOAST
        toast.success(`Welcome`, {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        // FIRE TOAST
        toast.error(`${error.message}`, {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="sign"
        style={{ border: "none", background: "#fff" }}
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
                  <i className="fa fa-google" aria-hidden="true"></i>
                </span>{" "}
                Sign in with Google
              </button>
              <button className="btn btn-primary w-100 mb-2">
                <span>
                  <i className="fa fa-facebook-official"></i>
                </span>{" "}
                Sign in with Facebook
              </button>
              <form
                style={{ width: "100%" }}
                className="col-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group mb-4">
                  <TextField
                    variant="filled"
                    label="Email"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("eMail", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                    aria-invalid={errors.eMail ? "true" : "false"}
                  />
                  <div id="emailHelp" className="form-text text-muted ">
                    {errors.eMail?.type === "required" && (
                      <small className="text-danger" role="alert">
                        Email Is Required
                      </small>
                    )}
                    {errors.eMail?.type === "pattern" && (
                      <small className="text-danger" role="alert">
                        Invalid Email... Please Write Valid Email
                      </small>
                    )}
                  </div>
                </div>
                <div className="form-group mb-4">
                  <TextField
                    variant="filled"
                    label="Password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 10,
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <small id="emailHelp" className="form-text text-muted ">
                    {errors.password?.type === "required" && (
                      <p className="text-danger" role="alert">
                        Password Is Required
                      </p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-danger" role="alert">
                        Min Length Is 6
                      </p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="text-danger" role="alert">
                        Max Length Is 10
                      </p>
                    )}
                  </small>
                </div>
                <p
                  data-bs-dismiss="modal"
                >
                  Don't have an account?{" "}
                  <NavLink to="/register">Sign up</NavLink>
                </p>
                <button type="submit" className="Submit">
                  Sign In
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
