//import express
const express = require('express');   

//install CORS in order for your backend to communicate with your frontend by typwing npm install cors on your terminal

//cors (cross origin resource sharing)
const cors = require ('cors');

const mongoose = require('mongoose'); //to connect mongoose
mongoose.connect("mongodb://localhost:27017/AuthenticationDB") //installing mongodb's localhost (ie localhost:27017) you must use the default mongodb connection string which is mongodb://localhost:27017, followed by the name of what you are trying to create (ie your database name) and in this case we are making a simple authentication page that is why we named it AuthenticationDB
.then(() => console.log("MongoDB Connected")) //this handles the success message if the installation was completed
.catch(err => console.error("Connection Error: ", err)); //this is your catch section to show the error message if there is any error 
//asynchronous operation/ a promise are the .then and .catch here. 
//synchronous always wait till when the first operation has being operated while the asynchronous operation doesnt. it allows a certain aspect of our codes run. this can be either an error or success message 
//console.err works with error message. it comes with a red line


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