import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

//import './App.css';
import PlacesList from '../containers/places/places_list';
import SearchBar from "../containers/places/search_places";
import MapBoxMap from "../containers/map";
// import Geolocated from "../containers/geolocated"
import Map2 from "../containers/map2";

class PlaceListDisplay extends Component {
  render() {
    return (
      <div className="place-page-div" id="place-page">
        <SearchBar />
        <PlacesList /> 
        <MapBoxMap />
        <Map2 />

      </div>
    );
  }
}

export default connect(null, actions)(PlaceListDisplay);