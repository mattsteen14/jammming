import React from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";

const TrackList = (props) => {
    return (
        <div className={styles.TrackList}>
            {/* {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                    />
                );
            })} */}
        </div>
    );
};

export default TrackList;