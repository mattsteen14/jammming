import React, { useState, useCallback } from "react";

import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
    return (
        <div className={styles.SearchBar}>
            <input
            placeholder="Enter a Song, Album or Artist"
            />
            <button
            className={styles.SearchButton}
            >
                SEARCH
            </button>
        </div>
    );
};

export default SearchBar;