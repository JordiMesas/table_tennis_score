import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Main from '../containers/Main';
import Form from '../containers/Form';

import NotFound from '../containers/NotFound';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/style.css';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
                    	{/*Encuentra el path y lo empuja según la ruta puesta. Switch es el children que le estamos pasando a components/Layout.jsx*/}
					<Switch>						
						<Route exact path='/table_tennis_score' component={Main} />
						<Route exact path='/Form' component={Form} />						
						<Route component={NotFound} />
					</Switch>
                </Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;
