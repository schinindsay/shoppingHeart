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

  // <div class="py-5 text-center bg-dark text-white">
  // <div class="container">
  //   <div class="row" >
  //     <div class="p-5 col-lg-6 col-10 mx-auto border">
  //       <h1 class="mb-4">See </h1>
  //       <form>
  //         <div class="form-group"> <input type="text" class="search-bar" placeholder="Query" id="Query"> 
  //</div>
  //          
  //             <small class="form-text text-muted text-right">
  //               <a href="#"> Already have an account?</a>
  //             </small> </div> <button type="submit" class="btn btn-primary">Submit</button>
  //         </form>
  //           </div>
  //         </div>
  //   </div>
  //     </div>

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