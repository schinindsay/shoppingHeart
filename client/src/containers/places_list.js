import React from "react";
import { connect } from "react-redux";
import { fetchPlaces } from "../actions/index";

class PlacesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPlaces());
  }

  render() {
    console.log(this);
    const { places } = this.props;

    if (!places) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {places.map(places =>
          <li key={places.id}>{places.name}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  //places defined in reducers index.js
  places: state.places,
  // loading: state.places.loading,
  // error: state.places.error
});

export default connect(mapStateToProps)(PlacesList);