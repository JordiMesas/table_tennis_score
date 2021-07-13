import React, {
	useContext,
	useState,
	useMemo,
	useRef,
	useCallback,
} from 'react';
import Search from '../components/Search';
import Match from '../components/Match';
import Appcontext from '../context/AppContext';

import '../styles/slidedown.css';

import blackDownArrow from '../img/chevron-down-black.svg';

const Main = () => {
	const [toggle, setShow] = useState(true);
	const [allGames, setGames] = useState(true);
	const { state, dateLastMonthShowDate, removeMatch, animateArrow} = useContext(Appcontext);
	const { matches } = state;
	const [search, setSearch] = useState('');
	//ponemos dentro values de inputs para ser usados
	const searchInput = useRef(null);

	const handleMatchDate = () => {
		setGames(!allGames);		
		dateLastMonthShowDate(allGames);		
	};
	const showAllGames = () => {
		setShow(!toggle);
		//Pasamos como parametro la variable boleana de tipo useState y la variable de tipo de arrow
		const arrowNav = document.getElementsByClassName('score-allGames-animate')[0];
		animateArrow(toggle,arrowNav);		  		
	};
	const handleSearch = useCallback(
		() => {
			setSearch(searchInput.current.value);
		},
		//requiere este elemento que useCallback va escuchar y solo va escuchar otra vez cuando este elemento cambie. Pero lo ponemos vacio para poder usar el hook (no usamos este elemento)
		[]
	);

	//cuando cambie characters o/y cambie search useMemo recordará
	console.log(matches);
	console.log(state);
	const filterPlayers = useMemo(
		() =>
			matches.filter((players) => {
				// con includes compara si search (estado actual de input es igual al valor del input user.name)
				const typePlayers = {
					homePlayers: players.playerHome
						.toLowerCase()
						.includes(search.toLowerCase()),
					outPlayers: players.playerOut
						.toLowerCase()
						.includes(search.toLowerCase()),
				};

				if (typePlayers.homePlayers) {
					return typePlayers.homePlayers;
				} else {
					return typePlayers.outPlayers;
				}
			}),
		[matches, search]
	);

	const actionDeleteMatch = match => () =>{		
		removeMatch(match);
	}	

	return (
		<div className='container'>
			<div className='score'>
				<nav>
					<button
						className='score-lastMonth'
						type='button'
						onClick={handleMatchDate}
					>
						last month
					</button>

					<Search
						search={search}
						searchInput={searchInput}
						handleSearch={handleSearch}
					/>

					<ul className='score-allGames'>
						<li>all the games</li>
						<li className='score-allGames-animate' onClick={showAllGames}>							
														
							<img
								src= {blackDownArrow}
								alt='arrow'
							/>
							
						</li>
					</ul>
				</nav>
				
				
					{toggle
						? filterPlayers.map((match) => (<Match key={match.id} match={match} actionDeleteMatch={actionDeleteMatch} animateArrow={animateArrow}/>	))
						:  null}
				
				
			</div>
		</div>
	);
};

export default Main;
