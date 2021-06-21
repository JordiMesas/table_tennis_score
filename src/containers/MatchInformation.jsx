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
				<h5>Registra los datos de un partido</h5>
				<form ref={form}>
					<input
						type='date'
						placeholder='fecha'
						name='date'
						max={effectFormValidateDate()}
					/>
					<input
						type='text'
						placeholder='Nombre de jugador en casa'
						name='playerHome'
					/>
					<input
						type='text'
						placeholder='Nombre de jugador de fuera'
						name='playerOut'
					/>
					<input type='text' placeholder='Resultado' name='score' />
					<input type='text' placeholder='Ganador' name='winner' />
					<input type='number' placeholder='Numero partido' name='id' />
				</form>

				<div className='Information-next'>
					<button type='button' onClick={handleSubmit}>
						Registrar
					</button>
				</div>
			</div>
		</div>
	);
};

export default MatchInformation;
