import {combineReducers} from 'redux';
import token from './token-reducer';
import itineraries from './itinerary-reducer';

export default combineReducers({
  token, itineraries
});