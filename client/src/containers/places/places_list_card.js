import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { updateAndReturnPlacesList, setCurrentPlace, fetchRatings } from "../../actions/index";

class PlacesListCard extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    let idToFetch = this.props.place.id
    this.props.fetchRatings(idToFetch);
    console.log("RAAAATTTTINGS" ,this.props.ratings)
  }

  handlePlaceClick(id) {
    setCurrentPlace(id);
  }

  render(){
   

    const { place } = this.props;

    if(!place){
      return <div>Loading...</div>
    }

    return (

      <div>
        <h3>{place.name}</h3>
   
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
  console.log("state!!!!!!" , state)
  // return { placesInLocalDB: state.placesInLocalDB } 
  return { 
    places: state.places, 
    ratings: state.ratings
  } 
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAndReturnPlacesList, fetchRatings }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesListCard);

