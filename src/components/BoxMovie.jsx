import React from "react";
import { Link } from "react-router-dom";
import { Card, Box, Typography } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
 

const BoxMovie = ({ pageNumber, genre_ids, id, title, backdrop_path, release_date, genres }) => {
  let genresList
  if (genres.length) {
    genresList = genres.filter((genre) => {
      return genre_ids.includes(genre.id)
    })
  }
  return (
    <Card sx={{ height: "200px", boxShadow: "0 54px 55px rgb(0 0 0 / 25%), 0 -0.7rem 30px rgb(0 0 0 / 12%), 0 4px 0.6rem rgb(0 0 0 / 12%), 0 0.7rem 13px rgb(0 0 0 / 17%), 0 -3px 5px rgb(0 0 0 / 9%)", }}>
      <Link style={{ display: "flex" }} to={`/movieditail/${pageNumber}_${id}`}>
        <img style={{ width: "160px", height: "100%" }} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} loading="lazy" />
        <Box sx={{ p: 1, overflow: "auto", }} >
          <Typography color="black" sx={{ fontSize: "14px", fontWeight: "600" }}> {title.length > 19 ? title.split(",")[0] : title}</Typography>
          <Box display="flex" sx={{ mt: 8 }}>
            <CalendarTodayIcon sx={{color:"#505050", fontSize:20,mt:1}}/>
             <Typography sx={{ mx: 1, color: "#505050", mt: 1, fontSize: "14px" }}>{release_date}</Typography>
          </Box>
          <ul style={{ margin: "6px 3px", color: "#505050", display: "flex", flexWrap:"wrap", justifyContent: "flex-start", fontSize: "14px" }} >
            {
              genresList ? genresList.map(genre => <li style={{ margin: "0 10px"  }} key={genre.id}><span></span> {genre.name}</li>) : <>..</>
            }
          </ul>
        </Box>
      </Link>
    </Card>
  )
}
export default BoxMovie