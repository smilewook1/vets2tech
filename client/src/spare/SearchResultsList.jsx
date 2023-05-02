import React from 'react'
import SearchResults from './SearchResults'

const SearchResultsList = ({searchResults}) => {
    return (
        <div>
            {searchResults.map((result, id) => {
                return <SearchResults searchResult={result} key={id}/>
                
            })}
        </div>
    )
}

export default SearchResultsList