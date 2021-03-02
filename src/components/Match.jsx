import React from 'react';

const Match = ({ match }) => {
	

	return (
		<div className='match-items'>
			<div>
				<p>{match.score}</p>
			</div>
		</div>
	);
};

export default Match;
