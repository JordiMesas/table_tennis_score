import {useState} from 'react';

import initialState from '../initialState.json';

const useInitialState = () =>{
    const [state, setState] = useState(initialState);
    

    const addToMatch = (items) => {
		setState({
			...state,
			matches: [...state.matches, items],
		});
	};
  

    const dateLastMonthShowDate = () =>{
        
        const notLastMontGames = {
            notLastMonth: state.matches.filter((items) => {return new Date(Date.parse(items.date)).getMonth() !== new Date().getMonth()}),
            lastMonth: state.matches.filter((items) => {return new Date(Date.parse(items.date)).getMonth() === new Date().getMonth()})
        };
        // console.log(notLastMontGames.notLastMonth);
        // state.matchs.map((items) => { console.log(new Date(Date.parse(items.date)).getMonth()) });
        if(notLastMontGames.notLastMonth.length !== 0){
            setState({
                ...state,                
                matches: notLastMontGames.lastMonth,
                matchesNotLastMonth: notLastMontGames.notLastMonth
            });
        }
        
    }

    return {
        addToMatch,        
        dateLastMonthShowDate,       
        state
    } 
        
}

export default useInitialState;

