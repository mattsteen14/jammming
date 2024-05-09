import React, { useState, useCallback } from 'react';
import styles from "./App.module.css";
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div>
      <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      <div className={styles.App}>
        <SearchBar
        />
        <div className={styles['App-playlist']}>
          <SearchResults
            searchResults={searchResults}
          />
          <Playlist
          />
        </div>
      </div>
    </div>
  );
};

export default App;


// {
//   name: "Circles",
//   artist: "Incubus",
//   album: "Morning View",
//   id: 1,
// },
// {
//   name: "Even Flow",
//   artist: "Pearl Jame",
//   album: "Ten",
//   id: 2,
// }