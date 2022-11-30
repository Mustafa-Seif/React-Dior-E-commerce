import './ToTopIcon.css'
import { BsChevronUp } from "react-icons/bs";
import { useState } from 'react';

function ToTopIcon() {
  const [show,setShow]=useState(false)
  window.addEventListener("scroll",()=>{
    if (window.scrollY >= 400) {
      setShow(true)
    }
    else{
      setShow(false)
    }
    // console.log(window.scrollY);
  })
  return (
    <a className='toTopIcon' href='#' style={{right:show?"2rem":"-5rem"}}>
        <BsChevronUp/>
    </a>
  )
}

export default ToTopIcon