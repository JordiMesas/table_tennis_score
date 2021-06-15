import React from 'react';

const Form = () => {
	
	return (
		<div className='Information-form'>
			<form>
				<input type='text' placeholder='fecha' name='date' />
				<input type='text' placeholder='Nombre de jugador en casa' name='playerHome' />
				<input type='text' placeholder='Nombre de jugador de fuera' name='playerOut' />
				<input type='text' placeholder='Resultado' name='score' />
				<input type='text' placeholder='Ganador' name='winner' />				
				<input type='number' placeholder='numero partido' name='id' />				
			</form>

			<div className='Information-next'>
				<button type='button'>
					Pagar
				</button>
			</div>
		</div>
	);
};

export default Form;
