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
    setCurrentPlace(this.place);
  }

  handleClick(question, answer){

    let ratings = {
      'Q1_Score': 0,
      'Q2_Score': 0
    };
    ratings[question] = answer;

    let payload = {
      "fourSquareId": this.props.match.params.id,
      "ratings": ratings
    }

    this.props.submitRating(payload, null)

  }

  render() {
    let Q1_Score = this.props.ratings
    console.log("Q1_Score is", Q1_Score)
    // console.log("WHAT IS THIS.PROPS: " , this.props)

    if (!this.place) {
      return <div>Select a place to get started.</div>;
    }

    return (
      <div>
        <h2>{this.place.name}</h2>
        <div>
          <p>Question 1: </p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick('Q1_Score', 1)}>
            Yes
          </button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick('Q1_Score', 0)}>No</button>

          <h2>Current Score for Question 1: {Q1_Score}</h2>
        </div>
        <div>
          <p>Question 2:</p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick('Q2', true)}>Yes</button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick('Q2', false)}>No</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ratings: state.ratings,
  places:state.places,
  currentPlace: state.currentPlace
});

//get a rating from the db if one extists
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitRating, fetchRatings }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesRatings);

