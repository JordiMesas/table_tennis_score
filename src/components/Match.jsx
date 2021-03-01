import React, { useState} from 'react';

const Match = ({matchs}) => {
	const [toggle, setShow] = useState(true);	

	return (
		<div className='container'>
			
			<div className='score'>
				<ul className='score-lastMonth'>
					<li>Last month</li>
				</ul>				
				<button type='button' onClick={()=>setShow(!toggle)}>Toogle</button>

				{toggle ? matchs.map((match) => {return ( <div key={match.id}><p>{match.score}</p></div>)}) : null}
			</div>
			
		</div>
	);
};

export default Match;