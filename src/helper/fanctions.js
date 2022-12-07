import { moviesDetailApi,getMoviesList } from "../services/api"

const detailApi = async(movieId)=>{
    const data = await moviesDetailApi(movieId)
    return data
    }
 const isEmpty = (ditails)=>{
        for(const x in ditails) {return true}
        return false
      }
const moviesApi = async (pageNumber) => {
         const data = await getMoviesList(pageNumber);
         return data
       };
   export{detailApi,isEmpty,moviesApi}