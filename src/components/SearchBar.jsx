import React, {useState} from 'react';
import SearchResults from "./SearchResults.jsx";

function SearchBar() {
    const [search, setSearch] = useState('');
    const [input, setInput] = useState('');
    const [showResults, setShowResults] = useState(false);

    function handleInput(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSearch(input);
        setShowResults(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id="search" type="text" onChange={handleInput} placeholder={"Track Name"}/>
                <button type="submit">Search</button>
            </form>
            {showResults && (<SearchResults search={search}/>)}
        </>
    )
}

export default SearchBar;