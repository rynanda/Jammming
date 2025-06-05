import React, {useState} from 'react';
import SearchResults from "./components/SearchResults.jsx";
import SearchBar from "./components/SearchBar.jsx";

// import './App.css'

function App() {
    const [search, setSearch] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    return (
        <>
            <SearchBar search={search} setSearch={setSearch} setHasSearched={setHasSearched}/>
            {hasSearched ? (<SearchResults search={search}/>) : (<SearchResults/>)}
        </>
    )
}

export default App
