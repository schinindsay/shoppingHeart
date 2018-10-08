import React, { Component } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import propTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import { NavigationControl } from "mapbox-gl";

// Don't forget to import the CSS
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia29saGFyNzMwIiwiYSI6ImNqazJsZThvZjByNzUzdm1xaXB1cHpweHYifQ.k3uIwJlkTswsnL5jfQ9h2A"
});

//var objectsMap = new Map();
var objectCoords = [];
var objectTypes = [];

class MapBoxMap extends Component {
  constructor(props) {
    super(props);
    this.features = undefined;
    this.getData = this.getData.bind(this);
    this.onMapLoad = this.onMapLoad.bind(this);
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

  getData() {
    objectCoords = [];
    objectTypes = [];
    // if (this.drawControl.draw.getAll() !== null) {
    let data = this.drawControl.draw.getAll();
    this.features = data.features; //JSON.stringify(data);
    console.log(this.features);

    for (var i = 0; i < this.features.length; i++) {
      var coords = this.features[i].geometry.coordinates;
      var objType = this.features[i].geometry.type;
      objectCoords.push(coords);
      objectTypes.push(objType);
    }
    console.log('object coordinates are: ', objectCoords);
    console.log('object types are: ',objectTypes);
  }

  render() {
    return (
      <div className="container">
        <Map
          onStyleLoad={this.onMapLoad}
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "50vh",
            width: "50vw"
          }}
        >
          >
          <DrawControl
            ref={drawControl => {
              this.drawControl = drawControl;
            }}
            controls={{
              point: true,
              polygon: true,
              trash: true,
              line_string: false,
              combine_features: false,
              uncombine_features: false
            }}
          />
        </Map>
        <div className="dataSection">
          <button className="dataSnatch" onClick={this.getData}>
            Get Data
          </button>
          <p className="theData">{this.features}</p>
        </div>
      </div>
    );
  }
}

export default MapBoxMap;

//https://github.com/amaurymartiny/react-mapbox-gl-draw/blob/master/src/index.js
// Geolocated : https://www.mapbox.com/mapbox-gl-js/example/locate-user/
// Demos: http://alex3165.github.io/react-mapbox-gl/demos
