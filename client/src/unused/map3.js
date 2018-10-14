// import React from "react";
// import { render } from "react-dom";
// import Mapbox from "mapbox-gl";
// import ReactMapboxGl, { Marker, Layer, Feature } from "react-mapbox-gl";
// import math from "mathjs";
// import * as turf from "@turf/turf";
// import "./style.css";

// const target = [-0.006412, 51.457753];
// const me = [0.003412, 51.47303];

// const turfMe = turf.point(me);
// const turfTarget = turf.point(target);

// const bearing = turf.bearing(turfMe, turfTarget);
// console.log("bearing", bearing);

// const data = {
//   targetPoint: new Mapbox.Point(target[0], target[1]),
//   mePoint: new Mapbox.Point(me[0], me[1])
// };

// window.data = data;
// console.log(data.mePoint.angleWith(data.targetPoint));
// const rotate = data.targetPoint.angleWith(data.mePoint) * (180 / Math.PI);
// console.log(rotate);
// const Map = ReactMapboxGl({
//   accessToken:
//     "pk.eyJ1IjoiYWxscnlkZXIiLCJhIjoidWs5cUFfRSJ9.t8kxvO3nIhCaAl07-4lkNw"
// });
// const arrow = (
//   <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQ0NC44MTkgNDQ0LjgxOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ0LjgxOSA0NDQuODE5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQzNC4yNTIsMjA4LjcwOEwyNDguMzg3LDIyLjg0M2MtNy4wNDItNy4wNDMtMTUuNjkzLTEwLjU2NC0yNS45NzctMTAuNTY0Yy0xMC40NjcsMC0xOS4wMzYsMy41MjEtMjUuNjk3LDEwLjU2NCAgIEwxMC44NDgsMjA4LjcwOEMzLjYxNSwyMTUuOTQsMCwyMjQuNjA0LDAsMjM0LjY5MmMwLDkuODk3LDMuNjE5LDE4LjQ1OSwxMC44NDgsMjUuNjkzbDIxLjQxMSwyMS40MDkgICBjNi44NTQsNy4yMzEsMTUuNDIsMTAuODU1LDI1LjY5NywxMC44NTVjMTAuMjc4LDAsMTguODQyLTMuNjI0LDI1LjY5Ny0xMC44NTVsODMuOTM5LTgzLjY1MXYyMDAuOTk4ICAgYzAsOS44OSwzLjU2NywxNy45MzYsMTAuNzA2LDI0LjEyNmM3LjEzOSw2LjE4NCwxNS43NTIsOS4yNzMsMjUuODM3LDkuMjczaDM2LjU0NWMxMC4wODksMCwxOC42OTgtMy4wOSwyNS44MzctOS4yNzMgICBjNy4xMzktNi4xODgsMTAuNzEyLTE0LjIzNiwxMC43MTItMjQuMTI2VjE5OC4xNDRsODMuOTM4LDgzLjY1MWM2Ljg0OCw3LjIzMSwxNS40MTMsMTAuODU1LDI1LjcsMTAuODU1ICAgYzEwLjA4MiwwLDE4Ljc0Ny0zLjYyNCwyNS45NzUtMTAuODU1bDIxLjQwOS0yMS40MDljNy4wNDMtNy40MjYsMTAuNTY3LTE1Ljk4OCwxMC41NjctMjUuNjkzICAgQzQ0NC44MTksMjI0Ljc5NSw0NDEuMjk1LDIxNi4xMzQsNDM0LjI1MiwyMDguNzA4eiIgZmlsbD0iIzkzM0VDNSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
// );
// const markerImg = (
//   <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik00Mi4xMTcsNDMuMDA3Yy0wLjU1LTAuMDY3LTEuMDQ2LDAuMzI3LTEuMTEsMC44NzZzMC4zMjgsMS4wNDYsMC44NzYsMS4xMUM1Mi4zOTksNDYuMjMxLDU4LDQ5LjU2Nyw1OCw1MS41ICAgYzAsMi43MTQtMTAuNjUyLDYuNS0yOCw2LjVTMiw1NC4yMTQsMiw1MS41YzAtMS45MzMsNS42MDEtNS4yNjksMTYuMTE3LTYuNTA3YzAuNTQ4LTAuMDY0LDAuOTQtMC41NjIsMC44NzYtMS4xMSAgIGMtMC4wNjUtMC41NDktMC41NjEtMC45NDUtMS4xMS0wLjg3NkM3LjM1NCw0NC4yNDcsMCw0Ny43MzksMCw1MS41QzAsNTUuNzI0LDEwLjMwNSw2MCwzMCw2MHMzMC00LjI3NiwzMC04LjUgICBDNjAsNDcuNzM5LDUyLjY0Niw0NC4yNDcsNDIuMTE3LDQzLjAwN3oiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0yOS44MjMsNTQuNzU3TDQ1LjE2NCwzMi42YzUuNzU0LTcuNjcxLDQuOTIyLTIwLjI4LTEuNzgxLTI2Ljk4MkMzOS43NjEsMS45OTUsMzQuOTQ1LDAsMjkuODIzLDAgICBzLTkuOTM4LDEuOTk1LTEzLjU2LDUuNjE3Yy02LjcwMyw2LjcwMi03LjUzNSwxOS4zMTEtMS44MDQsMjYuOTUyTDI5LjgyMyw1NC43NTd6IE0zMCwxMmMzLjg2LDAsNywzLjE0MSw3LDdzLTMuMTQsNy03LDcgICBzLTctMy4xNDEtNy03UzI2LjE0LDEyLDMwLDEyeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
// );
// class BaseMap extends React.Component {
//   state = {
//     pointerPos: []
//   };
//   componentDidMount() {
//     setTimeout(() => {
//       const b = this.map.state.map.getBounds();
//       const viewportBounds = [
//         b.getNorthEast().toArray(),
//         b.getSouthEast().toArray(),
//         b.getSouthWest().toArray(),
//         b.getNorthWest().toArray(),
//         b.getNorthEast().toArray()
//       ];

//       const viewportPolygon = turf.transformScale(
//         turf.polygon([viewportBounds]),
//         0.95
//       );
//       const path = turf.lineString([me, target]);
//       const pathIntersect = turf.lineIntersect(path, viewportPolygon);
//       console.log(pathIntersect);

//       this.setState(() => ({
//         indicator: pathIntersect.features[0].geometry.coordinates
//       }));
//     }, 50);
//   }
//   render() {
//     const indicatorMarker = this.state.indicator ? (
//       <Marker coordinates={this.state.indicator} anchor="center">
//         <div style={{ transform: `rotate(${bearing}deg)` }}>{arrow}</div>
//       </Marker>
//     ) : null;
//     return (
//       <Map
//         style="mapbox://styles/mapbox/streets-v8"
//         containerStyle={{
//           height: "100vh",
//           width: "100vw"
//         }}
//         center={me}
//         zoom={[18]}
//         ref={map => {
//           this.map = map;
//         }}
//       >
//         <Marker coordinates={target} anchor="center">
//           {markerImg}
//         </Marker>
//         <Marker coordinates={me} anchor="bottom">
//           {markerImg}
//         </Marker>
//         {indicatorMarker}
//         <Layer
//           type="line"
//           layout={{
//             "line-cap": "round",
//             "line-join": "round"
//           }}
//           paint={{
//             "line-color": "#4790E5",
//             "line-width": 12
//           }}
//         >
//           <Feature coordinates={[me, target]} />
//         </Layer>
//       </Map>
//     );
//   }
// }

// export default BaseMap;