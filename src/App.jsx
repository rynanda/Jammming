import React, {useEffect, useState} from 'react';
import SearchResults from "./components/SearchResults.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Playlist from "./components/Playlist.jsx";

// import './App.css'

function App() {
    const [search, setSearch] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [playlistName, setPlaylistName] = useState("");
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const testPlaylist = {
        name: "test playlist", tracks: [{
            id: 3, name: "test track 1", artist: "test artist 1", album: "test album 1", added: true
        }, {
            id: 4, name: "test track 2", artist: "test artist 2", album: "test album 2", added: true
        }]
    }

    useEffect(() => {
        setPlaylistName(testPlaylist.name);
        setPlaylistTracks(testPlaylist.tracks);
    }, []);

    function onAdd(track) {
        if (playlistTracks.filter((existing) => existing.id === track.id).length === 0) {
            setPlaylistTracks([...playlistTracks, track]);
        } else {
            alert(`${track.name} is already added to the playlist!`);
        }
    }

    return (<>
        <SearchBar search={search} setSearch={setSearch} setHasSearched={setHasSearched}/>
        {hasSearched ? (<SearchResults search={search} onAdd={onAdd}/>) : (<SearchResults/>)}
        <Playlist name={playlistName} tracks={playlistTracks}/>
    </>)
}

export default App
