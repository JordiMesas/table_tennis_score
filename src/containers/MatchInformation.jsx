import React, { useContext, useRef, useState } from 'react';
import Appcontext from '../context/AppContext';

import Form from '../components/Form';

const MatchInformation = () => {
	let [state, setState] = useState(true);
	let [validateUniqueMatch, setvalidateUniqueMatch] = useState(true);
	let [validateSuccess, setvalidateSuccess] = useState(false);
	const { addToMatch, validateFields, effectFormValidateDate } = useContext(Appcontext);
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
		
		validateFields().length === 0
			? setState((state = true))
			: setState((state = false));

		console.log(state);
		state && setvalidateUniqueMatch(addToMatch(player));
		console.log(validateUniqueMatch);

		(state && validateUniqueMatch) || (state && !validateUniqueMatch)
			? setvalidateSuccess((validateSuccess = true))
			: setvalidateSuccess((validateSuccess = false));
	};

	

	return (
		<div className='container'>
			<div className='Information-form'>
				<h5>Record the data of a match</h5>	

				<Form scoreForm={form} effectFormValidateDate={effectFormValidateDate} handleSubmit={handleSubmit}/>

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
