const BASE_URL =  'https://api.themoviedb.org'
const API_KEY = 'ed43e21e611a11f42d0b891c1ee65c95'
 const getMoviesGenres = ()=>{
  return fetch(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`)
  .then(res=>res.json())
 .then(movies => movies)
 
}
 const getMoviesList = (pageNumber)=>{
  return fetch(`${BASE_URL}/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`)
  .then(res=>res.json())
  .then(movies => movies)
  
}
const getAllMovies =(pageNumber)=>{
 return Promise.all([getMoviesList(pageNumber), getMoviesGenres()])
 
}

  const moviesDetailApi = (id)=>{
  return fetch(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
 
}
export {getMoviesGenres,getMoviesList,moviesDetailApi,getAllMovies}
 
  
 
 
