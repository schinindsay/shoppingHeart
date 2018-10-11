export default function (state = [], action) {
  console.log("updatePlacesReducer action is", action);
  switch (action.type) {
    case "ADD_OR_UPDATE_PLACE":
      return action.payload;
    default:
      return state;
  }
}