/** @format */

import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import RestaurantState from './context/restaurantState';
import Navbar from './Component/Layout/Navbar/Navbar';
import Home from './pages/HomePage/HomePage';
import CardDetails from './pages/CardDetails/CardDetails';
import './App.css';

function App() {
	return (
		<RestaurantState>
			<Fragment>
				<Navbar />
				<div className="App">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/card-details/:id" component={CardDetails} />
					</Switch>
				</div>
			</Fragment>
		</RestaurantState>
	);
}

export default App;
