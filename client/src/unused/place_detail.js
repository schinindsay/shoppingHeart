// import React, { Component } from "react";
// import { connect } from "react-redux";

// class PlaceDetail extends Component {
//   constructor(props) {
//     super(props);

//     this.place = props.places.find(place => place.id === props.match.params.id);
//   }
  
//   render() {

//     console.log(this.place)
//     if (!this.place) {
//       return <div>Select a place to get started.</div>;
//     }

//     return (
//       <div>
//         <h2>{this.place.name}</h2>
//         <button type="button" className="btn btn-outline-primary"></button>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     places: state.places
//   };
// }

// export default connect(mapStateToProps)(PlaceDetail);