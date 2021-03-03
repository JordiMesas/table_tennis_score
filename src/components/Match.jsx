import React, { useState } from 'react';
import purpleRightArrow from '../img/chevron-right-purple.svg';
import purpleDownArrow from '../img/chevron-down-purple.svg';

const Match = ({ match }) => {
	const [toggle, setShow] = useState(false);

	return (
		<div className='match-items'>
			<div>
				<div>
					<p>
						{match.playerHome} vs {match.playerOut}
					</p>
					<p>{match.score}</p>
				</div>
				<div >
					<img onClick={() => setShow(!toggle)} src={!toggle ? purpleRightArrow : purpleDownArrow} alt='arrow' />
				</div>
			</div>
			{toggle && <p>The {match.winner} player is the winner</p>}
		</div>
	);
};

export default Match;
