import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link} from 'react-router-dom'
 import { moviesDetailApi } from '../services/api'

export default function Movieditails() {
  const [ditails, setditails] =useState([])
  const movieId = useParams()
  
  useEffect(()=>{
    const DetailApi = async(movieId)=>{
     const data = await moviesDetailApi(movieId)
     setditails(data)
    }
   DetailApi(movieId.id)
   console.log(ditails)
   },[])
   return (
    <div className="detail"> 
      <div className="top-search-bar">
        <Link to="/movies"> Back</Link>
        <div>
          <p>Guardians of the Galaxy</p><p>All heroes start somewhere.</p>
          </div>
      </div>
      <div className="ditails-movies">
        <img src={`https://image.tmdb.org/t/p/w500/${ditails.backdrop_path}`} alt="dd" />
        <div className='ditails-wrapper'>
            <div className="detail-items"><span>Budget</span><span>${ditails.budget  ? ditails.budget.toLocaleString() : 0}</span></div>
            <div className="detail-items"><span>Revenue</span><span>${ditails.revenue ? ditails.revenue.toLocaleString() : 0}</span></div>
            <div className="detail-items"><span>Release Date</span><span>{ditails.release_date}</span></div>
            <div className="detail-items"><span>Runtime</span><span><span>{Math.floor(ditails.runtime / 60)}h </span><span>{ditails.runtime%60}m</span></span></div>
            <div className="detail-items"><span>Score</span><span>{ditails.vote_average}({ditails.popularity} votes)</span></div>
            <div className="detail-items"><span>Genres</span>
              <span className="genre-items">
                {
                 ditails.genres && ditails.genres.map((genre,index)=><span style={{color:"#151515 !important"}}>{index=== 0 ?`${genre.name}`: `,${genre.name}`}</span>)
                }
              </span>
              </div>
            <div className="detail-items link-item"><span>IMDB Link</span><Link to={{ pathname: "https://www.themoviedb.org/" }} target={"_blank"} >Link</Link></div>
            <div className="detail-items link-item"><span>Homepage Link</span><Link to="movies">Link</Link></div>
        </div>
      </div>
      <p className='review' style={{marginTop:"60px",lineHeight:"27px",color:"#dddddd"}}>overview: {ditails.overview}</p>
      <div className="footer">
        <p style={{margin:"60px 0 15px 0",color:"#dddddd"}}>Credit:</p>
        <p style={{marginBottom:"60px",color:"#dddddd"}}>Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace , Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace and 19 more.</p>
      </div>
     </div>
  )
}

