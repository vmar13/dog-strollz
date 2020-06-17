import React from 'react'

const SearchBar = (props) => {
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" value={props.searchTerm} onChange={props.onChangeSearch} className="searchTerm" placeholder="Search by borough" />
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default SearchBar