import React from 'react';

const Form = ({ scoreForm='', effectFormValidateDate, handleSubmit, match='', stateButton= false }) => {
	return (
		<>
			<form ref={scoreForm}>
				{!stateButton ? <input type='number' placeholder='game number' name='id' min='1' />: <input type='number' placeholder='game number' name='id' min='1' defaultValue={match.id} readOnly/> }				
				<input
					type='text'
					name='date'
					onFocus={(e) => (e.currentTarget.type = 'date')}
					onBlur={(e) => (e.currentTarget.type = 'text')}
					placeholder="today's date"
					max={effectFormValidateDate()}
					defaultValue={match.date}
				/>				
				<input
					type='text'
					placeholder='Player name at home'
					name='playerHome'
					defaultValue={match.playerHome}					
				/>

				<input type='text' placeholder='Out player name' name='playerOut' defaultValue={match.playerOut}/>

				<input type='text' placeholder='Score' name='score' defaultValue={match.score}/>

				<input type='text' placeholder='Winner' name='winner' defaultValue={match.winner}/>
			</form>
			<div className='Information-next'>
				<button type='button' onClick={handleSubmit}>
				{!stateButton ? <>Register</> : <>Update</>} 
				</button>
			</div>
		</>
	);
};
export default Form;
