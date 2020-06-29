/** @format */

import React, { useReducer } from 'react';
import axios from 'axios';

import RestaurantContext from './restaurantContext';
import RestaurantReducer from './restaurantReducer';
import { API_KEY } from '../API_KEY/API_KEY';
import * as actionTypes from './types';

const RestaurantState = (props) => {
	const initialState = {
		loading: false,
		data: null,
		item: null,
	};
	const [state, dispatch] = useReducer(RestaurantReducer, initialState);

	//get data
	const getData = (name, location) => {
		setLoading();
		axios
			.get(
				`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`,
				{
					headers: {
						Authorization: `Bearer ${API_KEY}`,
					},
					params: {
						categories: `${name}`,
					},
				}
			)
			.then((res) => {
				dispatch({ type: actionTypes.GET_DATA, payload: res.data.businesses });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//setLoading
	const setLoading = () => {
		dispatch({ type: actionTypes.SET_LOADING });
	};

	//getItem
	const getItem = (id) => {
		setLoading();
		axios
			.get(
				`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}`,
				{
					headers: {
						Authorization: `Bearer ${API_KEY}`,
					},
				}
			)
			.then((res) => {
				dispatch({ type: actionTypes.GET_ITEM, payload: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<RestaurantContext.Provider
			value={{
				loading: state.loading,
				data: state.data,
				item: state.item,
				getData,
				getItem,
			}}
		>
			{props.children}
		</RestaurantContext.Provider>
	);
};

export default RestaurantState;
