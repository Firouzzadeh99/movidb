import React from 'react'
import loader from '../assets/icons/Spinner-0.5s-78px.gif'

const Loader = () => {

  return (
    <div className='loader'> 
        <img width="100px" style={{width:"50px",height:"50px",textAlign:"center"}} src={loader} alt="loader" />
        <p>Loading...</p>
    </div>
  )
}
export default Loader