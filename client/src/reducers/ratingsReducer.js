import { ADD_RATINGS } from '../actions/types';

export default function (state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_RATINGS:
      state.ratings = action.payload;
      return action.payload;
    default:
      return state;
  }
}