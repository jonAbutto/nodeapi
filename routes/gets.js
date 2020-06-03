var sql = require("mssql");
const express = require("express");
const router = express.Router();
const productsquery = require("../queries/queries");
const connectDb = require("../connectionstring");


var dbconn = sql.connect(connectDb.config, function(err) {
  if (err) console.log(err);

  var message = {
    connection: 200,
    message: "connection successful"
  };

  console.log(message);
});

var request = new sql.Request(dbconn);

//get all messages
router.get('/messages/inbox/:id?', (req, res) => {
  try {
   
  //  req.check('id','user id is required').notEmpty();

    var id = req.query.id;
   
    var messsagequery = `SELECT  [No_], [Sent]  ,[Title] ,[Body], [Message Type], [Read], [Deleted] FROM [Mukurweini_Dairy].[dbo].[MUKURWE-INI LIVE$Customer Messages] WHERE [Customer No_]= ${id} AND [Message Type] = 1 AND [Deleted] = 0   ORDER BY [Sent] DESC`;
    request.query(messsagequery, (error, rows, fields) => {
      if (error) console.log(error)
      if(rows == 0) console.log('no rows')
      console.log(rows);

      res.send(rows.recordset);
      // res.send(recordsets.recordset.entries);
      sql.close();
    });
  } catch (error) {
      console.log(error)
      sql.close();
  }
}); 

module.exports = router;
