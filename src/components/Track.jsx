import React from 'react';

function Track(props) {
    const { trackName, artist, album } = props.track;

    return (
        <>
            <p>{trackName} by {artist} from {album}</p>
        </>
    )
}

export default Track;