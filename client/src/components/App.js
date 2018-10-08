import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//import './App.css';
import PlacesList from '../containers/places_list';
import SearchBar from "../containers/search_places";
import MapBoxMap from "../containers/map";

class App extends Component {
  render() {
    return (
      <div className="App" id="root">
        <header className="App-header">
          <h3>HEADER SECTION</h3>
        </header>

        <SearchBar />
        <MapBoxMap />
        < PlacesList />
        
      </div>
    );
  }
}

export default connect(null, actions)(App);