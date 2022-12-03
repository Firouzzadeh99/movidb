import React, {useEffect}from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Paginate from "./Paginate";
import BoxMovie from "./BoxMovie";
 
export default function Movies() {
  const params = useParams()
  const pageNumber = Number(params.page.split('=')[1])
  useEffect(()=>{
    console.log(pageNumber ,params)
  },[params])
  return (
    <>
       <SearchBar />
      <div className="movies-wrapper">
        <BoxMovie />
      </div>
      <Paginate 
      pageNumber={pageNumber}
      />
    </>
  );
}
