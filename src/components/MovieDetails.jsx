import React from 'react'
import { Link} from 'react-router-dom'
import img from '../assets/images/611ixoDpRLL 1.png'

export default function MovieDetails() {
  return (
    <div className="detail"> 
      <div className="top-search-bar">
        <Link to="movies"> Back</Link>
        <div>
          <p>Guardians of the Galaxy</p><p>All heroes start somewhere.</p>
          </div>
      </div>
      <div className="details-movies">
        <img src={img} alt="dd" />
        <div className='details-wrapper'>
            <div className="detail-items"><span>Budget</span><span>$740'050'3</span></div>
            <div className="detail-items"><span>Revenue</span><span>$740'050'3</span></div>
            <div className="detail-items"><span>Release Date</span><span>2014-07-30</span></div>
            <div className="detail-items"><span>Runtime</span><span><span>2h </span>1m</span></div>
            <div className="detail-items"><span>Score</span><span>7.9(23563 votes)</span></div>
            <div className="detail-items"><span>Genres</span><span>action,comedy,fan</span></div>
            <div className="detail-items link-item"><span>IMDB Link</span><Link to={{ pathname: "https://www.themoviedb.org/" }} target={"_blank"} >Link</Link></div>
            <div className="detail-items link-item"><span>Homepage Link</span><Link to="movies">Link</Link></div>
        </div>
      </div>
      <p className='review'>Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser. Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser. Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.</p>
      <div className="footer">
        <p>Credit:</p>
        <p>Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace , Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace and 19 more.</p>
      </div>
     </div>
  )
}

