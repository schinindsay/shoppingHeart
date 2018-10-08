import { FETCH_PLACES } from '../actions/types';

//the action is the response from axios so we want what is inside that payload object in this case it is payload.response.venues

export default function(state = [], action){
  console.log(action);
  switch (action.type) {
    case FETCH_PLACES:
      return action.payload.response.venues;
    default:
      return state;
  }
}