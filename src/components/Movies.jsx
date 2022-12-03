import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Paginate from "./Paginate";
import BoxMovie from "./BoxMovie";
import { getMoviesList } from "../services/api";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchData,setSearchData] = useState('')
   let params = useParams();
  let pageNumber = Number(params.page.split("=")[1]);
  useEffect(() => {
    const moviesApi = async (pageNumber) => {
      const data = await getMoviesList(pageNumber);
      setMovies(data);
    };
    moviesApi(pageNumber);
  }, [pageNumber]);
  const handelSearchFilterInput = (event)=>{
    setSearchData(event.target.value);
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
      <div className="movies-wrapper">
        {searchMovies ? (
          <>
            {searchMovies.slice(0,9).map((movie) => {
              return (
                <>
                  <BoxMovie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    backdrop_path={movie.poster_path}
                    genre_ids={[...movie.genre_ids]}
                    release_date={movie.release_date}
                  />
                </>
              );
            })}
          </>
        ) : (
          <div style={{ textAlign: "center", marginRight: "-700px" }}>
            loading...
          </div>
        )}
      </div>
      <Paginate pageNumber={pageNumber} />
    </>
  );
}
