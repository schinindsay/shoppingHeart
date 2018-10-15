import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

//import './App.css';
import PlacesList from '../../containers/places/places_list';
import SearchBar from "../../containers/places/search_places";
import PlaceGeoLocate from "../../containers/maps/place_geo_locations";

class PlaceListDisplay extends Component {
  render() {
    return (
      <div className="place-page-div" id="place-page">

        <div>
        <SearchBar />
        </div>
        
        <div class="row">
          <div class="col-sm-3">.col-sm-3</div>
          <div class="col-sm-6"><PlaceGeoLocate /></div>
          <div class="col-sm-3">.col-sm-3</div>
        </div>
          

        <div>
          <PlacesList /> 
        </div>

        </div>
      
    );
  }
}

export default connect(null, actions)(PlaceListDisplay);