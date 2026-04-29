//import express
const express = require('express');   

//install CORS in order for your backend to communicate with your frontend by typwing npm install cors on your terminal

//cors (cross origin resource sharing)
const cors = require ('cors');

//create app
const app = express();
const port = 7777
app.use(cors()); //allows any form of resource
app.use(express.json);

app.get('/', (req, res) => {
    res.send("api is ready for use");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});