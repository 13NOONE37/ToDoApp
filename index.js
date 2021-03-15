const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config'); // mozna tez z destrukturyzacją: const {port} = require('./config);

require('./db/mongoose');

//router
const apiRouter = require('./routes/api');

//parser
// Content-type: application/json
app.use(bodyParser.json());


app.use('/api', apiRouter);


//server
app.listen(config.port, ()=>{
    console.log("ich habe listening on http://localhost:"+config.port);
});