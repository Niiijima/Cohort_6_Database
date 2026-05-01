const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    username: {
        type : String,
    },
    password :{
        type : String,
    },
    phoneNumber :{
        type : Number,
    },
    email : {
        type : String,
    },
})

module.export = module.model("user", userSchema);
//in mongoose every datatype must start with a capital letter (like our String)

//model is the method from mongoose used to 