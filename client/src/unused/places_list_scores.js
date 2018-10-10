// 3 options:
// 1. figure out how to dispatch an action in a reducer (after the fetch places from foursquare you can use that info to dispatch a call to your backend because you don't have that info until you are inside your reducer)
// 2. componentwillupdate - use this to check to see if this.props.places is different than the next this.props.places if it is different then you need to dispatch a call from the component rather than from the reducer
//3. instead of making the front end send requests to four square you can put it in the backend and have the backend handle this stuff