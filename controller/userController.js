//this handles the business logic and interracts with the model that means the model will e imported her 
const userModel = require('../model/userModel');

//using the CRUD Method (Create, Read, Update, Delete)
const getAllUsers = async (req, res) => { //to import your module directly. async means asynchronous. it is here so it will tell your code  to run the error message if the line 6 is taking too long to be met
    try {
        const getAll = await userModel.find();  //userModel.find tells it to get all the user data in model file. await makes sure your code waits until the line 6 is being met. if it isnt, the catch error will run 
        return res
            .status(200)
            .json({ message: "Users fetched successfully", data: getAll });

    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error fetching users", error: error.message });
    }
};

//to get one user (read)
const getOneUser = async (req, res) => {
    try {
        const getOne = await userModel.findById(req.params.id);
        return res
            .status(200)
            .json({ message: "User fetched successfully", data: getOne });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error fetching user", error: error.message });
    }
};

//to create new user
const newUser = async (req, res) => {
    try {
        const { username, password, phoneNumber, email } = req.body;
        const user = await userModel.create({
            username,
            password,
            phoneNumber,
            email,
        });
        return res
            .status(201)
            .json({ message: "User created successfully", data: user });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error creating user", error: error.message })
    }
};

//Update (placeholder for now, same structure style as class MVC)
const updateUser = async (req, res) => {
    try {
        const update = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        return res
            .status(200)
            .json({ message: "User updated successfully", data: update });

    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error updating user", error: error.message })
    }
};

//delete (MVC style)
const deleteUser = async (req, res) => {
    try {
        const delete_user = await userModel.findByIdAndDelete(req.params.id);
        return res
            .status(200)
            .json({ message: "User deleted successfully", data: delete_user});
    } catch (error){
        return res
            .status(500)
            .json({ message: "Error deleting user", error: error.message });
    }
};

//export all functions
module.exports = {
    getAllUsers,
    getOneUser,
    newUser,
    updateUser,
    deleteUser
};