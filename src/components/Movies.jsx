import React, { useEffect, useState,useCallback } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Paginate from "./Paginate";
import BoxMovie from "./BoxMovie";
import { getMoviesGenres, getMoviesList } from "../services/api";
import SkeletonMovies from "./Skeleton/SkeletonMovies";
 
const Movies = () => {
   const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchData, setSearchData] = useState('')
  let params = useParams();
  let pageNumber = Number(params.page.split("=")[1]);
   useEffect(() => {
     Promise.all([getMoviesList(pageNumber), getMoviesGenres()]).then(response => {
      setMovies(response[0])
      setGenres(response[1].genres)
    })
  }, [pageNumber]);
  const handelSearchFilterInput = useCallback((event) => {
    setSearchData(event.target.value);
  },[])
  const handelPagenate = useCallback(() => {
    setMovies([]);
  },[pageNumber])


  let searchMovies
  if (movies.results) {
    searchMovies = movies.results.filter(movies => {
      return movies.release_date.includes(searchData)
    })

  }
  return (
    <>
 
      <SearchBar
        handelSearchFilterInput={handelSearchFilterInput}
      />
      <div className="movies__wrapper">
        {searchMovies ? (
          <>
            {searchMovies.slice(0, 12).map((movie) => {
              return (
                <>
                  <BoxMovie
                    Key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    backdrop_path={movie.poster_path}
                    genre_ids={[...movie.genre_ids]}
                    release_date={movie.release_date}
                    pageNumber={pageNumber}
                    genres={genres}
                  />
                </>
              );
            })}
          </>
        ) : (
          <SkeletonMovies/>
        )}
      </div>
      <Paginate pageNumber={pageNumber} handelPagenate={handelPagenate} />
     </>
  );
}
export default Movies
