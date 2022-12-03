const BASE_URL =  'https://api.themoviedb.org'
const API_KEY = 'ed43e21e611a11f42d0b891c1ee65c95'
const getMoviesGenres = async()=>{
   const data =  await fetch(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`)
   const movies = await data.json()
   return movies
}
export {getMoviesGenres}
 
 
 
 
 
