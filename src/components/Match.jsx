import React, { useState } from 'react';

import purpleRightArrow from '../img/chevron-right-purple.svg';

import ModalUpdateMatch from './ModalUpdateMatch';

const Match = ({ match, actionDeleteMatch, SlideDown, animateArrow }) => {
	const [toggle, setShow] = useState(false);
	
	const winnerPlayer = (e) =>{
		setShow(!toggle);
		// Quiero animar cada una de las arrow pasandole a la funcion la var de tipo useState, la imagen al cual clico y si mando un false para indentificar que es la arrow de macthes
		animateArrow(toggle, e.target, false);		
	}
	
	return (
		<div className='match-items'>
			<div className='match-items-layout'>
				<div>
					<p>
						Players: {match.playerHome} vs {match.playerOut}
					</p>
					<p> Score: {match.score}</p>
				</div>
				<ModalUpdateMatch match={match} />
				<div onClick={actionDeleteMatch(match)}>
					<i className='fas fa-trash-alt' />
				</div>
				<div
					className='score-player-animate'
					onClick={winnerPlayer}
				>
					<img src={purpleRightArrow} alt='arrow' />
				</div>
			</div>
			<SlideDown>
				{toggle && (
					<p className='match-items-styleWinner'>
						The {match.winner} player is the winner
					</p>
				)}
			</SlideDown>
		</div>
	);
};

export default Match;
