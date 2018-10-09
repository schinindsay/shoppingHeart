import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPlaces } from "../actions/index";
import { selectPlaces } from "../actions/index";


class PlacesList extends React.Component {
  componentDidMount() {
    this.props.fetchPlaces();
  }

  renderPlaces() {
    const { places } = this.props;

    if (!places) {
      return <div>Loading...</div>;
    }

    return (
      places.map ( place =>
        <ul 
        key={place.id}
        onClick={() => this.props.selectPlaces(place)}
        className="places-list-item"
        >
          <li>{place.name}</li>
        </ul> 
      )
    );
  }

  render(){
    return (
      <div className="places-div">
        {this.renderPlaces()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //places defined in reducers index.js
  places: state.places,
  // loading: state.places.loading,
  // error: state.places.error
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPlaces, selectPlaces }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);