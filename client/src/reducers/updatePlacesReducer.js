export default function (state = {}, action) {
  console.log("updatePlacesReducer action is", action);
  switch (action.type) {
    case "ADD_OR_UPDATE_PLACE":
      let newState = { ... state};
      newState[action.payload.fourSquareId] = action.payload;
      return newState;
    default:
      return state;
  }
}