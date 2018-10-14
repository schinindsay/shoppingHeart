import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWF5b2ppY2giLCJhIjoiY2pla3Q3MzVvMWRoYTJybnVyMndxM2hmdCJ9.nWZlYcpKaMqz6m7xTsnJGA"
});

const featureCoordinates = [101.8224, 2.955139]

function Map2() {
  return (
    <div className="map2">
      <h1>Hello CodeSandbox</h1>
      <h2>Coodinates: 101.8224, 2.955139</h2>
      <a href="https://www.mapbox.com/mapbox-gl-js/example/popup-on-click/">
        Popup on click
      </a>
      <a href="https://www.mapbox.com/mapbox-gl-js/example/set-popup/">
        {" "}
        / and here
      </a>
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        zoom={[10]}
        center={featureCoordinates}
        containerStyle={{
          height: "60vh",
          width: "100vw"
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={featureCoordinates} />
        </Layer>
      </Map>
    </div>
  );
}

export default Map2
