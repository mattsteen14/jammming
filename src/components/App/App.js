import React, { useState, useCallback } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  return (
    <>
      <h1>Jammming</h1>
      <button>Search{<SearchBar />}</button>
      <SearchResults />
      <Playlist />
      <button>Save To Spotify</button>
    </>
  );
}

export default App;
