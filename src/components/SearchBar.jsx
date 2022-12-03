import React from 'react'

export default function SearchBar({handelSearchFilterInput}) {
  return (
    <div className="search">
         <div className="search-box">
        <p>Search by release date:</p>
        <input type="text" onChange={handelSearchFilterInput} />
         </div>
        <div className="search-btn">Search</div>
    </div>
   )
}
