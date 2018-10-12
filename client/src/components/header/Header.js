import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PlaceListDisplay from '../placesPages/PlaceListDisplay'
import PlacesRatings from "../../containers/places/places_ratings";
import bootstrap from 'bootstrap';


class Header extends Component {
  render() {
    return (
      <div className="header">

        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container"> 
            <a className="navbar-brand text-primary" href="#">
              <img src="../ShoppingHeartIcon3.svg" width="100" height="100" className="d-inline-block align-top" alt="" />
            </a> 
            <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar4">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar4">
            </div>
            </div>
          </nav>
        </div>
       
 
    );
  }
}

export default connect(null, actions)(Header);