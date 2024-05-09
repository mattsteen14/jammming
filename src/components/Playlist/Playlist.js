import React, { useCallback } from "react";
import styles from "./Playlist.module.css";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
    return (
        <div className={styles.Playlist}>
            <input
                defaultValue={"New Playlist"}
            />
            <TrackList
            />
            <button 
            className={styles['Playlist-save']}
            >
                SAVE TO SPOTIFY
            </button>
        </div>
    )
}

export default Playlist;