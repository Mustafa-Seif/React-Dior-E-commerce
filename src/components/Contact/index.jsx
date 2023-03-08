import React from "react";
import "./contact.css";
import aboutIMG from "../../assets/contact-us-customer-service-illustration_2175-310.webp";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    toast.success('Your massage has been send!', {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  
  return (
    <div className="container mt-5">
      <div className="row  mb-3">
        <h1>Contact With Us</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-6 col-12 mb-3 border">
          <img src={aboutIMG} alt="" width="100%" />
        </div>
        <form
          className="col-md-6 col-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group mb-4">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              {...register("eMail", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              aria-invalid={errors.eMail ? "true" : "false"}
            />
            <small id="emailHelp" className="form-text text-muted ">
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
          <div className="form-group mb-4">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              {...register("firstName", {
                required: true,
                minLength: 6,
                maxLength: 10,
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            <small id="emailHelp" className="form-text text-muted ">
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
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              
            ></textarea>
          </div>
          <button type="submit" className="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
