import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Paginate from "./Paginate";
import BoxMovie from "./BoxMovie";
import { getMoviesGenres, getMoviesList} from "../services/api";
import Loader from "./Loader";

const Movies = () => {
  console.log('gl render')
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchData, setSearchData] = useState('')
  let params = useParams();
  let pageNumber = Number(params.page.split("=")[1]);
  const moviesWrapper = useRef()
  useEffect(() => {
    console.log('ef render')

    Promise.all([getMoviesList(), getMoviesGenres()]).then(response => {
      setMovies(response[0])
      setGenres(response[1].genres)
    })
  }, [pageNumber]);
  const handelSearchFilterInput = (event) => {
    setSearchData(event.target.value);
  }
  const setBlurMoviesWrappper = () => {
    moviesWrapper.current.classList.add('active-blur')
  }

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
      <div className="movies__wrapper" ref={moviesWrapper}>
        {searchMovies ? (
          <>
            {searchMovies.slice(0, 12).map((movie) => {
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
                    genres={genres}
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
export default Movies
   