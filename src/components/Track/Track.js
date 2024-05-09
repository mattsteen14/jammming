import React, { useCallback } from "react";
import styles from "./Track.module.css";

const Track = (props) => {
    const renderAction = () => {
        return <button className={styles["Track-action"]}>
            {props.isRemoval ? "-" : "+"}
        </button>
    }
    return (
        <div className={styles.Track}>
            <div className={styles['Track-information']}>
                <h3></h3>
                <p></p>
            </div>
        </div>
    )
}

export default Track;