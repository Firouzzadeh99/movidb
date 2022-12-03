const BASE_URL =  'https://api.themoviedb.org'
const API_KEY = 'ed43e21e611a11f42d0b891c1ee65c95'
const getMoviesGenres = async()=>{
   const data =  await fetch(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`)
   const genre = await data.json()
   return genre
}
 const getMoviesList = async(pageNumber)=>{
   const data =  await fetch(`${BASE_URL}/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`)
   const movies = await data.json()
    return movies
}
 const moviesDetailApi = async(id)=>{
   const data =  await fetch(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
   const movieDetail = await data.json()
    return movieDetail
}
export {getMoviesGenres,getMoviesList,moviesDetailApi}
 
  
 
 
