//import SET_CURRENT_PLACE from '../actions/types.js'

export default function (state = {}, action) {
  switch (action.type) {
    case 'SET_CURRENT_PLACE':
      return action.payload;
    default:
      return state;
  }
}