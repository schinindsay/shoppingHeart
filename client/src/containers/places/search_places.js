import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPlaces } from "../../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event)
    this.setState({ searchQuery: event.target.value });
    console.log(this.state)
  }

  onFormSubmit(event) {
    event.preventDefault();
    // We need to go and fetch places based on a search param
    this.props.fetchPlaces(this.state.searchQuery);
    this.setState({ searchQuery: "" });
    console.log ("THE STATE AFTER SEARCH FORM SUBMIT IS: ", this.state)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search for businesses by name, category, etc."
          className="form-control"
          value={this.state.searchQuery}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaces }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);