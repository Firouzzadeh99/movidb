import React from "react";
 import { Link } from "react-router-dom";
 import calenderIcon from "../assets/icons/32px-Calendar_icon_2 1.png";

export default function BoxMovie({id,title,backdrop_path,release_date}) {

  return (
    <Link to={`/movieditail/${id}`} >
    <div className="movie">
     <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />
      <div className="movie-ditails">
       <p> {title}</p>
       <div>
         <img src={calenderIcon} alt="calender" />
         <span>{release_date}</span>
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
