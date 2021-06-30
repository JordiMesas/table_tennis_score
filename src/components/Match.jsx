import React, { useState} from 'react';

import purpleRightArrow from '../img/chevron-right-purple.svg';
import purpleDownArrow from '../img/chevron-down-purple.svg';

import ModalUpdateMatch from './ModalUpdateMatch';

const Match = ({ match, actionDeleteMatch}) => {
	const [toggle, setShow] = useState(false);
	
	return (
		<div className='match-items'>
			<div className='match-items-layout'>
				<div>
					<p>
						Players: {match.playerHome} vs {match.playerOut}
					</p>
					<p> Score: {match.score}</p>
				</div>				
				<ModalUpdateMatch match={match}/>				
				<div  onClick={ actionDeleteMatch(match) }>					
					<i className="fas fa-trash-alt" />
				</div>
				<div >
					<img onClick={() => setShow(!toggle)} src={!toggle ? purpleRightArrow : purpleDownArrow} alt='arrow' />
				</div>				
			</div>
				{toggle && <p className="match-items-styleWinner">The {match.winner} player is the winner</p>}
			
		</div>
	);
};

export default Match;
