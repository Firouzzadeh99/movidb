import React from 'react'

const SearchBar = ({handelSearchFilterInput})=> {
  return (
    <div className="search">
         <div className="search__box">
        <p>Search by release date:</p>
        <input type="text" onChange={handelSearchFilterInput} />
         </div>
        <div className="search__btn">Search</div>
    </div>
   )
}
export default React.memo(SearchBar)
