import React from 'react'
import noPage from '../assets/page-not-found.svg'

const NoPage = () => {
  return (
    <div className='container'>
      <img src={noPage} alt="noPage"  style={{margin:"auto",width:"50%", display:"block"}} />
    </div>
  )
}

export default NoPage