import React from 'react';

const MatchNotLastMonth = ({ matchNotLastMonth }) => {
	

	return (
		<div className='matchNotLastMonth-items'>
			<div>
				<p>{matchNotLastMonth.score}</p>
			</div>
		</div>
	);
};

export default MatchNotLastMonth;