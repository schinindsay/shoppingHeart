import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing'
import PlaceDetail from "../containers/place_detail";

//import './App.css';
// import PlacesList from '../containers/places_list';
// import SearchBar from "../containers/search_places";
// import MapBoxMap from "../containers/map";
// import Questions from "../containers/survey";




    {/* <SearchBar />
    <MapBoxMap />
    <PlacesList />


    <PlaceDetail />
    <Questions />  */}


class App extends Component {
  render() {
    return (
      <div className="App" id="root">

        <header className="App-header">
          <h3>HEADER SECTION</h3>
        </header>

        <BrowserRouter>
          <Route exact path="/" component={Landing} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);