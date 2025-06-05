import React, {useEffect, useState} from 'react';
import {mockSpotifyData} from "./mockSpotifyData.js";
import Track from "./Track.jsx";

function TrackList(props) {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        setTracks(mockSpotifyData.filter(track => track.trackName.toLowerCase().includes(props.search)));
    }, [props.search]);

    return (
        <>
            {tracks.map((track) => (
                <Track key={track.id} track={track} />
            ))}
        </>
    )
}

export default TrackList;