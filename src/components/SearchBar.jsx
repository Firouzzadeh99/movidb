import React from 'react'
import { Box, Button, Grid, Typography,Input } from '@mui/material'
  
const SearchBar = ({ handelSearchFilterInput }) => {
  return (
    <Grid container mt="40px" display="flex" justifyContent="space-between" alignItems="center" backgroundColor="#4d6c4f" height="4.6rem" sx={{ borderRadius: "10px", p: 2, }}>
        <Box display="flex">
         <Typography color="#ddd" sx={{mr:2,mt:0.5,}}  >Search by release date:</Typography>
         <Input placeholder="Search…" size="md" sx={{background:"#fff",borderRadius:"5px",p:0.2,outline:"none"}}
          onChange={handelSearchFilterInput}  />  
         </Box>
       <Button sx={{backgroundColor:"#25a92e",color:"#fff" }}>search</Button>
        
    </Grid>
  )
}
export default React.memo(SearchBar)
