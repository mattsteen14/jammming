import React, { useCallback } from "react";
import styles from "./Track.module.css";

const Track = (props) => {
    const passTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );
    const passTrackToRemove = useCallback(
        (event) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track]
    );
    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button
                    className={styles['Track-action']}
                    onClick={passTrackToRemove}
                >
                    -
                </button>
            )
        } else {
            return (
                <button
                    className={styles['Track-action']}
                    onClick={passTrack}
                >
                    +
                </button>
            )
        };
    }
    return (
        <div className={styles.Track}>
            <div className={styles['Track-information']}>
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
                <audio
                    controls
                    src={props.track.preview}
                >
                </audio> {/* New Audio Tag */}
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;