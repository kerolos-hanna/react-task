/** @format */

import * as actionTypes from './types';

const restaurantReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SET_LOADING:
			return {
				...state,
				loading: true,
				error: false,
			};
		case actionTypes.GET_DATA:
			return {
				...state,
				data: action.payload,
				loading: false,
				error: false,
				limit: 12,
				isHasMore: true,
			};
		case actionTypes.GET_ITEM:
			return {
				...state,
				item: action.payload,
				loading: false,
				error: false,
			};
		case actionTypes.GET_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		case actionTypes.HAS_MORE:
			return {
				...state,
				isHasMore: false,
			};
		case actionTypes.SET_LIMITATION:
			return {
				...state,
				limit: state.limit + 4,
				loading: false,
			};
		case actionTypes.SCROLL_DATA:
			return {
				...state,
				data: state.data.concat(action.payload),
				loading: false,
				error: false,
			};
		default:
			return state;
	}
};

export default restaurantReducer;
