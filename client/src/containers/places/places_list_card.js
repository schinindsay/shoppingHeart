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

// <div class="container">
//   <div class="row">
//     <div class="mx-auto p-4 col-md-6" >

//       <div class="card"> <img class="card-img-top" src=# alt="Card image cap">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>

//       <div class="mx-auto p-4 col-md-6"><img class="card-img-top" src="https://pingendo.com/assets/photos/wireframe/photo-1.jpg" alt="Card image cap">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>

  render(){
    console.log('PROOOOOPPPPPs', this.props)
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

