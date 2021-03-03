import React, { useContext, useState } from 'react';
import Match from './Match';
import MatchNotLastMonth from './MatchNotLastMonth';
import Appcontext from '../context/AppContext';
import blackRightArrow from '../img/chevron-right-black.svg';
import blackDownArrow from '../img/chevron-down-black.svg';

const Main = () => {
	const [toggle, setShow] = useState(false);
	const [allGames, setGames] = useState(true);
	const { state, dateLastMonthShowDate } = useContext(Appcontext);
	const { matches, matchesNotLastMonth } = state;

	const handleMatchDate = () => {
		setGames(!allGames);
		if (allGames) {
			dateLastMonthShowDate();
		}
	};
	const showAllGames = () => {
		setShow(!toggle);
	};

	return (
		<div className='container'>
			<div className='score'>
				<nav>
					<button className="score-lastMonth" type='button' onClick={handleMatchDate}>
						Last Month
					</button>

					<ul className='score-allGames'>
						<li>all the games</li>
						<li className='score-allGames-animate' onClick={showAllGames}>
							{' '}
							<img
								src={!toggle ? blackRightArrow : blackDownArrow}
								alt='arrow'
							/>{' '}
						</li>
					</ul>
				</nav>

				{toggle
					? matches.map((match) => {
							return <Match key={match.id} match={match} />;
					  })
					: null}

				{allGames &&
					toggle &&
					matchesNotLastMonth.map((matchNotLastMonth) => {
						return (
							<MatchNotLastMonth
								key={matchNotLastMonth.id}
								matchNotLastMonth={matchNotLastMonth}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Main;
