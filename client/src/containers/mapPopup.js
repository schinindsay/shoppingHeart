import React, { Component } from "react";
import { connect } from "react-redux";
import { Popup } from 'react-mapbox-gl';


class mapPopup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coords: "",
      places: this.places
    }
  }

  componentDidMount() {
    console.log("props in the places mapPopup component are", this.props)


  }

  _renderPopups = function () {

    let popup = this.props.places.map(place =>
      <Popup 
        coordinates={[place.location.lng, place.location.lat]}
        anchor="bottom"
        offset={[0, -50]}
        >
        <div>
          <h1>{place.name}</h1>
        </div>
        
      </Popup>
    )

    return popup
  }


  render() {
    // const { place } = this.props;

    return (
      <div>
         <popup />
      </div>

    )
  }
}

function mapStateToProps(state) {
  console.log("state for mappopup location", state)
  return {
    places: state.places,
  }
};

export default connect(mapStateToProps)(mapPopup);





// const offset = [0, -15];

// const MapPopup: React.StatelessComponent<Props> = ({ monument }) => (
//   <Popup
//     coordinates={monument.latlng}
//     anchor="bottom"
//     offset={offset}>
//     <div className={css(styles.container)}>
//       <img className={css(styles.image)} src={monument.image_url} />
//       <div className={css(styles.footer)}>
//         <h1 style={{ fontSize: 15 }}>{monument.site}</h1>
//       </div>
//     </div>
//   </Popup>
// );

// export default MapPopup;
