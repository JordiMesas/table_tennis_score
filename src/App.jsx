import React from 'react';

import Layout from './components/Layout';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';


const App = () =>{
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <Layout />
        </AppContext.Provider>
    );
}

export default App;