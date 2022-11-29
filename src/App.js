import { Route, Routes, Navigate } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import "./App.scss";

function App() {
  return (
    <>
      <header></header>
      <div className="App">
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          {/* <Route path="/https://www.themoviedb.org" to="https://www.themoviedb.org/"  /> */}
          <Route path="/*" element={<Navigate to="/movies" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
