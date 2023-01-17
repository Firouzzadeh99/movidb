import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Typography} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router-dom'
import SkeletonInfo from './Skeleton/SkeletonInfo'
import { moviesDetailApi } from '../services/api'
import { Link } from 'react-router-dom'


const Movieditails = () => {
  const [ditails, setditails] = useState([])
  const [imgLoad, setImgLoad] = useState(false)
  const params = useParams()
  const movieId = params.id.split("_")
  useEffect(() => {
    moviesDetailApi(movieId[1])
      .then(res => res.json())
      .then((res) => {
        setditails(res)
      })

  }, [])

  return (
    <Grid container sx={{ display: "flex", flexDirection: "column", my: 2 }}>
      <Box sx={{ backgroundColor: "#4d6c4f", p: 2, borderRadius: "5px", display: "flex",my:5 }}>
        <Button sx={{backgroundColor:"#25a92e",color:"#fff",mx:3,px:2 }}><Link to={`/movie/page=${movieId[0]}`}><ArrowBackIcon sx={{verticalAlign:"middle",fontSize:"20px",mr:0.5}} />Back</Link></Button>
        <Box>
          <Typography color="#ddd">Guardians of the Galaxy</Typography><Typography color="#ddd">All heroes start somewhere.</Typography>
        </Box>
      </Box>
      {
        Object.keys(ditails).length ?
          (
            <>
              <Grid container display="flex">
                {
                  imgLoad ? <div>img loading...</div> : <Grid item xs={6} md={4} ><img loading="lazy" width="200px" height="450px" onLoad={setImgLoad(!imgLoad)} src={`https://image.tmdb.org/t/p/w500/${ditails.backdrop_path}`} alt="poster" /></Grid>
                }

                <Grid item xs={6} md={8} sx={{ml:2}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",my:1.5}}><Typography color="#ddd">Budget</Typography><Typography color="#ddd">${ditails.budget ? ditails.budget.toLocaleString() : 0}</Typography></Box>
                  <Box sx={{display:"flex",justifyContent:"space-between",my:1.5}}><Typography color="#ddd">Revenue</Typography><Typography color="#ddd">${ditails.revenue ? ditails.revenue.toLocaleString() : 0}</Typography></Box>
                  <Box sx={{display:"flex",justifyContent:"space-between",my:1.5}}><Typography color="#ddd">Release Date</Typography><Typography color="#ddd">{ditails.release_date}</Typography></Box>
                  <Box sx={{display:"flex",justifyContent:"space-between",my:1.5}}><Typography color="#ddd">Runtime</Typography><Typography><Typography color="#ddd">{Math.floor(ditails.runtime / 60)}h </Typography><Typography color="#ddd">{ditails.runtime % 60}m</Typography></Typography></Box>
                  <Box sx={{display:"flex",justifyContent:"space-between",my:1.5}}><Typography color="#ddd">Score</Typography><Typography color="#ddd">{ditails.vote_average}({ditails.popularity} votes)</Typography></Box>
                  <Box sx={{display:"flex",justifyContent:"space-between",my:1.5}}><Typography color="#ddd">Genres</Typography>
                    <Box >
                      {
                        ditails.genres && ditails.genres.map((genre, index) => <Typography key={genre.id} sx={{ color: "#ddd !important",display:"inline" }}>{index === 0 ? `${genre.name}` : `,${genre.name}`}</Typography>)
                      }
                    </Box>
                  </Box>
                  <Box sx={{display:"flex",justifyContent:"space-between",my:1.5}}><Typography color="#ddd">IMDB Link</Typography><Link to={{ pathname: "https://www.themoviedb.org/" }} target={"_blank"} >Link</Link></Box>
                  <Box sx={{display:"flex",justifyContent:"space-between"}} ><Typography color="#ddd">Homepage Link</Typography><Link to="movies">Link</Link></Box>
                </Grid>
              </Grid>
              <p className='ditail__review' style={{ marginTop: "60px", lineHeight: "27px", color: "#dddddd" }}>overview: {ditails.overview}</p>
              <div className="ditail__footer">
                <p style={{ margin: "60px 0 15px 0", color: "#dddddd" }}>Credit:</p>
                <p style={{ marginBottom: "60px", color: "#dddddd" }}>Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace , Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace and 19 more.</p>
              </div>
            </>
          ) : <SkeletonInfo />
      }
    </Grid>
  )
}

export default Movieditails