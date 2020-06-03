const express = require('express');
const bodyParser = require('body-parser');
const productsquery = require("./queries/queries");
const app = express();
const Postroute = require('./routes/posts');
const getsRoute = require('./routes/gets');
require('dotenv/config');
var sql = require('mssql');
const connectDb = require('./connectionstring');
// middleware
//convert response to json
app.use(bodyParser.json());

//import routes
app.use('/',Postroute);
app.use('/',getsRoute);

app.get('/home', (req, res)=>{
    res.send('im home')
})

//start a server to listen on a given port
var  starting = app.listen(process.env.PORT, ()=>
    console.log('started on port '+ starting.address().port));

