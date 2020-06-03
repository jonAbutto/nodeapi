const connectDb = require("./connectionstring");
var sql = require("mssql");

//connect to database
 connection =  sql.connect(connectDb.config, function(err) {
    if (err)
    console.log(err);
  
    var message = {
      connection: 200,
      message: "connection successful"
    };
   
    console.log(message);
  });

  module.exports.connection;