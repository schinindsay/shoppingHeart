import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PlaceListDisplay from '../PlaceListDisplay'
import PlacesRatings from "../../containers/places/places_ratings";
import bootstrap from 'bootstrap'

class Header extends Component {
  render() {
    return (
      <div className="App-header-div" id="Header">

        <header className="App-header">
          <h3>ShoppingHeart</h3>
        </header>

      </div>
    );
  }
}

export default connect(null, actions)(Header);