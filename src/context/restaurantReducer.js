import * as actionTypes from './types';

const restaurantReducer = (state, action) => {
  switch(action.type){
    case actionTypes.SET_LOADING:
      return{
        ...state,
        loading: true
      }
    case actionTypes.GET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case actionTypes.GET_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export default restaurantReducer;