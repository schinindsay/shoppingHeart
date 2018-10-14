import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PlaceListDisplay from '../placesPages/PlaceListDisplay'
import PlacesRatings from "../../containers/places/places_ratings";
import bootstrap from 'bootstrap';
import ShoppingHeartIcon from './ShoppingHeartIcon.svg'


class Header extends Component {
  render() {
    return (
     <div className="py-5">
        <div className="container fluid">
          <div className="row">
            <div className="col-md-4">
              <img className="img-fluid d-block" src={ShoppingHeartIcon} height="20%"/> 
              <div className="col-md-6">
                <h1 className="display-4 text-center">Shopping Heart</h1>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
       </div>
    );
  }
}

export default connect(null, actions)(Header);
