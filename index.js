const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

// import express
const express = require('express');   

// install CORS in order for your backend to communicate with your frontend 
// by typing npm install cors on your terminal
// cors (cross origin resource sharing)
const cors = require('cors');

const mongoose = require('mongoose'); // to connect mongoose
const router = require('./routes/userRoutes'); // connect your routes

// LONG URL: We use this format to bypass the "querySrv" error caused by some local ISPs.
// This skips the DNS lookup that was causing your ECONNREFUSED error.

// IMPORTANT:
// Never expose your real MongoDB username and password publicly.
// Use environment variables later with dotenv.

const uri = "mongodb+srv://qagwu11_db_user:Amateratsu@cluster0.qtuzgtq.mongodb.net/AuthenticationDB?retryWrites=true&w=majority";

const local_url = "mongodb://localhost:27017/AuthenticationDB"; // mongodb local url

mongoose
    // .connect(local_url) // installing mongodb's localhost (ie localhost:27017) 
    // you must use the default mongodb connection string which is mongodb://localhost:27017, 
    // followed by the name of what you are trying to create (ie your database name) 
    // and in this case we are making a simple authentication page that is why we named it AuthenticationDB
    
    .connect(uri) // connect to MongoDB Atlas
    .then(() => console.log("🔥 Amateratsu! MongoDB Connected Successfully")) // handles success message
    .catch(err => console.error("❌ Connection Error: ", err.message)); // catch section for error messages

// asynchronous operation/ a promise are the .then and .catch here. 
// synchronous always wait till when the first operation has being operated 
// while the asynchronous operation doesnt. it allows a certain aspect of our codes run. 
// this can be either an error or success message 
// console.error works with error message. it comes with a red line

// create app
const app = express();
const port = 7777;

app.use(cors()); // allows any form of resource
app.use(express.json()); // allows the app to handle JSON data

// use routes
app.use("/api", router);

app.get('/', (req, res) => {
    res.send("api is ready for use");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});