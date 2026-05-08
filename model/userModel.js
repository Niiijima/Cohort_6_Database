const mongoose = require('mongoose');

//this defines the structure of the user data in the database
const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
        required : true //to make sure a person cant sign up without a password (user validation)
    },
    phoneNumber: {
        type: Number,
    },
    email: {
        type: String,
        required : true, // to make sure that a user cant create an account without inputing their email (user validaion)
        unique : true //to make sure that a user cant use the same email to create an account more than once (user validation)
    },
});

//this exports the model so it can be used in controllers and routes
module.exports = mongoose.model("User", userSchema);

//in mongoose every datatype must start with a capital letter (like our String)

//model is the method from mongoose used to create a collection and interact with the database