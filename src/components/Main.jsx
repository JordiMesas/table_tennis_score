import React, { useContext,useState } from 'react';
import Match from './Match';
import MatchNotLastMonth from './MatchNotLastMonth';
import Appcontext from '../context/AppContext';

const Main = () => {
	const [toggle, setShow] = useState(false);
	const [allGames, setGames] = useState(true);
	const { state, dateLastMonthShowDate} = useContext(Appcontext);	
	const { matches, matchesNotLastMonth } = state;

	const handleMatchDate = () => {
		setGames(!allGames);
		if(allGames){
			dateLastMonthShowDate();			
		}						
	};
	const showAllGames = () =>{
		setShow(!toggle);					
	}
	console.log(matchesNotLastMonth);
	return (
		<div className='container'>
			<div className='score'>
				<ul className='score-lastMonth'>
					<li>Last month</li>
					<li onClick={handleMatchDate}> {'>'} </li>
				</ul>
				<ul className='score-lastMonth'>
					<li>all the games</li>
					<li onClick={showAllGames}> {'>'} </li>
				</ul>

				{			

				toggle

					? matches.map((match) => {return (<Match key={match.id} match={match}/>	); })

					: null			  					
					
				}

				{
					allGames &&
					matchesNotLastMonth.map((matchNotLastMonth) => {return ( <MatchNotLastMonth key={matchNotLastMonth.id} matchNotLastMonth={matchNotLastMonth}/> ); })
				}
				
			</div>
			
		</div>
	);
};

export default Main;
