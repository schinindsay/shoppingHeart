const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});

//NOTE I HAVE NOT YET SET UP ANY DEPLOYMENT BUT AM ADDING IN SO I CAN
const PORT = process.env.PORT || 5000;
app.listen(PORT);
