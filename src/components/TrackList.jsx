import React from 'react';
import Track from "./Track.jsx";

function TrackList(props) {
    return (
        <>
            {props.tracks.map((track) => (
                <Track key={track.id} track={track} />
            ))}
        </>
    )
}

export default TrackList;