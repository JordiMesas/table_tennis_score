import React, { useContext } from 'react';
import Match from './Match';
import Appcontext from '../context/AppContext';

const Main = () => {
	const { state } = useContext(Appcontext);
	const { matchs } = state;



	return (
		<div className='container'>
			<Match matchs={matchs} />
		</div>
	);
};

export default Main;
