import React, { useContext, useRef, useState } from 'react';
import Appcontext from '../context/AppContext';
import '../styles/modal.css';
import Modal from './Modal';
import useModal from '../hooks/useModal';

const ModalUpdateMatch = ({ match }) => {
	const { isShowing, toggle } = useModal();
	let [state, setState] = useState(true);

	let [validateSuccess, setvalidateSuccess] = useState(false);
	const { updateMatch, validateFields, effectFormValidateDate } = useContext(Appcontext);
	const form = useRef(null);

	const handleSubmit = () => {
		console.log('hola');
		setState(true);
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
			? setState((state = updateMatch(player)))
			: setState((state = false));
		console.log(state);
		state
			? setvalidateSuccess((validateSuccess = true))
			: setvalidateSuccess((validateSuccess = false));
	};

	return (
		<>
			<div onClick={toggle}>
				<i className='fas fa-edit' />
			</div>
			<Modal
				isShowing={isShowing}
				hide={toggle}
				effectFormValidateDate={effectFormValidateDate}
				scoreForm={form}
				match={match}
				handleSubmit={handleSubmit}
				state={state}
				validateSuccess={validateSuccess}
			/>
		</>
	);
};

export default ModalUpdateMatch;
