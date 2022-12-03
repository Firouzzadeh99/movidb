import React from "react";
import { useRoutes } from "react-router-dom";
import MoviesGenresContext from "./context/MoviesGenresContext";
import TopHeader from "./components/TopHeader";
import "./App.scss";
import routes from "./routes/routes";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <MoviesGenresContext>
           <TopHeader />
          <div className="App">{router}</div>
       </MoviesGenresContext>
    </>
  );
}

export default App;
