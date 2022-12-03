import React from "react";
import "./buttons.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
          <i className="fa fa-sign-in"></i>{" "}
        </span>
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                login
              </h5>
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
                </span>{" "}
                Sign in with Google
              </button>
              <button className="btn btn-primary w-100 mb-2">
                <span>
                  <i class="fa fa-facebook-official"></i>
                </span>{" "}
                Sign in with Facebook
              </button>
              <form
                style={{ width: "100%" }}
                className="col-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div class="form-group mb-4">
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
                <div class="form-check mb-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
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
