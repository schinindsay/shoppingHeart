export default function (state = null, action) {
  switch (action.type) {
    case "PLACE_SELECTED":
      return action.payload;
  }

  return state;
}