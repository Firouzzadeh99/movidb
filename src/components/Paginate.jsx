import React from "react";
import { Link } from "react-router-dom";

const Paginate = ({ pageNumber,handelPagenate})=> {
  return (
    <footer>
      <div>
        {pageNumber > 1 ? (
          <Link to={`/movie/page=${pageNumber > 1 ? pageNumber - 1 : 1}`} onClick={handelPagenate}  >
             Previous Page 
          </Link>
        ) : (
          <span className="isDisabled">Previous Page</span>
        )}
        |
        {pageNumber < 20 ? (
          <Link  to={`/movie/page=${pageNumber + 1}`} onClick={handelPagenate} >Next Page</Link>
        ) : (
          <span className="isDisabled">Next Page</span>
        )}
        <p>Showing results {pageNumber} - 20</p>
      </div>
    </footer>
  );
}
export default React.memo(Paginate)