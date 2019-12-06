import React, { useState } from 'react'
import './searchBar.css'
const dataSetPromise = fetch(process.env.REACT_APP_YOUTUBE_URL).then(result => result.json())

async function filterResults (searchQuery) {
    searchQuery = searchQuery.trim()
    const dataSet = await dataSetPromise
    return dataSet
        .filter(result => result.title.includes(searchQuery))
        .slice(0, 10)
}

function mapSearchResult (result, index, results) {
    return (
        <li key={index} className="results-list-item">
            {result.title}
        </li>
    )
}

function SearchBar () {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const search = (e) => {
        e.preventDefault()
        filterResults(searchQuery).then(setSearchResults)
    }

    return (
        <div>
            <form>
                <input type="text" onChange={e => setSearchQuery(e.target.value)} value={searchQuery}/>
                <button onClick={search}>Please Press ME!!!!</button>
            </form>

            <p>{searchQuery.toLowerCase()}</p>
            <ul className="results-list">
                {searchResults.map(mapSearchResult)}
            </ul>
        </div>
    )
}

export default SearchBar
