import React from 'react';
// enlaces a otra pagina
import { Link } from 'react-router-dom';
import trophy from '../img/trophy.svg';

const Header = () => {
	return (
		<div className='container'>
			<nav>
				<div>
					<div className='header-title'>
						<h1>Ping Pong Score</h1>
						<img src={trophy} alt='trophy' />
					</div>
					<div className='header-name'>
						<p>by Jordi Mesas del Rio</p>
					</div>
				</div>
				<div className='header-formHome'>					
					<Link to='/table_tennis_score'>
						<i className='fas fa-home' />
					</Link>
					<Link to='/MatchInformation'>
						<i className='fas fa-table-tennis'/>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Header;
