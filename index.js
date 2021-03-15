const express = require('express');
const app = express();
const config = require('./config'); // mozna tez z destrukturyzacją: const {port} = require('./config);

//router
const apiRouter = require('./routes/api');


app.use('/', apiRouter);

app.listen(config.port, ()=>{
    console.log("ich habe listening on http://localhost:"+config.port);
});