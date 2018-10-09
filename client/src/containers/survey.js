import React from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../actions/index";
import { bindActionCreators } from "redux";

class Questions extends React.Component {
  componentDidMount() {
    console.log('I am in the questions component');
    this.props.dispatch(fetchQuestions());
  }

  render() {
    console.log("this in survey.js is ", this);
    const { questions } = this.props;

    if (!questions) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {
          questions.map(questions =>
          <ul key={questions.id}>
            <li>{questions.name}</li>
            <li>{questions.text}</li>
            <li>{questions.category}</li>
            <button type="button" className="btn btn-outline-primary" id>Primary</button>
          </ul>
          )
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  //questins defined in reducers index.js
  questions: state.questions,
  // loading: state.places.loading,
  // error: state.places.error
});

//***** DO I NEED THIS? */
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchQuestions }, dispatch);
// }

export default connect(mapStateToProps)(Questions);