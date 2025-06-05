import React, {useState} from 'react';

function SearchBar(props) {
    const [input, setInput] = useState('');

    function handleInput(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.setSearch(input);
        props.setHasSearched(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id="search" type="text" onChange={handleInput} placeholder={"Track Name"}/>
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchBar;