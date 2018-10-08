import axios from 'axios';
import {FETCH_PLACES, FETCH_RATINGS} from './types';

let root_url = 'https://api.foursquare.com/v2/venues/search';
// let latitude = location.latitude;
// let longitude = location.longitude;
let query = "coffee";
let fourSquareClientId = '0X4HGM5A3IJYBINHJELZ5SU4WKWKHECAXQCZCM53NRPI3BF3';
let fourSquareClientSecret = 'VW4GM523Q3TEGQ2OFVKD5LEZ4VXDKQL1UZ0GE5TSKLSNE1UG';
// let places = `${root_url}?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&limit=50&ll=${latitude},${longitude}&query=${query}`
let places = `${root_url}?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&limit=50&ll=35.9940,-78.8986&query=${query}`;
console.log(places)
places = "https://api.foursquare.com/v2/venues/search?client_id=0X4HGM5A3IJYBINHJELZ5SU4WKWKHECAXQCZCM53NRPI3BF3&client_secret=VW4GM523Q3TEGQ2OFVKD5LEZ4VXDKQL1UZ0GE5TSKLSNE1UG&v=20180323&limit=10&ll=35.9940,-78.8986&query=coffee";

export const fetchPlaces = (query) => async dispatch => {
  places = `https://api.foursquare.com/v2/venues/search?client_id=0X4HGM5A3IJYBINHJELZ5SU4WKWKHECAXQCZCM53NRPI3BF3&client_secret=VW4GM523Q3TEGQ2OFVKD5LEZ4VXDKQL1UZ0GE5TSKLSNE1UG&v=20180323&limit=10&ll=35.9940,-78.8986&query=${query}`;
  console.log(places);
  const res = await axios.get(places);

  dispatch({ type: FETCH_PLACES, payload: res.data })
};

// export const fetchRatings = () = async dispatch => {
//   const res = await axios.get('/api/ratings/:placeId');

//   dispatch({ type: FETCH_RATINGS, payload: res.data })
// };