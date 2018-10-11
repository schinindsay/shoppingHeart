import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { fetchPlaces, selectPlaces, setCurrentPlace, fetchSinglePlaces,
  updateAndReturnPlacesList } from "../../actions/index";
import PlaceListCard from "./places_list_card"


class PlacesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  // handlePlaceClick(id) {
  //   this.props.setCurrentPlace(id);
  // }

  render() {
    console.log("this.props" ,this.props);
    console.log("this.props.places", this.props.places)

    const { places } = this.props;
    if (!places) {
      return <div>Loading...</div>;
    }
    return (
      places.map ( place =>
        <div
        key={place.id}
        className="places-list-item"
        >
          <PlaceListCard 
          place={place}/>

        </div> 
      )
    );
  }
}

const mapStateToProps = state => ({
  //places defined in reducers index.js
  places: state.places,
  // currentPlace: state.currentPlace,
  placesInLocalDB: state.placesInLocalDB
  // loading: state.places.loading,
  // error: state.places.error
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaces, selectPlaces, setCurrentPlace, fetchSinglePlaces, updateAndReturnPlacesList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
