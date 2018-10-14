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


const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWFyaWVkZXN0YW5kYXUiLCJhIjoiY2ppb2E2Y3hlMG5xMzNrbzI3Ynk0MDlmaSJ9.XmflFu2QUBjFDVVWAKFBKQ"
});


//read this tutorial to see how he does popups
//https://codeburst.io/build-rich-map-experiences-with-mapbox-and-react-fa13d2c814de


class PlacesGeoLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coords: "",
      places: this.places
    }
  }

  componentDidMount() {
    console.log( "props in the places geolocation component are", this.props)

    
  }



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


  _renderMarkers = function (){
    let features = this.props.places.map(place => 
    <Feature coordinates={[place.location.lng, place.location.lat]}>
        <PopUp
          location={[place.location.lng, place.location.lat]}
          >
          <h1>{place.name}</h1>
        </PopUp>
    </Feature>

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

  

  

  render() {
    const { place } = this.props;

    // if (!place) {
    //   return <div>Loading...</div>
    // }

    // this._renderMarkers();
   
    return (
      <div>
        
        <Map
          style="mapbox://styles/mapbox/light-v9"
          containerStyle={{
            height: "50%",
            width: "80%",
            position: "absolute",
          }}
          center={this.renderPickCenter()}
          zoom={[11]}
        >
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          {/* <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          <Feature coordinates={[-0.471747846041145, 50.3233379650232]} /> */}
          {
            this._renderMarkers()
          }
          
        </Layer>
          
      </Map>
      </div>
        
    )
  }
}

function mapStateToProps(state) {
  console.log("state for geo location", state)
  // return { placesInLocalDB: state.placesInLocalDB } 
  return {
    places: state.places,
  }
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({  }, dispatch);
// }

export default connect(mapStateToProps)(PlacesGeoLocation);

