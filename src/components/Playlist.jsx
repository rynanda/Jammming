import React from "react";
import TrackList from "./TrackList.jsx";

function Playlist(props) {
    return (
        <>
            <h3>{props.name}</h3>
            <TrackList tracks={props.tracks} onRemove={props.onRemove} type='playlist' />
        </>
    )
}

export default Playlist;