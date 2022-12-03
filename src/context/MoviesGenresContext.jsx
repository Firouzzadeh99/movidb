import React, {useState, useEffect, createContext}from 'react'
import { getMoviesGenres } from '../services/api'

export const genreContext =  createContext()
export default function MoviesGenresContext({children}) {
    const [genres, setgenres] = useState([])
    useEffect(()=>{
        const fetchApi = async() =>{
           setgenres(await getMoviesGenres()) 
        }
        fetchApi()
     },[])
  return (
    <genreContext.Provider value={genres}>
        {children}
    </genreContext.Provider>
   )
}
