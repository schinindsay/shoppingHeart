import { combineReducers } from 'redux';
import placesReducer from "./placesReducer";
import surveyReducer from "./surveyReducer";
import activePlaceReducer from "./activePlaceReducer";
import ratingsReducer from "./ratingsReducer";
import currentPlaceReducer from "./currentPlaceReducer";
import updatePlacesReducer from "./updatePlacesReducer";

export default combineReducers({
  places: placesReducer,
  questions: surveyReducer,
  activePlace: activePlaceReducer,
  ratings: ratingsReducer,
  currentPlace: currentPlaceReducer,
  placesInLocalDB : updatePlacesReducer

});