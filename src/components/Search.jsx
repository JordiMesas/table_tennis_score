import React from 'react';

const Search = ({search, searchInput,handleSearch}) => {
	return (
		<div className="score-search">
            <h5>Search by player name:</h5>
			<input                                
				type='text'
				value={search}
				ref={searchInput}
				onChange={handleSearch}
			/>
		</div>
	);
};
export default Search;