import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

//import './App.css';
import PlacesList from '../containers/places_list';
import SearchBar from "../containers/search_places";
import MapBoxMap from "../containers/map";
// import Geolocated from "../containers/geolocated"

class Landing extends Component {
  render() {
    return (
      <div className="landing-div" id="landing">
        <SearchBar />
        <PlacesList /> 
        <MapBoxMap />

      </div>
    );
  }
}

export default connect(null, actions)(Landing);