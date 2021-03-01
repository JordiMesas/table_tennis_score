import {useState} from 'react';

import initialState from '../initialState.json';

const useInitialState = () =>{
    const [state, setState] = useState(initialState);
    

    const addToMatch = (items) => {
		setState({
			...state,
			matchs: [...state.matchs, items],
		});
	};
    return {
        addToMatch,       
        state
    } 
        
}

export default useInitialState;

