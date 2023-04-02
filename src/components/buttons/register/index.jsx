import React,{useRef} from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { isloged } from "../../../ReduxToolKit/slices/authSlice";
import TextField from "@mui/material/TextField";
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../../firebase';
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();
//  PASSWORD MATCH 
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async ({eMail,password}) => {
    await createUserWithEmailAndPassword(auth,eMail,password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate("/")
      // ...
      window.document.body.style.overflowY = "scroll";
      dispatch(isloged(true));
      return user
  }).then((u)=>{
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
      <div
      className="container mt-3"
      >
        <div >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bolder" id="exampleModalLabel">
                Register
              </h4>
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
                    id="registerInputEmail"
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
                    ref={password}
                    className="form-control"
                    id="registerInputPassword1"
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
                <div className="form-group mb-4">
                  <TextField
                    variant="filled"
                    label="Confirm password"
                    type="password"
                    className="form-control"
                    id="registerInputPassword2"
                    {...register("conPassword", {
                      required: true,
                      minLength: 6,
                      maxLength: 10,
                      validate: value => value === password.current || "The passwords do not match"
                    })}
                    aria-invalid={errors.conPassword ? "true" : "false"}
                  />
                  <small id="emailHelp" className="form-text text-muted ">
                    {errors.conPassword?.type === "required" && (
                      <p className="text-danger" role="alert">
                        Password Is Required
                      </p>
                    )}
                    {errors.conPassword?.type === "minLength" && (
                      <p className="text-danger" role="alert">
                        Min Length Is 6
                      </p>
                    )}
                    {errors.conPassword?.type === "maxLength" && (
                      <p className="text-danger" role="alert">
                        Max Length Is 10
                      </p>
                    )}
                    {errors.conPassword && <p className="text-danger" role="alert">{errors.conPassword.message}</p>}
                  </small>
                </div>
                {/* <p>
                   have an account? <NavLink to="/sign-in">Sign up</NavLink>
                </p> */}
                <button type="submit" className="Submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
