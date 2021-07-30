import React from 'react';
//filtro
const Search = ({search, searchInput,handleSearch}) => {
	return (
		<div className="score-search">
            <h5>player name:</h5>
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