import React from 'react'
import { Link } from "react-router-dom";
import img from "../assets/images/611ixoDpRLL 1.png";
import calender from "../assets/icons/32px-Calendar_icon_2 1.png";
import SearchBar from "./SearchBar";
import Paginate from "./Paginate";



export default function Movies(){
  return (
    <>
            <SearchBar />
    <div className="movies-wrapper">
        <Link to={`/movies/3`}>
          <div className="movie">
           <img src={img} alt="calender" />
            <div className="movie-details">
             <p>ones film</p>
             <div>
               <img src={calender} alt="calender" />
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
      </div>
      <Paginate />
    </>
  )
}