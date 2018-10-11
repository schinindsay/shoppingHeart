import React, { Component } from 'react';
import { Route, Switch, BrowserRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PlaceListDisplay from './PlaceListDisplay'
import PlacesRatings from "../containers/places/places_ratings";
import Header from "./header/Header"

class App extends Component {
  render() {
    return (
      <div className="App" id="root">

        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PlaceListDisplay} />
            <Route path="/ratings/:id" component={PlacesRatings} />
           
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

{/* <Route path="/places/:id" component={PlaceDetail} /> */}