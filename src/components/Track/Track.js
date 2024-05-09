import React, { useCallback } from "react";
import styles from "./Track.module.css";

const Track = (props) => {
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );
    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button 
                className={styles.TrackAction}
                >
                    -
                </button>
            )
        }
        return (
            <button 
            className={styles.TrackAction}
            >
                +
            </button>
        )
    }
    return (
        <div className={styles.Track}>
            <div className={styles.TrackInformation}>
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
        </div>
    )
}

export default Track;