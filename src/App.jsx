import React, {useState} from 'react';
import SearchResults from "./components/SearchResults.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Playlist from "./components/Playlist.jsx";

// import './App.css'

function App() {
    const [search, setSearch] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [playlistName, setPlaylistName] = useState("Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);

    function onAdd(track) {
        if (playlistTracks.filter((existing) => existing.id === track.id).length === 0) {
            setPlaylistTracks([...playlistTracks, track]);
        } else {
            alert(`${track.name} is already added to the playlist!`);
        }
    }

    function onRemove(track) {
        setPlaylistTracks((tracks) => tracks.filter((existing) => existing.id !== track.id));
    }

    return (<>
        <SearchBar search={search} setSearch={setSearch} setHasSearched={setHasSearched}/>
        {hasSearched ? (<SearchResults search={search} onAdd={onAdd}/>) : (<SearchResults/>)}
        <Playlist name={playlistName} tracks={playlistTracks} onRemove={onRemove}/>
    </>)
}

export default App
