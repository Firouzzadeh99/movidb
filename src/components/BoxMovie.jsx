import React, { useContext, useEffect } from "react";
 import { Link } from "react-router-dom";
import img from "../assets/images/611ixoDpRLL 1.png";
import calenderIcon from "../assets/icons/32px-Calendar_icon_2 1.png";
// get genre from api context 
import { genreContext } from '../context/MoviesGenresContext';

export default function BoxMovie() {
    const genres = useContext(genreContext)
    useEffect(()=>{
      console.log(genres)
     })
  return (
    <Link to={`/movieditail/3`}>
    <div className="movie">
     <img src={img} alt="movie" />
      <div className="movie-details">
       <p>ones film</p>
       <div>
         <img src={calenderIcon} alt="calender" />
         <span>2014-10-22</span>
       </div>
       <ul className="category">
          <li>Action</li>
         <li><span></span> Comedy</li> 
         <li><span></span> Dram</li>
       </ul>
      </div>
     </div>
   </Link>
   )
}
