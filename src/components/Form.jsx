import React, { useRef } from 'react';

const Form = ({handleAddToMatch}) => {
	const form = useRef(null);

    const handleSubmit = ()=>{
        
		const formData = new FormData(form.current);
		const items ={
			'date': formData.get('date'),
			'playerHome': formData.get('playerHome'),
			'playerOut': formData.get('playerOut'),
			'score': formData.get('score'),
			'winner': formData.get('winner'),
            'id': formData.get('id'),		
		}
        handleAddToMatch(items);
		
	}
	return (
		<div className='Information-form'>
			<form ref={form}>
				<input type='text' placeholder='fecha' name='date' />
				<input type='text' placeholder='Nombre de jugador en casa' name='playerHome' />
				<input type='text' placeholder='Nombre de jugador de fuera' name='playerOut' />
				<input type='text' placeholder='Resultado' name='score' />
				<input type='text' placeholder='Ganador' name='winner' />				
				<input type='number' placeholder='numero partido' name='id' />				
			</form>

			<div className='Information-next'>
				<button type='button' onClick={handleSubmit}>
					Pagar
				</button>
			</div>
		</div>
	);
};

export default Form;
