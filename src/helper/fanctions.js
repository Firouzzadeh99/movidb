import { moviesDetailApi,getMoviesList } from "../services/api"

const detailApi = async(movieId)=>{
    const data = await moviesDetailApi(movieId)
    return data
    }
const moviesApi = async (pageNumber) => {
         const data = await getMoviesList(pageNumber);
         return data
       };
    export{detailApi,moviesApi}