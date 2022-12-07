import React,{useContext} from "react";
 import { Link } from "react-router-dom";
 import calenderIcon from "../assets/icons/32px-Calendar_icon_2 1.png";
 import { genreContext } from "../context/MoviesGenresContext";

export default function BoxMovie({pageNumber,genre_ids,id,title,backdrop_path,release_date}) {
  const genreList = useContext(genreContext)
  let genres
  if(genreList.genres){
    genres = genreList.genres.filter((genre) =>{
          return genre_ids.includes(genre.id)
    })
   }
   console.log(genres)
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
          genres?genres.map(genre=> <li><span></span> {genre.name}</li> ):<>..</>
        }
       </ul>
      </div>
     </div>
   </Link>
   )
}
