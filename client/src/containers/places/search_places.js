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
      <div className=" search-div text-center py-2 bg-dark">
          <div className="row bg-dark">
            <div className="bg-white col-md-8 col-10  mx-auto p-3">
              
              <form className="input-group" onSubmit={this.onFormSubmit}>

                <div className="bg-white col-md-8 col-10  mx-auto p-3">

                  <div className="form-group"> 
                    <input type="search" 
                      className="form-control search-input"
                      placeholder="Search by City, Place, etc..." 
                      value={this.state.searchQuery}
                      onChange={this.onInputChange}
                    /> 
                  </div>

                
                
                  <button type="submit" className="btn btn-primary">Submit</button>
               </div>
              </form>
            </div>
          </div>
        </div>
    
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaces }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);