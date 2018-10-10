import React from "react";
import { connect } from "react-redux";
import { submitRating } from "../actions/index";
import { bindActionCreators } from "redux";

class Survey extends React.Component {
  constructor(props) {
    super(props);
    //this.place = props.places.find(place => place.id === props.match.params.id);
  }

  componentDidMount() {
    // this.props.fetchRating()
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
    console.log(this.props.currentPlace.name, this)
    if (!this.props.currentPlace) {
      return <div>Select a place to get started.</div>;
    }

    return (
      <div>
        <h2>{this.props.currentPlace.name}</h2>
        <div>
          <p>Question 1: </p>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick('Q1_Score', 1)}>
            Yes
          </button>
          <button type="submit" className="btn btn-secondary" onClick={() => this.handleClick('Q1_Score', 0)}>No</button>
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
  currentPlace: state.currentPlace
});

//get a rating from the db if one extists
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitRating }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);

