import React, { Component } from "react";
import { connect } from "react-redux";

import MapBoxMap from "./map.js";

class PlaceDetail extends Component {
  render() {
    if (!this.props.place) {
      return <div>Select a place to get started.</div>;
    }

    return (
      <div>
        <MapBoxMap />
        <h3>{this.props.place.name}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    place: state.activePlace
  };
}

export default connect(mapStateToProps)(PlaceDetail);