import React from "react";
import { Link } from "react-router-dom";

export default function Paginate({ pageNumber,setBlurMoviesWrappper}) {
  return (
    <footer>
      <div>
        {pageNumber > 1 ? (
          <Link to={`/movie/page=${pageNumber > 1 ? pageNumber - 1 : 1}`} onClick={setBlurMoviesWrappper}>
             Previous Page 
          </Link>
        ) : (
          <span className="isDisabled">Previous Page</span>
        )}
        |
        {pageNumber < 20 ? (
          <Link to={`/movie/page=${pageNumber + 1}`} onClick={setBlurMoviesWrappper}>Next Page</Link>
        ) : (
          <span className="isDisabled">Next Page</span>
        )}
        <p>Showing results {pageNumber} - 20</p>
      </div>
    </footer>
  );
}
