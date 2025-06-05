import React from 'react';

function Track(props) {
    const { name, artist, album } = props.track;

    return (
        <>
            <p>{name} by {artist} from {album}</p>
            {props.type === 'search' && <button onClick={() => props.onAdd(props.track)}>+</button>}
            {props.type === 'playlist' && <button onClick={() => props.onRemove(props.track)}>-</button>}
        </>
    )
}

export default Track;