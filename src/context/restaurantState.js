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
		data: [],
		item: null,
		error: false,
		limit: 12,
		isHasMore: true,
	};
	const [state, dispatch] = useReducer(RestaurantReducer, initialState);

	//get data
	const getData = (name, location, limit) => {
		setLoading();
		axios
			.get(
				`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}&limit=${limit}`,
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
				console.log(res);
			})
			.catch((err) => {
				dispatch({ type: actionTypes.GET_ERROR });
				console.log(err);
			});
	};

	//has-more
	const hasMore = (data, limit) => {
		if (data >= 20) {
			dispatch({ type: actionTypes.HAS_MORE });
			return;
		} else {
			dispatch({ type: actionTypes.SET_LIMITATION });
			dataScroll(state.name, state.location, state.limit);
		}
	};

	//get scroll data
	const dataScroll = (name, location, limit) => {
		axios
			.get(
				`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}&limit=${limit}`,
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
				dispatch({
					type: actionTypes.SCROLL_DATA,
					payload: res.data.businesses,
				});
				console.log(res);
			})
			.catch((err) => {
				dispatch({ type: actionTypes.GET_ERROR });
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
				dispatch({ type: actionTypes.GET_ERROR });
				console.log(err);
			});
	};

	return (
		<RestaurantContext.Provider
			value={{
				loading: state.loading,
				data: state.data,
				item: state.item,
				error: state.error,
				limit: state.limit,
				isHasMore: state.isHasMore,
				getData,
				getItem,
				hasMore,
			}}
		>
			{props.children}
		</RestaurantContext.Provider>
	);
};

export default RestaurantState;
