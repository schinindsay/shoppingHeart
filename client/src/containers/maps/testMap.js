import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import ReactMapboxGl, {
  Layer,
  GeoJSONLayer,
  Feature,
  ZoomControl,
  Popup
} from "react-mapbox-gl";
import mapboxgl, { NavigationControl } from "mapbox-gl";
import { PopUp } from "@commodityvectors/react-mapbox-gl";
import { geolocated, geoPropTypes } from 'react-geolocated';

mapboxgl.accessToken = "pk.eyJ1IjoibWFyaWVkZXN0YW5kYXUiLCJhIjoiY2ppb2E2Y3hlMG5xMzNrbzI3Ynk0MDlmaSJ9.XmflFu2QUBjFDVVWAKFBKQ";
// import { stores } from '../../sweetgreen.js';
// import Sidebar from './Sidebar.jsx';

class Mapbox extends React.Component {
  constructor(props) {
    super(props);
    this.renderPickCenter = this.renderPickCenter.bind(this);
    this.createPopUp = this.createPopUp.bind(this);
    // this.generateListings = this.generateListings.bind(this);
    this.state = {
      coords: "",
      places: this.places
    }
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-77.034084, 38.909671],
      // initial zoom
      zoom: 14
    });


    // this.map.on('load', () => {
    //   this.map.addSource('places', {
    //     type: 'geojson',
    //     data: stores
    //   });
      // console.log(this.map);
  //     const map = this.map;

      stores.features.forEach(function (marker) {
        // Create a div element for the marker
        const el = document.createElement('div');
        // Add a class called 'marker' to each div
        el.className = 'marker';
        // By default the image for your custom marker will be anchored
        // by its center. Adjust the position accordingly
        // Create the custom markers, set their position, and add to map
        new mapboxgl.Marker(el, { offset: [0, -23] })
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }


  _renderMarkers = function () {
    let features = this.props.places.map(place =>
      <Feature coordinates={[place.location.lng, place.location.lat]} onClick={this.createPopup(place)} />
    )
    return features
  }

  renderPickCenter(){
    let center = []

    const size = this.props.places.length || 1;

    center = this.props.places.reduce((accumulator, current) => {

      return [accumulator[0] + current.location.lng,
              accumulator[1] + current.location.lat]

    }, [0,0]);

    center = [ center[0]/size, center[1]/size ];
    return center;
  }

  // generateListings() {
  //   let i = -1;
  //   let listing = this.props.places.map(place => {
  //     i += 1;
  //     return (
  //       <div className="item" key={i} id={`listing-${i}`}>
  //         <a
  //           href='#'
  //           className='title'
  //           onClick={() => {
  //             this.flyToStore(feature);
  //             this.createPopUp(feature);
  //             var activeItem = document.getElementsByClassName('active');
  //             if (activeItem[0]) {
  //               activeItem[0].classList.remove('active');
  //             }
  //           }}>
  //           {feature.properties.address}
  //         </a>
  //         <div className='details'>
  //           {feature.properties.city} &middot; {feature.properties.phoneFormatted}
  //         </div>
  //       </div>
  //     )
  //   });
  //   return listing;
  // }

  createPopUp(places) {

    console.log(places);
    return;
    
    let popUps = this.props.places.map(place =>

      document.getElementsByClassName('mapboxgl-popup'));
      // Check if there is already a popup on the map and if so, remove it
       if (popUps[0]) popUps[0].remove();

    let popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(`<h3>${place.name}</h3>`)
      .addTo(this.map)

      {/* <Feature coordinates={[place.location.lng, place.location.lat]} /> */}
      return features
      


    const popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();

    let popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(`<h3>${place.name}</h3>`)
      .addTo(this.map);
  }

  render() {
    return (
      <div className="container">
        <Sidebar flyToStore={this.flyToStore} createPopUp={this.createPopUp} generateListings={this.generateListings} />
        <div className="map pad2" ref={el => this.mapContainer = el} />
      </div>
    );
  }
};


function mapStateToProps(state) {
 
  return {
    places: state.places,
  }
};

export default connect(mapStateToProps)(TestMap);




//read this tutorial to see how he does popups
//https://codeburst.io/build-rich-map-experiences-with-mapbox-and-react-fa13d2c814de


// class PlacesGeoLocation extends Component {



  // createPopUp(currentFeature) {
  //   const popUps = document.getElementsByClassName('mapboxgl-popup');
  //   // Check if there is already a popup on the map and if so, remove it
  //   if (popUps[0]) popUps[0].remove();

  //   let popup = new mapboxgl.PopUp({ closeOnClick: false })
  //     .setLngLat(coordinates)
  //     .setHTML('<h3>{place.name}</h3>' +
  //       '<h4>' + currentFeature.properties.address + '</h4>')
  //     .addTo(this.map);
  // }



  // renderPickCenter(){
  //   let center = []

  //   const size = this.props.places.length || 1;

  //   center = this.props.places.reduce((accumulator, current) => {
      
  //     return [accumulator[0] + current.location.lng,
  //             accumulator[1] + current.location.lat]

  //   }, [0,0]);

  //   center = [ center[0]/size, center[1]/size ];
  //   return center;
  // }

  // _renderPopups = function () {

  //   let Popup = this.props.places.map(place =>
  //     <Popup
  //       location={[place.location.lng, place.location.lat]}
  //       anchor="bottom"
  //       offset={[0, -50]}
  //     >
  //       <div>
  //         <h1>{place.name}</h1>
  //       </div>

  //     </Popup> 

  //   )

  //   return Popup
  // }

  

  

//   render() {
//     const { place } = this.props;

//     // if (!place) {
//     //   return <div>Loading...</div>
//     // }

//     // this._renderMarkers();
   
//     return (
//       <div>
        
//         <Map
//           style="mapbox://styles/mapbox/light-v9"
//           containerStyle={{
//             height: "50%",
//             width: "80%",
//             position: "absolute",
//           }}
//           center={this.renderPickCenter()}
//           zoom={[11]}
//         >
//         <Layer
//           type="symbol"
//           id="marker"
//           layout={{ "icon-image": "marker-15" }}>
//           {/* <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
//           <Feature coordinates={[-0.471747846041145, 50.3233379650232]} /> */}
//           {
//             this._renderMarkers()
//           }
          
//         </Layer>
          
//       </Map>
//       </div>
        
//     )
//   }
// }

// function mapStateToProps(state) {
//   console.log("state for geo location", state)
//   // return { placesInLocalDB: state.placesInLocalDB } 
//   return {
//     places: state.places,
//   }
// };

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({  }, dispatch);
// }

// export default connect(mapStateToProps)(PlacesGeoLocation);

