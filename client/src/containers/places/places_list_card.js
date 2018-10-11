import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { updateAndReturnPlacesList, setCurrentPlace } from "../../actions/index";

class PlacesListCard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("this in the place_list_card is: ", this)

    let DataFrom4Sqr = this.props.place
    console.log("data from 4sqr", DataFrom4Sqr)

    let values = {
          fourSquareId: DataFrom4Sqr.id,
          name: DataFrom4Sqr.name,
          placeCategories: DataFrom4Sqr.categories,
          location: DataFrom4Sqr.location
        }
        this.props.updateAndReturnPlacesList(values);
  }

  handlePlaceClick(id) {
    setCurrentPlace(id);
  }

  render(){
    
    let place = this.props.placesInLocalDB[this.props.place.id];
    console.log("PLACE: ", place)

    if(!place){
      return <div>Loading...</div>
    }
    return (
      <div>
        <li>{place.name}</li>
        <li>{place.location.address}</li>
        <button 
          type="button" 
          className="btn btn-outline-primary" onClick={() => this.handlePlaceClick(place)}>
            <Link 
            to={`/ratings/${place.id}`}>
              Rate this Place
            </Link>
          </button>
        </div> 
      )
    } 
  }

function mapStateToProps (state){
  console.log("the state in places list card is: ", state);
  return { placesInLocalDB: state.placesInLocalDB } 
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAndReturnPlacesList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesListCard);

