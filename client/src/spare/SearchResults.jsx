import React from 'react';

const SearchResults = ({searchResult}) => {
    return (
        <div 
        onClick={(e) => alert(`It's listed in ${searchResult.id}`)}>
            {searchResult.name}
        </div>
    );
}

export default SearchResults;