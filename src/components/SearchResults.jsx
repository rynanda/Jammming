import React, {useEffect, useState} from 'react';
import {mockSpotifyData} from "./mockSpotifyData.js";

import TrackList from "./TrackList.jsx";

function SearchResults(props) {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        setTracks(mockSpotifyData.filter(track => track.trackName.toLowerCase().includes(props.search)));
    }, [props.search]);

    return (
        <>
            <h3>Results: </h3>
            <TrackList tracks={tracks} />
        </>
    )
}

export default SearchResults;