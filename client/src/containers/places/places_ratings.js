import React from "react";
import { connect } from "react-redux";
import { submitRating, setCurrentPlace, fetchRatings} from "../../actions/index";
import { bindActionCreators } from "redux";

class PlacesRatings extends React.Component {
  constructor(props) {
    super(props);
    this.place = this.props.places.find(place => place.id === this.props.match.params.id);
  }

  componentDidMount() {
    // this.props.setCurrentPlace(this.props.places.find(place => place.id === this.props.match.params.id));
    // this.place = 
    // console.log(this.place, "thiiiiiiissss")
  }

  handleClick(question, answer){

    let ratings = {}
    for(let i = 1; i <= 9; i++) {
      ratings['Q'+i+'_Score'] = {'yes': 0, 'no': 0};
    }
    ratings['Q' + question + '_Score'][answer] = 1;

    let payload = {
      "fourSquareId": this.props.match.params.id,
      "ratings": ratings
    }

    this.props.submitRating(payload, null)

  }

  render() {
    // console.log(this.currentPlace, "this.currentPlace")
    // let Q1_Score = this.props.ratings
    // console.log("Q1_Score is", Q1_Score)
    // console.log("WHAT IS THIS.PROPS: " , this.props)

    let place = this.props.places.find(place => place.id === this.props.match.params.id);
    
    if (!place) {
      return <div>Select a place to get started.</div>;
    }
    let currentPlaceRatings = this.props.ratings[this.props.match.params.id]
    
    if(!currentPlaceRatings) {
      currentPlaceRatings={ratings:{}};
      for (let i = 1; i <= 9; i++) {
        currentPlaceRatings.ratings['Q' + i + '_Score'] = { 'yes': 0, 'no': 0 };
      }
    };
    return (
      <div>
        <h2>{place.name}</h2>
        <div>
          <p>Question 1: </p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(1, 'yes')}>Yes</button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(1, 'no')}>No</button>
          <h2>Current Score for Question 1: </h2>
          <br/> 
          <h3>yes: {currentPlaceRatings.ratings.Q1_Score.yes} </h3>
          <h3>no: {currentPlaceRatings.ratings.Q1_Score.no} </h3>
        </div>

        <div>
          <p>Question 2:</p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(2,'yes')}>Yes</button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(2, 'no' )}>No</button>
          <h2>Current Score for Question 2: </h2>
          <br />
          <h3>yes: {currentPlaceRatings.ratings.Q2_Score.yes} </h3>
          <h3>no: {currentPlaceRatings.ratings.Q2_Score.no} </h3>
        </div>

        <div>
          <p>Question 3:</p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(3, 'yes')}>Yes</button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(3, 'no')}>No</button>
          <h2>Current Score for Question 3: </h2>
          <br />
          <h3>yes: {currentPlaceRatings.ratings.Q3_Score.yes} </h3>
          <h3>no: {currentPlaceRatings.ratings.Q3_Score.no} </h3>
        </div>

        <div>
          <p>Question 5:</p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(4, 'yes')}>Yes</button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(4, 'no')}>No</button>
          <h2>Current Score for Question 5: </h2>
          <br />
          <h3>yes: {currentPlaceRatings.ratings.Q5_Score.yes} </h3>
          <h3>no: {currentPlaceRatings.ratings.Q5_Score.no} </h3>
        </div>

        <div>
          <p>Question 5:</p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(5, 'yes')}>Yes</button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(5, 'no')}>No</button>
          <h2>Current Score for Question 5: </h2>
          <br />
          <h3>yes: {currentPlaceRatings.ratings.Q5_Score.yes} </h3>
          <h3>no: {currentPlaceRatings.ratings.Q5_Score.no} </h3>
        </div>

        <div>
          <p>Question 6:</p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(6, 'yes')}>Yes</button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(6, 'no')}>No</button>
          <h2>Current Score for Question 6: </h2>
          <br />
          <h3>yes: {currentPlaceRatings.ratings.Q6_Score.yes} </h3>
          <h3>no: {currentPlaceRatings.ratings.Q6_Score.no} </h3>
        </div>

        <div>
          <p>Question 7:</p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(7, 'yes')}>Yes</button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(7, 'no')}>No</button>
          <h2>Current Score for Question 7: </h2>
          <br />
          <h3>yes: {currentPlaceRatings.ratings.Q7_Score.yes} </h3>
          <h3>no: {currentPlaceRatings.ratings.Q7_Score.no} </h3>
        </div>

        <div>
          <p>Question 8:</p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(8, 'yes')}>Yes</button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(8, 'no')}>No</button>
          <h2>Current Score for Question 8: </h2>
          <br />
          <h3>yes: {currentPlaceRatings.ratings.Q8_Score.yes} </h3>
          <h3>no: {currentPlaceRatings.ratings.Q8_Score.no} </h3>
        </div>

        <div>
          <p>Question 9:</p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(9, 'yes')}>Yes</button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick(9, 'no')}>No</button>
          <h2>Current Score for Question 9: </h2>
          <br />
          <h3>yes: {currentPlaceRatings.ratings.Q9_Score.yes} </h3>
          <h3>no: {currentPlaceRatings.ratings.Q9_Score.no} </h3>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return ({
  ratings: state.ratings,
  places:state.places,
  currentPlace: state.currentPlace
})
};

//get a rating from the db if one extists
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitRating, fetchRatings, setCurrentPlace }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesRatings);

