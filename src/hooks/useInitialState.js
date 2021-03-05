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
            notLastMonth: state.matches.filter((items) => {return new Date(Date.parse(items.date)).getMonth() !== new Date().getMonth() ||  new Date(Date.parse(items.date)).getFullYear() !== new Date().getFullYear() }),
            lastMonth: state.matches.filter((items) => {return new Date(Date.parse(items.date)).getMonth() === new Date().getMonth() &&  new Date(Date.parse(items.date)).getFullYear() === new Date().getFullYear() })
        };

        // console.log( state.matches.filter((items) => {return new Date(Date.parse(items.date)).getMonth() === new Date().getMonth() &&  new Date(Date.parse(items.date)).getFullYear() === new Date().getFullYear() }));               
        // console.log( state.matches.filter((items) => {return new Date(Date.parse(items.date)).getMonth() !== new Date().getMonth() ||  new Date(Date.parse(items.date)).getFullYear() !== new Date().getFullYear() }));               

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

