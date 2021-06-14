import React, {
	useContext,
	useState,
	useMemo,
	useRef,
	useCallback,
} from 'react';
import Search from './Search';
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
	const [search, setSearch] = useState('');
	//ponemos dentro values de inputs para ser usados
	const searchInput = useRef(null);

	const handleMatchDate = () => {
		setGames(!allGames);
		if (allGames) {
			dateLastMonthShowDate();
		}
	};
	const showAllGames = () => {
		setShow(!toggle);
	};
	const handleSearch = useCallback(
		() => {
			setSearch(searchInput.current.value);
		},
		//requiere este elemento que useCallback va escuchar y solo va escuchar otra vez cuando este elemento cambie. Pero lo ponemos vacio para poder usar el hook (no usamos este elemento)
		[]
	);

	//cuando cambie characters o/y cambie search useMemo recordará

	const filterPlayers = useMemo(
		() =>
		matches.filter((players) => {
				// con includes compara si search (estado actual de input es igual al valor del input user.name)
				return players.playerHome.toLowerCase().includes(search.toLowerCase());
			}),
		[matches,search]
	);

	return (
		<div className='container'>
			<div className='score'>
				<nav>
					<button
						className='score-lastMonth'
						type='button'
						onClick={handleMatchDate}
					>
						Last Month
					</button>

					<Search
						search={search}
						searchInput={searchInput}
						handleSearch={handleSearch}
					/>

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
					? filterPlayers.map((match) => {
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
