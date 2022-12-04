import React from 'react'
import './projectDetails.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem,removeItem } from '../../Redux/actions/actions'
import Spinner from 'react-bootstrap/Spinner';




const ProjectsDetails = () => {
  const proId = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${proId.id}`).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)

    })
  },[])

  const [cartBtn, setcartBtn] = useState('Add To The Cart')

  const dispatch = useDispatch()

  const handleCart =(data)=>{
    if (cartBtn === 'Add To The Cart') {
      dispatch(addItem(data))
      setcartBtn('Remove From The Cart')
    }
    else{
      dispatch(removeItem(data))
      setcartBtn('Add To The Cart')

    }
  }

  if (data.length === 0) {
    return <div className="Spinner_parent"><Spinner  animation="border" variant="danger" className='spinner' /></div> 
    
  }

  return (
    <div className='container'>
     <div className="row mt-5 align-center gy-4 gx-5 border"  key={data.id}>
                  <img src={data.image} className=" col-md-4" alt="..." style={{height:"350px"}} />
                  <div className=" col-md-8" >
                    <p className="card-title " style={{fontSize:"3rem"}}>{data.title}</p>
                    <p className="card-title " >Category: {data.category}</p>
                    <p className="card-title text-danger" >Rating: {data.rating.rate}</p>
                    <h4 className="card-text mb-3">{data.price} $</h4>
                    <button onClick={()=>handleCart(data)} className='more_details'>{cartBtn}</button>
                  </div>
      </div>
    </div>
  )
}

export default ProjectsDetails