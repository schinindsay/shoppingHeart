import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { fetchPlaces, selectPlaces, setCurrentPlace, fetchSinglePlaces,
  updateAndReturnPlacesList } from "../../actions/index";

class PlacesListCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps.places) {
      console.log('componentDidUpdate invoked!')

      let DataFrom4Sqr = this.props.places
      console.log("data from 4sqr", DataFrom4Sqr)

      DataFrom4Sqr.forEach(function (values) {
        values = {
          fourSquareId: DataFrom4Sqr.id,
          name: DataFrom4Sqr.name,
          placeCategories: DataFrom4Sqr.categories,
          location: DataFrom4Sqr.location
        }
        updateAndReturnPlacesList(values);
      })
    }
  }

  handlePlaceClick(id) {
    this.props.setCurrentPlace(id);
  }

  renderPlaces() {
    console.log("this.props", this.props);

    const { places } = this.props;
    if (!places) {
      return <div>Loading...</div>;
    }
    return (
      places.map(place =>
        <ul
          key={place.id}
          className="places-list-item"
        >
          <li>{place.name}</li>
          <li>{place.location.address}</li>
          <button type="button" className="btn btn-outline-primary" onClick={() => this.handlePlaceClick(place)}><Link to={`/ratings/${place.id}`}>Rate this Place</Link></button>
        </ul>
      )
    );
  }

  render() {
    return (
      <ul>
        {this.renderPlaces()}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  //places defined in reducers index.js
  places: state.places,
  currentPlace: state.currentPlace,
  placesInLocalDB: state.placesInLocalDB
  // loading: state.places.loading,
  // error: state.places.error
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaces, selectPlaces, setCurrentPlace, fetchSinglePlaces, updateAndReturnPlacesList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesListCard);


//<li><Link to={`/places/${place.id}`}>{place.name}</Link></li>