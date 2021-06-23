import React, { useContext, useRef, useState } from 'react';
import Appcontext from '../context/AppContext';

const MatchInformation = () => {
	let [state, setState] = useState(true);
	let [validateUniqueMatch, setvalidateUniqueMatch] = useState(true);
	let [validateSuccess, setvalidateSuccess] = useState(false);
	const { addToMatch } = useContext(Appcontext);
	const form = useRef(null);

	const handleSubmit = () => {
		setState(true);
		setvalidateUniqueMatch(true);
		setvalidateSuccess(false);
		const formData = new FormData(form.current);
		const player = {
			id: parseInt(formData.get('id')),
			date: formData.get('date'),
			playerHome: formData.get('playerHome'),
			playerOut: formData.get('playerOut'),
			score: formData.get('score'),
			winner: formData.get('winner'),
		};

		console.log(player);

		const field = document.getElementsByTagName('input');
		let validateEmpty = [];
		for (let i = 0; i < field.length; i++) {
			if (field[i].value === '') {
				field[i].style.border = '1px solid red';
				validateEmpty.push(i);
			} else {
				field[i].style.border = '1px solid #ccc';
			}
		}

		console.log(validateEmpty);

		validateEmpty.length === 0
			? setState((state = true))
			: setState((state = false));

		console.log(state);
		state && setvalidateUniqueMatch(addToMatch(player));
		console.log(validateUniqueMatch);

		(state && validateUniqueMatch) || (state && !validateUniqueMatch)
			? setvalidateSuccess((validateSuccess = true))
			: setvalidateSuccess((validateSuccess = false));
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
					<input type='number' placeholder='game number' name='id' min='1' />
					<input
						type='text'
						name='date'
						onFocus={(e) => (e.currentTarget.type = 'date')}
						onBlur={(e) => (e.currentTarget.type = 'text')}
						placeholder="today's date"
						max={effectFormValidateDate()}
					/>
					<input
						type='text'
						placeholder='Player name at home'
						name='playerHome'
					/>

					<input type='text' placeholder='Out player name' name='playerOut' />

					<input type='text' placeholder='Score' name='score' />

					<input type='text' placeholder='Winner' name='winner' />
				</form>

				<div className='Information-next'>
					<button type='button' onClick={handleSubmit}>
						Register
					</button>
				</div>
				{!state ? (
					<small className='validate-alert'>
						Fill in the fields marked in red on the form!
					</small>
				) : null}

				{!validateUniqueMatch ? (
					<small className='validate-alert'>
						The match number already exists, put another number, the match
						number must be unique!
					</small>
				) : (
					validateSuccess && (
						<small className='validate-successfully'>
							Registered successfully!
						</small>
					)
				)}
			</div>
		</div>
	);
};

export default MatchInformation;
