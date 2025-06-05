import React from 'react';

function Track(props) {
    const { name, artist, album } = props.track;

    return (
        <>
            <p>{name} by {artist} from {album}</p>
            <button onClick={() => props.onAdd(props.track)}>+</button>
        </>
    )
}

export default Track;