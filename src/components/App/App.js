import React, { useState, useCallback } from 'react';
import styles from "./App.module.css";
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

const App = () => {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Example Track Name 1",
      artist: "Example Track Artist 1",
      album: "Example Track Album 1",
      id: 1,
    },
    {
      name: "Example Track Name 2",
      artist: "Example Track Artist 2",
      album: "Example Track Album 2",
      id: 2,
    },
    {
      name: "Example Track Name 3",
      artist: "Example Track Artist 3",
      album: "Example Track Album 3",
      id: 3,
    },
    {
      name: "Example Track Name 4",
      artist: "Example Track Artist 4",
      album: "Example Track Album 4",
      id: 4,
    },
  ]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);
  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }, [playlistTracks]
  );
  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
  );
  }, [])
  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);
  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);
  
  return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      <div className={styles.App}>
        <SearchBar
        onSearch={search}
        />
        <div className={styles['App-playlist']}>
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;