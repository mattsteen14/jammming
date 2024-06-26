import React, { useState, useCallback } from 'react';
import styles from "./App.module.css";
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState(''); // add state to hold confirmation message
  const [playlistUrl, setPlaylistUrl] = useState(''); // add state to hold playlist URL
  const [savedPlaylistName, setSavedPlaylistName] = useState(''); // Add state to hold saved playlist name
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
    Spotify.savePlaylist(playlistName, trackUris).then((url) => {
      setPlaylistUrl(url); // set the URL of the new playlist
      setConfirmationMessage(`Your new playlist saved successfully.`); // Set the confirmation message with the playlist name
      setSavedPlaylistName(playlistName); // Save the current playlist name
      setPlaylistName("New Playlist"); // Reset the playlist name
      setPlaylistTracks([]); // Clear the tracks
    });
  }, [playlistName, playlistTracks]);
  const clearSearchResults = useCallback(() => {
    setSearchResults([]);
  })
  return (
    <div>
      <h1>
        Ja<span className={styles["highlight"]}>mmm</span>ing
      </h1>
      <div
        className={styles.App}
      >
        <SearchBar
          onSearch={search}
        />
        {confirmationMessage && (
          <div className={styles.confirmationMessage}>
            <p>{confirmationMessage}</p>
            <a 
            href={playlistUrl} 
            target='_blank'
            rel='noopener noreferrer' 
            >
              Listen to it here - {savedPlaylistName}.
            </a>
            <button onClick={clearSearchResults}>
              CLEAR SEARCH RESULTS
            </button>
          </div>
        )}
        <div
          className={styles['App-playlist']}
        >
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