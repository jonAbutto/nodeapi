var sql = require("mssql");
const express = require("express");
const router = express.Router();
const productsquery = require("../queries/queries");
const connectDb = require("../connectionstring");

//connect to database
sql.connect(connectDb.config, function(err) {
  if (err)
  console.log(err);

  var message = {
    connection: 200,
    message: "connection successful"
  };
 
  console.log(message);
});


//query object
var request = new sql.Request();

// get all the products
router.get('/products/:id?', function(req, res) {
  try {
  console.log('params '+req.query.id);
    request.query(productsquery.productsquery(req.query.id), function(err, recordset) {
      if (err){
        console.log("no rows " + err);
      } 
      res.send(recordset.recordset);
    });
  } catch (err) {
    console.log("try catch error" + err);
  }
});

//get all the messages from inbox
// router.get("/", function(req, res) {
//   request.query("");
// });

module.exports = router;
