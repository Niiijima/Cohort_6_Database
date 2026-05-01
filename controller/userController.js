//this handles the business logic and interracts with the model that means the model will e imported her 
const userModel = require('../model/userModel');

exports.getAllUsers = async(req , res)=>{ //to import your module directly. async means asynchronous. it is here so it will tell your code  to run the error message if the line 6 is taking too long to be met
    try{
        const getAll = await userModel.find();  //userModel.find tells it to get all the user data in model file. await makes sure your code waits until the line 6 is being met. if it isnt, the catch error will run 
        return res
            .status(200)
            .json({ message: "Users fetched successfully", data: getAll });

    }catch(error){
        return res
            .status(500)
            .json({ message: "Error fetching users", error: error.message });
    }
};

//line 4 can be written as 
//module.exporys ={
//  getAllUsers,
//}


//to get a single user
//do this
//exports.getOne = as]ync(req , res)=>{ //to import your module directly. async means asynchronous. it is here so it will tell your code  to run the error message if the line 6 is taking too long to be met
//    try{
//        const getAll = await userModel.findById(req.params.id);  //userModel.find tells it to get all the user data in model file. await makes sure your code waits until the line 6 is being met. if it isnt, the catch error will run 
//        return res