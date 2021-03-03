import React,{useState} from 'react';
import purpleRightArrow from '../img/chevron-right-purple.svg';
import purpleDownArrow from '../img/chevron-down-purple.svg';

const MatchNotLastMonth = ({ matchNotLastMonth }) => {
	const [toggle, setShow] = useState(false);

	return (
		<div className='match-items'>
			<div>
				<div>
					<p>
						{matchNotLastMonth.playerHome} vs {matchNotLastMonth.playerOut}
					</p>
					<p>{matchNotLastMonth.score}</p>
				</div>
				<div>
					<img  onClick={() => setShow(!toggle)} src={!toggle ? purpleRightArrow : purpleDownArrow} alt='arrow' />
				</div>
			</div>
			{toggle && <p>The {matchNotLastMonth.winner} player is the winner</p>}
		</div>
	);
};

export default MatchNotLastMonth;
