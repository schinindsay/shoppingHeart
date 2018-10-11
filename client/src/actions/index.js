import axios from 'axios';
import { FETCH_PLACES, FETCH_QUESTIONS, PLACE_SELECTED, ADD_RATINGS, SET_CURRENT_PLACE, ADD_OR_UPDATE_PLACE} from './types';
import Promise from '../utils/middleware'

let API_ROOT = 'http://localhost:5000'

let root_url = 'https://api.foursquare.com/v2/venues/search';
// let latitude = location.latitude;
// let longitude = location.longitude;
let query = "coffee";
let fourSquareClientId = '0X4HGM5A3IJYBINHJELZ5SU4WKWKHECAXQCZCM53NRPI3BF3';
let fourSquareClientSecret = 'VW4GM523Q3TEGQ2OFVKD5LEZ4VXDKQL1UZ0GE5TSKLSNE1UG';
// // let places = `${root_url}?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&limit=50&ll=${latitude},${longitude}&query=${query}`
let places = `${root_url}?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&limit=50&ll=35.9940,-78.8986&query=${query}`;
console.log(places)
places = "https://api.foursquare.com/v2/venues/search?client_id=0X4HGM5A3IJYBINHJELZ5SU4WKWKHECAXQCZCM53NRPI3BF3&client_secret=VW4GM523Q3TEGQ2OFVKD5LEZ4VXDKQL1UZ0GE5TSKLSNE1UG&v=20180323&limit=10&ll=35.9940,-78.8986&query=coffee";

export const fetchPlaces = (query) => async dispatch => {
  places = `https://api.foursquare.com/v2/venues/search?client_id=0X4HGM5A3IJYBINHJELZ5SU4WKWKHECAXQCZCM53NRPI3BF3&client_secret=VW4GM523Q3TEGQ2OFVKD5LEZ4VXDKQL1UZ0GE5TSKLSNE1UG&v=20180323&limit=10&ll=35.9940,-78.8986&query=${query}`;
  console.log(places);
  const res = await axios.get(places);

  dispatch({ type: FETCH_PLACES, payload: res.data })
};

export const fetchQuestions = () => async dispatch => {
  const res = await axios.get(`${API_ROOT}/api/questions`);

  dispatch({ type: FETCH_QUESTIONS, payload: res.data })
};

export const selectPlaces = (place) => {
  return {
    type: PLACE_SELECTED,
    payload: place
  }
};

export const submitRating = (values, history) => async dispatch => {
  const res = await axios.post(`http://localhost:5000/api/ratings/new`, values);

  //history.push('/ratings');
  dispatch({ type: ADD_RATINGS, payload: res.data });
};

export const updateAndReturnPlacesList = (values, history) => async dispatch => {
  const res = await axios.post(`http://localhost:5000/api/places/place`, values);

  //history.push('/ratings');
  dispatch({ type: ADD_OR_UPDATE_PLACE, payload: res.data });
};

export const setCurrentPlace = (place) => async dispatch => {
  dispatch({ type: SET_CURRENT_PLACE, payload: place});
}

export const fetchSinglePlaces = (place) => async dispatch => {
  console.log("the place is being fetched");
}

