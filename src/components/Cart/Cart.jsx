import React from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeItem } from '../../Redux/actions/actions'
import empty from '../../../src/assets/empty-cart.svg'
import { BsFillTrashFill } from "react-icons/bs";


const Cart = () => {
  const product = useSelector((state)=>state)
  const dispatch = useDispatch()
  const handleClose =(item)=>{
    dispatch(removeItem(item))
  }


  const emptyCart =()=>{
    return (
      <div className='text-center'><img src={empty} alt="img" width="50%"/></div>
    )
  }

  const chechOut =()=>{
    return (
      <div className="container mb-5">
        <div className="row">
          <NavLink to='/checkout' className='btn btn-primary'>Procced To Checkout</NavLink>
        </div>
      </div>
    )
  }

  const items =(item)=>{
    return(
      <div className="px-4 my-5 bg-light" key={item.id}>
      <div className="container py-4">
      <div className='float-right position-relative'><BsFillTrashFill className='text-danger trachIcon ' onClick={()=>handleClose(item)}></BsFillTrashFill></div>
        <div className="row justify-content-center">
        <div className="col-md-4">
          <img src={item.image} alt={item.title} height='200px' width='180px' />
        </div>
          <div className="col-md-4">
            <h3>{item.title} </h3>
            <p className='fw-bold'>${item.price} </p>
          </div>
        </div>
      </div>
    </div>
    )
    
  }

  return (
    <>
      {product.length !==0 && product.map(items)}
      {product.length !==0 && chechOut()}
      {product.length ===0 && emptyCart()}
    </>
  )
}

export default Cart