import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import {
  fetchPlaces, selectPlaces, setCurrentPlace, fetchSinglePlaces,
  updateAndReturnPlacesList
} from "../../actions/index";
import PlaceListCard from "./places_list_card"


class PlacesList extends React.Component {
  constructor(props) {
    super(props);

    features= []

  }

  componentDidMount() {
    
  }

  // handlePlaceClick(id) {
  //   this.props.setCurrentPlace(id);
  // }


  render() {

    const Feature = function () {

      return {
        type: "",
        properties: {
          id: "",
          title: ""
        },
        geometry: {
          type: "",
          coordinates: []
        }
      }
    }



    const { places } = this.props;
    if (!places) {
      return <div>Loading...</div>;
    }
    
      places.map(place =>{
         
        newFeature = new Feature() {
          
            {type: "Feature",
            properties: {
              "id": {place.id},
              "title": {place.name}
            },
            "geometry": {
              "type": "",
              "coordinates": []
            }
          }
          
        }
      
      })
    }
}     


const mapStateToProps = state => ({
  //places defined in reducers index.js
  places: state.places,
  // currentPlace: state.currentPlace,
  placesInLocalDB: state.placesInLocalDB
  // loading: state.places.loading,
  // error: state.places.error
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaces, selectPlaces, setCurrentPlace, fetchSinglePlaces, updateAndReturnPlacesList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
