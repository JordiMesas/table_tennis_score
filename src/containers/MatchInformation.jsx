import React, { useContext, useRef } from 'react';
import Appcontext from '../context/AppContext';

const MatchInformation = () => {
	const { addToMatch } = useContext(Appcontext);
	const form = useRef(null);

	const handleSubmit = () => {
		const formData = new FormData(form.current);
		const player = {
			id: formData.get('id'),
			date: formData.get('date'),
			playerHome: formData.get('playerHome'),
			playerOut: formData.get('playerOut'),
			score: formData.get('score'),
			winner: formData.get('winner'),
		};
		addToMatch(player);
	};

	const effectFormValidateDate = () => {
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1; //January is 0!
		let yyyy = today.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}
		today = `${yyyy}-${mm}-${dd}`;
		return today;
	};

	return (
		<div className='container'>
			<div className='Information-form'>
				<h5>Record the data of a match</h5>
				<form ref={form}>
					<input type='number' placeholder='game number' name='id' />
					<input
						type='text'						
						name='date'						
						onFocus={e => e.currentTarget.type = "date"}
						onBlur={e => e.currentTarget.type = "text"}						
						placeholder="today's date"
						max={effectFormValidateDate()}
					/>
					<input
						type='text'
						placeholder='Player name at home'
						name='playerHome'
					/>
					<input
						type='text'
						placeholder='Out player name'
						name='playerOut'
					/>
					<input type='text' placeholder='Score' name='score' />
					<input type='text' placeholder='Winner' name='winner' />
					
				</form>

				<div className='Information-next'>
					<button type='button' onClick={handleSubmit}>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default MatchInformation;
