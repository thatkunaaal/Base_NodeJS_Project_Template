const express = require('express');

const app = express();
const PORT = require('./config') | 3000;



app.listen(PORT,()=>{
    console.log(`Server is up and running on port: ${PORT}`)
})
