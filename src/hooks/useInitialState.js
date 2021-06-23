import { useState } from 'react';

import initialState from '../initialState.json';

const useInitialState = () => {
	const [state, setState] = useState(initialState);

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
			return true;
		} else {			
			console.log('el numero de partido tiene que ser unico');
			return false;
		}
	};

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

	return {
		addToMatch,
		removeMatch,
		dateLastMonthShowDate,
		state,
	};
};

export default useInitialState;
