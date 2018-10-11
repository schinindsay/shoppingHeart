import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import mapboxgl, { NavigationControl } from "mapbox-gl";
import { geolocated, geoPropTypes } from 'react-geolocated';

// Don't forget to import the CSS
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia29saGFyNzMwIiwiYSI6ImNqazJsZThvZjByNzUzdm1xaXB1cHpweHYifQ.k3uIwJlkTswsnL5jfQ9h2A",
    positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
});

class Geolocated extends Component {
  
  constructor(props) {
    super(props);
    this.features = undefined;
    this.onMapLoad = this.onMapLoad.bind(this);
    this.state = {
      coords: ""
    }
  }

  //asynch code that adds geolocate functionality after map has loaded
  onMapLoad(map) {
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 6000
        },
        trackUserLocation: true
      })
    );
  }

  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
              <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
              <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
              <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>;
  }
}

Geolocated.propTypes = ({ ...Geolocated.propTypes, ...geoPropTypes } );
console.log(this)



export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Geolocated);