import React, { Component } from 'react';
import { Route, Switch, BrowserRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing'
import Survey from "../containers/survey";
// import PlaceDetail from "../containers/place_detail";

class App extends Component {
  render() {
    return (
      <div className="App" id="root">

        <header className="App-header">
          <h3>HEADER SECTION</h3>
        </header>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/ratings/:id" component={Survey} />
           
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

{/* <Route path="/places/:id" component={PlaceDetail} /> */}