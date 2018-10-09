import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

//import './App.css';
import PlacesList from '../containers/places_list';
import SearchBar from "../containers/search_places";
import MapBoxMap from "../containers/map";


class Landing extends Component {
  render() {
    return (
      <div className="landing-div" id="landing">
        <SearchBar />
        <MapBoxMap />
        <PlacesList /> 
      </div>
    );
  }
}

export default connect(null, actions)(Landing);