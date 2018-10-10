import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { fetchPlaces, selectPlaces, setCurrentPlace } from "../actions/index";

class PlacesList extends React.Component {
  componentDidMount() {
    this.props.fetchPlaces();
  }

  handlePlaceClick(id) {
    this.props.setCurrentPlace(id);
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
        className="places-list-item"
        >
          <li>{place.name}</li>
          <button type="button" className="btn btn-outline-primary" onClick={() => this.handlePlaceClick(place)}><Link to={`/ratings/${place.id}`}>Rate this Place</Link></button>
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
  return bindActionCreators({ fetchPlaces, selectPlaces, setCurrentPlace }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);


//<li><Link to={`/places/${place.id}`}>{place.name}</Link></li>