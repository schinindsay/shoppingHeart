// const keys = require('../config/keys');
// const fourSquareClientID = require('fourSquareClientID')(keys.fourSquareClientID);
// const fourSquareClientSecret = require('fourSquareClientSecret')(keys.fourSquareClientSecret);

// module.exports = app => {
  
//   app.get('/api/places', async(req, res) => {

//     //https://api.foursquare.com/v2/venues/search?client_id=0X4HGM5A3IJYBINHJELZ5SU4WKWKHECAXQCZCM53NRPI3BF3&client_secret=VW4GM523Q3TEGQ2OFVKD5LEZ4VXDKQL1UZ0GE5TSKLSNE1UG&v=20180323&limit=10&ll=35.9940,-78.8986&query=coffee

//     let root_url = 'https://api.foursquare.com/v2/venues/search';
//     let latitude = location.latitude;
//     let longitude = location.longitude;
//     let query = category;

//     // let places = `${root_url}?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&limit=50&ll=${latitude},${longitude}&query=${query}`
//     let places = `${root_url}?client_id=${fourSquareClientId}&client_secret=${fourSquareClientSecret}&limit=50&ll=35.9940,-78.8986&query=${query}`

//     res.send(places);
//   })

// }

