import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link} from 'react-router-dom'
import Loader from './Loader'
import { detailApi,isEmpty } from '../helper/fanctions'
 
export default function Movieditails() {
  const [ditails, setditails] =useState([])
   const params = useParams()
  const movieId = params.id.split("_")
  // <<<<<<<<<=================     Check the data is empty for display Spinner    ======================>>>>>>>> 
  const empty = isEmpty(ditails)
    useEffect(()=>{
// <<<<<<<<<=================    get movieDitils from api    ======================>>>>>>>> 
   detailApi(movieId[1])
   .then((ditils) => {
     setditails(ditils)
   })
    },[])

    return (
    <div className="ditail"> 
        <div className="ditail__search">
        <Link to={`/movie/page=${movieId[0]}`}> Back</Link>
        <div>
          <p>Guardians of the Galaxy</p><p>All heroes start somewhere.</p>
          </div>
      </div>
        {
          empty ?
          (
            <>
      <div className="ditail__movies">
             <img loading="lazy" src={`https://image.tmdb.org/t/p/w500/${ditails.backdrop_path}`}alt="poster" />
         <div className='ditail__movies-wrapper'>
            <div className="ditail__movies-items"><span>Budget</span><span>${ditails.budget  ? ditails.budget.toLocaleString() : 0}</span></div>
            <div className="ditail__movies-items"><span>Revenue</span><span>${ditails.revenue ? ditails.revenue.toLocaleString() : 0}</span></div>
            <div className="ditail__movies-items"><span>Release Date</span><span>{ditails.release_date}</span></div>
            <div className="ditail__movies-items"><span>Runtime</span><span><span>{Math.floor(ditails.runtime / 60)}h </span><span>{ditails.runtime%60}m</span></span></div>
            <div className="ditail__movies-items"><span>Score</span><span>{ditails.vote_average}({ditails.popularity} votes)</span></div>
            <div className="ditail__movies-items"><span>Genres</span>
              <span className="genre-items">
                {
                 ditails.genres && ditails.genres.map((genre,index)=><span style={{color:"#151515 !important"}}>{index=== 0 ?`${genre.name}`: `,${genre.name}`}</span>)
                }
              </span>
              </div>
            <div className="ditail__movies-items ditail__movies-items--link"><span>IMDB Link</span><Link to={{ pathname: "https://www.themoviedb.org/" }} target={"_blank"} >Link</Link></div>
            <div className="ditail__movies-items ditail__movies-items--link"><span>Homepage Link</span><Link to="movies">Link</Link></div>
        </div>
      </div>
      <p className='ditail__review' style={{marginTop:"60px",lineHeight:"27px",color:"#dddddd"}}>overview: {ditails.overview}</p>
      <div className="ditail__footer">
        <p style={{margin:"60px 0 15px 0",color:"#dddddd"}}>Credit:</p>
        <p style={{marginBottom:"60px",color:"#dddddd"}}>Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace , Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace and 19 more.</p>
      </div>
            </>
          ) : (<div style={{margin:" 50px 0 0 50%"}}><Loader /></div>)
        }
     </div>
  )
}

