import React, { useEffect, useState, useCallback } from "react";
import { Grid} from '@mui/material'
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Paginate from "./Paginate";
import BoxMovie from "./BoxMovie";
import { getAllMovies } from "../services/api";
import SkeletonMovies from "./Skeleton/SkeletonMovies";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchData, setSearchData] = useState('')
  let params = useParams();
  let pageNumber
  params.page ? pageNumber = Number(params.page.split("=")[1]) : pageNumber = 1
  useEffect(() => {
     getAllMovies(pageNumber)
      .then(response => {
        setMovies(response[0])
        setGenres(response[1].genres)
      })
  }, [pageNumber]);
  const handelSearchFilterInput = useCallback((event) => {
    setSearchData(event.target.value);
  }, [])
  const handelPagenate = useCallback(() => {
    setMovies([]);
  }, [pageNumber])


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
 
      <Grid container spacing={3} sx={{mt:4}}>

          {searchMovies ? (
            <>
              {searchMovies.slice(0, 12).map((movie) => {
                  return <Grid item xs={12} md={6} lg={4} key={movie.id}>
                     <BoxMovie
                      id={movie.id}
                      title={movie.title}
                      backdrop_path={movie.poster_path}
                      genre_ids={[...movie.genre_ids]}
                      release_date={movie.release_date}
                      pageNumber={pageNumber}
                      genres={genres}
                    />
                  </Grid>
               })}
            </>
          ) : (
            <SkeletonMovies />
          )}

      </Grid>
    

      <Paginate pageNumber={pageNumber} handelPagenate={handelPagenate} />

    </>
  );
}
export default Movies
