const Rating = require('../models/ratings');

function getRatings (req, res) {
  let fourSquareId = req.params.id;

  Rating.findById({ "fourSquareId" : fourSquareId });

}

function addRating (req, res) {

  let Q1_Score = req.body.ratings.Q1_Score;
  let Q2_Score = req.body.ratings.Q2_Score;
  let fourSquareId = req.body.fourSquareId;
    
  Rating.findOneAndUpdate(
    {"fourSquareId": fourSquareId},
    
    { $inc: 
      { 
        "ratings.Q1_Score": Q1_Score, 
        "ratings.Q2_Score": Q2_Score 
      }
    },
      
    {
      "upsert" : true,
      "new":true
    }, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("RESULT: " + result);
      res.json(result)
    }
  )
}

module.exports = {
  getRatings,
  addRating
}





// // Create and Save a new Rating
// function createRating (req, res) {

//   // Validate request
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Question content can not be empty"
//     });
//   }

//   // Create a Rating
//   const rating = new Rating({
//     fourSquareId: req.body.fourSquareId,
//     ratings:{
//       Q1_Score: req.body.ratings.Q1_Score,
//       Q2_Score: req.body.ratings.Q2_Score,
//     }
//   });

//   // Save Rating in the database
//   rating.save()
//     .then(data => {
//       res.send(data);
//     }).catch(err => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while creating the Rating."
//       });
//     });
// }
