import React from "react";
 import { Link } from "react-router-dom";
 import calenderIcon from "../assets/icons/32px-Calendar_icon_2 1.png";

  const BoxMovie = ({pageNumber,genre_ids,id,title,backdrop_path,release_date,genres})=> {
   let genresList
   if(genres.length){
    genresList = genres.filter((genre) =>{
          return genre_ids.includes(genre.id)
    })
   }
    return (
    <Link to={`/movieditail/${pageNumber}_${id}`} > 
    <div className="movies__wrapper-movie">
     <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} loading="lazy" />
      <div className="movies__wrapper-ditails">
       <p> {title}</p>
       <div>
         <img src={calenderIcon} alt="calender" />
         <span>{release_date}</span>
       </div>
       <ul className="movies__wrapper-category">
        {
          genresList?genresList.map(genre=> <li><span></span> {genre.name}</li> ):<>..</>
        }
       </ul>
      </div>
     </div>
   </Link>
   )
}
export default BoxMovie