import React from 'react';

const SearchResult = ({close ,movies}) => {
    return (
        <div>
            <div>
                <img className='w-72 h-40' src={movies} />
            </div>
        </div>
    );
}

export default SearchResult;
