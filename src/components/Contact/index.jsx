import React from "react";
import "./contact.css";
import aboutIMG from "../../assets/contact-us-customer-service-illustration_2175-310.webp";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mt-5">
      <div className="row text-center mb-5">
        <h1>Contact With Us</h1>
        <hr />
      </div>
      <div className="row">
        <form style={{ width: "50%" }} className="col-6" onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group mb-4">
           
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              {...register("eMail", { required: true , pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} 
              aria-invalid={errors.eMail ? "true" : "false"}
            />
            <small id="emailHelp" class="form-text text-muted ">
            {errors.eMail?.type === 'required' && <p className="text-danger" role="alert">Email Is Required</p>}
            {errors.eMail?.type === 'pattern' && <p className="text-danger" role="alert">Invalid Email... Please Write Valid Email</p>}
            </small>
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              {...register("firstName", { required: true , minLength:6, maxLength:10})} 
              aria-invalid={errors.firstName ? "true" : "false"}
            />
             <small id="emailHelp" class="form-text text-muted ">
            {errors.firstName?.type === 'required' && <p className="text-danger" role="alert">Password Is Required</p>}
            {errors.firstName?.type === 'minLength' && <p className="text-danger" role="alert">Min Length Is 6</p>}
            {errors.firstName?.type === 'maxLength' && <p className="text-danger" role="alert">Max Length Is 10</p>}

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
        <div className="col-6">
          <img src={aboutIMG} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
