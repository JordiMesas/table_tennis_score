import { useState } from 'react';

import initialState from '../initialState.json';

const useInitialState = () => {
	// ciclo de vida de json
	const [state, setState] = useState(initialState);

	// registro de info de partidos
	const addToMatch = (match) => {
		console.log(state.matches);
		console.log(parseInt(match.id));
		if (
			state.matches.filter((items) => {
				return items.id === match.id;
			}).length === 0
		) {
			setState({
				...state,
				matches: [...state.matches, match],
			});
			resetForm();
			return true;
		} else {
			console.log('el numero de partido tiene que ser unico');
			return false;
		}		
	};

	// actualización de datos de los partidos 
	const updateMatch = (player) => {				
		state.matches.map((match)=>{
			if (match.id === player.id) {
				match.date = player.date;
				match.playerHome = player.playerHome;
				match.playerOut = player.playerOut;
				match.score = player.score;
				match.winner = player.winner;
			}
		});
		console.log(state);
		setState({			
			matches: state.matches,
		});
		resetForm();
		return true;
	};

	//resetea el form de la pagina de registro de partidos
	const resetForm = () => document.getElementsByTagName('form')[0].reset();

	// validaciones del form de la pagina de registro de partidos
	const validateFields = () => {
		const field = document.querySelectorAll('form > input');
		let validateEmpty = [];
		for (let i = 0; i < field.length; i++) {
			if (field[i].value === '') {
				field[i].style.border = '1px solid red';
				validateEmpty.push(i);
			} else {
				field[i].style.border = '1px solid green';
			}
		}
		return validateEmpty;
	};

	// funcion que sirve para que los inputs de tipo date no se puedan pulsar los dias posteriores a la fecha actual
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

	// elimina el registro de un partido de la pagina de inicio
	const removeMatch = (match) => {
		console.log(match);
		console.log(
			state.matches.filter((items) => {
				return items.id !== match.id;
			})
		);
		setState({
			...state,
			matches: state.matches.filter((items) => {
				return items.id !== match.id;
			}),
		});
	};

	// filtro de solo aparecer los registros de los partidos de la pagina de inicio del mes actual que estamos
	const dateLastMonthShowDate = (flag) => {
		const notLastMontGames = {
			notLastMonth: state.matches.filter((items) => {
				return (
					new Date(Date.parse(items.date)).getMonth() !==
						new Date().getMonth() ||
					new Date(Date.parse(items.date)).getFullYear() !==
						new Date().getFullYear()
				);
			}),
			lastMonth: state.matches.filter((items) => {
				return (
					new Date(Date.parse(items.date)).getMonth() ===
						new Date().getMonth() &&
					new Date(Date.parse(items.date)).getFullYear() ===
						new Date().getFullYear()
				);
			}),
		};

		if (!flag) {
			setState({
				...state,
				matches: [...state.matches, ...state.matchesNotLastMonth],
			});
		} else {
			if (notLastMontGames.notLastMonth.length !== 0) {
				setState({
					...state,
					matches: notLastMontGames.lastMonth,
					matchesNotLastMonth: notLastMontGames.notLastMonth,
				});
			}
		}
	};

	// Animación de arrows según el tipo de arrow de la pagina de inicio
	const animateArrow = (toggle, arrow, arrowBolean)=>{
		
		arrow.style.transition ='200ms ease-in-out all';
		const turnArrow = {
			initialPosition:'rotate(0)',
			turnPositivePosition: 'rotate(90deg)',
			turnNegativePosition: 'rotate(-90deg)',
		}
		if(arrowBolean){			
			if(!toggle){			
				arrow.style.transform = turnArrow.initialPosition;
			}else{			
				arrow.style.transform = turnArrow.turnNegativePosition;
			}
		}else{
			if(toggle){
				arrow.style.transform = turnArrow.initialPosition;				
			}else{			
				arrow.style.transform = turnArrow.turnPositivePosition;
			}
		}
		
	}

	return {
		addToMatch,
		updateMatch,
		validateFields,
		effectFormValidateDate,
		removeMatch,
		dateLastMonthShowDate,
		animateArrow,
		state,
	};
};

export default useInitialState;
