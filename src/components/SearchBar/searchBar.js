import React from "react";
import SearchIcon from "../icons/searchIcon";
import './searchBar.css';

const SearchBar = ({ placeholder }) => {
    return (
        <div className="search-bar d-flex align-items-center">
            <SearchIcon />
            <input placeholder={placeholder} className="search-bar__input secondary-text-color"></input>
        </div>
    )
}

export default SearchBar;
