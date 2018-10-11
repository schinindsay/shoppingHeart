import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

//import './App.css';
import PlacesList from '../containers/places/places_list';
import SearchBar from "../containers/places/search_places";
import MapBoxMap from "../containers/map";
// import Geolocated from "../containers/geolocated"

class PlaceListDisplay extends Component {
  render() {
    return (
      <div className="place-page-div" id="place-page">
        <SearchBar />
        <PlacesList /> 
        <MapBoxMap />

      </div>
    );
  }
}

export default connect(null, actions)(PlaceListDisplay);