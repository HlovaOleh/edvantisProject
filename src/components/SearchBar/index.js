import React from "react";
import PropTypes from 'prop-types';
import SearchIcon from "../icons/searchIcon";
import styles from './searchBar.module.css';

const SearchBar = ({ placeholder }) => {
    return (
        <div className= {`${styles.searchBar} d-flex align-items-center`}>
            <SearchIcon />
            <input placeholder={placeholder} className={`${styles.input} secondary-text-color`}></input>
        </div>
    )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired
};

export default SearchBar;
