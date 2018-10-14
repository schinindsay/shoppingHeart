const Rating = require('../models/ratings');

const getRatingsBy4SqId = (req, res) => {
  Rating
    .find({
      fourSquareId : req.params.fourSquareId
    }, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("RESULT: " + result);
      res.json(result)
    })

  }

function addRating (req, res) {

  let Q1_Score_Y = req.body.ratings.Q1_Score.yes;
  let Q1_Score_N = req.body.ratings.Q1_Score.no;
  let Q2_Score_Y = req.body.ratings.Q2_Score.yes;
  let Q2_Score_N = req.body.ratings.Q2_Score.no;
  let Q3_Score_Y = req.body.ratings.Q3_Score.yes;
  let Q3_Score_N = req.body.ratings.Q3_Score.no;
  let Q4_Score_Y = req.body.ratings.Q4_Score.yes;
  let Q4_Score_N = req.body.ratings.Q4_Score.no;
  let Q5_Score_Y = req.body.ratings.Q5_Score.yes;
  let Q5_Score_N = req.body.ratings.Q5_Score.no;
  let Q6_Score_Y = req.body.ratings.Q6_Score.yes;
  let Q6_Score_N = req.body.ratings.Q6_Score.no;
  let Q7_Score_Y = req.body.ratings.Q7_Score.yes;
  let Q7_Score_N = req.body.ratings.Q7_Score.no;
  let Q8_Score_Y = req.body.ratings.Q8_Score.yes;
  let Q8_Score_N = req.body.ratings.Q8_Score.no;
  let Q9_Score_Y = req.body.ratings.Q9_Score.yes;
  let Q9_Score_N = req.body.ratings.Q9_Score.no;
  let fourSquareId = req.body.fourSquareId;
    
  Rating.findOneAndUpdate(
    {"fourSquareId": fourSquareId},
    
    { $inc: 
      { 
      "ratings.Q1_Score.yes": Q1_Score_Y,
      "ratings.Q1_Score.no": Q1_Score_N,
      "ratings.Q2_Score.yes": Q2_Score_Y,
      "ratings.Q2_Score.no": Q2_Score_N,
      "ratings.Q3_Score.yes": Q3_Score_Y,
      "ratings.Q3_Score.no": Q3_Score_N,
      "ratings.Q4_Score.yes": Q4_Score_Y,
      "ratings.Q4_Score.no": Q4_Score_N,
      "ratings.Q5_Score.yes": Q5_Score_Y,
      "ratings.Q5_Score.no": Q5_Score_N,
      "ratings.Q6_Score.yes": Q6_Score_Y,
      "ratings.Q6_Score.no": Q6_Score_N,
      "ratings.Q7_Score.yes": Q7_Score_Y,
      "ratings.Q7_Score.no": Q7_Score_N,
      "ratings.Q8_Score.yes": Q8_Score_Y,
      "ratings.Q8_Score.no": Q8_Score_N,
      "ratings.Q9_Score.yes": Q9_Score_Y,
      "ratings.Q9_Score.no": Q9_Score_N
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
  getRatingsBy4SqId,
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
