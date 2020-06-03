//create the databse connectio string
require('dotenv/config');
exports.config = {
    user: process.env.USER,
    password: process.env.PWD,
    server: process.env.SERVER, 
    database: process.env.DB,
    options:{
        encrypty:false,
    }
};

