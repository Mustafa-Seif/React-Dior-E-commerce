import React from 'react'
import { CgProfile } from "react-icons/cg";
import './buttons.css'


const Register = () => {
  return (
    <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className='sign' style={{border:"none"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span><CgProfile class="fa fa-user-plus" aria-hidden="true"></CgProfile></span>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <button className='btn btn-primary w-100 mb-2 mb-4'><span><i class="fa fa-google" aria-hidden="true"></i></span> Sign in with Google</button>
                        <button className='btn btn-primary w-100 mb-2'><span><i class="fa fa-facebook-official" ></i></span> Sign in with Facebook</button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>


        </>
  )
}

export default Register