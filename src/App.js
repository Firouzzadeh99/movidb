import React from "react";
import { useRoutes } from "react-router-dom";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import "./App.scss";
import routes from "./routes/routes";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Container maxWidth="xl" sx={{backgroundColor:"#07483f",m:0,p:0}} >
        <Grid
          backgroundColor="#17684d"
          height="30px"
          sx={{ maxWidth: "1600px", margin: "0 auto " }}
        ></Grid>
        <div className="App">{router}</div>
      </Container>
    </>
  );
}

export default App;
