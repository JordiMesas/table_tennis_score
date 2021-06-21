import { useState } from 'react';

import initialState from '../initialState.json';

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToMatch = (match) => {

        for (let i = 0; i < state.matches.length; i++) {
            console.log(state.matches[i].id);
            console.log(state.matches[i].id);
            if (state.matches[i].id === parseInt(match.id)) {
                console.log('el numero de partido tiene que ser unico');
                break;			    
			}else{
                setState({
                    ...state,
                    matches: [...state.matches, match],
                });                
            }
            
        }	
		
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
		dateLastMonthShowDate,
		state,
	};
};

export default useInitialState;
