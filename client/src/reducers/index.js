import { combineReducers } from 'redux';
import placesReducer from "./placesReducer";
import surveyReducer from "./surveyReducer";
import activePlaceReducer from "./activePlaceReducer";

export default combineReducers({
  places: placesReducer,
  questions: surveyReducer,
  activePlace: activePlaceReducer
});