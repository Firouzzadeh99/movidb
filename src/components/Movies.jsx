import React, { useEffect, useState,useRef} from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Paginate from "./Paginate";
import BoxMovie from "./BoxMovie";
import { moviesApi } from "../helper/fanctions";
import Loader from "./Loader";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchData,setSearchData] = useState('')
   let params = useParams();
  let pageNumber = Number(params.page.split("=")[1]);
  const moviesWrapper = useRef()
  useEffect(() => {
    // <<<<<<<<<=================    get moviesData from api(themoviedb/list)    ======================>>>>>>>> 
    moviesApi(pageNumber)
    .then((moviesData) => {
      setMovies(moviesData)
      moviesWrapper.current.classList.remove('active-blur')
    })
  }, [pageNumber]);
  const handelSearchFilterInput = (event)=>{
    setSearchData(event.target.value);
   }
const setBlurMoviesWrappper = ()=>{
  moviesWrapper.current.classList.add('active-blur')
 }
  
    let searchMovies
    if(movies.results){
      searchMovies = movies.results.filter(movies =>{
        return movies.release_date.includes(searchData)
      })
 
    }
  return (
    <>
      <SearchBar 
      handelSearchFilterInput={handelSearchFilterInput}
       />
      <div className="movies__wrapper" ref={moviesWrapper}>
        {searchMovies ? (
          <>
            {searchMovies.slice(0,12).map((movie) => {
              return (
                <>
                  <BoxMovie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    backdrop_path={movie.poster_path}
                    genre_ids={[...movie.genre_ids]}
                    release_date={movie.release_date}
                    pageNumber={pageNumber}
                  />
                </>
              );
            })}
          </>
        ) : (
          <div style={{ textAlign: "center", marginRight: "-700px" }}>
            <Loader />
          </div>
        )}
      </div>
      <Paginate pageNumber={pageNumber} setBlurMoviesWrappper={setBlurMoviesWrappper} />
    </>
  );
}
