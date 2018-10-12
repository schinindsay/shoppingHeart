import { ADD_RATINGS, FETCH_RATINGS } from '../actions/types';

export default function (state = {}, action) {
  console.log(action, action.payload);
  switch (action.type) {
    case ADD_RATINGS:
      return action.payload;

    case FETCH_RATINGS:
      
        // state.ratings[action.payload.fourSquareId] = action.payload.ratings    
        // return  state;
      let payload = action.payload;
      if(!payload || payload.length < 1) {
        return state;
      }

      payload = payload[0];
      let newState = Object.assign({}, state);
      //other option is _id
      newState[payload.fourSquareId] = payload;
      return newState;
    default:
      return state;
  }
}

//in card component in map state to props pull  out ratings for that id and map it to value called rating