import React from 'react';

import TrackList from "./TrackList.jsx";

function SearchResults(props) {
    return (
        <>
            <h3>Results: </h3>
            {props.search && <TrackList search={props.search}/>}
        </>
    )
}

export default SearchResults;