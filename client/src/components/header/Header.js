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
      
        <div class="header container-fluid">
          <div class="row" >
            <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                <a class="navbar-brand text-primary" href="#">
                  <img src={ShoppingHeartIcon} width="75" height="" class="box-border align-center" alt="" />
                </a>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-around">
            <h1 class="text-center" id="title" >Shopping Heart</h1>
          </div>
          <div class="col-md-4 col-4 col-sm-4 col-lg-4"></div>

        
          </div>
  

    );
  }
}

export default connect(null, actions)(Header);


      {/* <div class="col-md-4 col-4 col-sm-4 col-lg-4"></div>

  
  <div class="text-center py-2" style="background-image: url(&quot;https://static.pingendo.com/cover-bubble-dark.svg&quot;); background-size: cover;">
    <div class="container">
      <div class="row">
        <div class="bg-white p-5 mx-auto col-md-8 col-10">
          <h3 class="display-3">I feel the charm</h3>
          <p class="mb-3 lead">Of existence in this spot</p>
          <a class="btn btn-outline-primary" href="#">Read more</a>
        </div>
      </div>
  </div>
</div> */}