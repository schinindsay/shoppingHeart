import { FETCH_QUESTIONS } from '../actions/types';

//the action is the response from axios so we want what is inside that payload object in this case it is payload.response.venues

export default function (state = [], action) {
  console.log("surveyReducer action is", action);
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}
