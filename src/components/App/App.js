import React, { useState, useCallback } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const search = useCallback((term) => {

  }, []);
  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }, [playlistTracks]
  );
  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);
  const savePlaylist = useCallback(() => {

  }, [playlistName, playlistTracks]);
  return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className='App'>
        <SearchBar
        onSearch={search}
        />
        <div className='App-playlist'>
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
