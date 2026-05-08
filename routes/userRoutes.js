const express = require('express');

//importing all controller functions from userController
const {
    getAllUsers,
    getOneUser,
    newUser,
    updateUser,
    deleteUser
} = require('../controller/userController');

//creating router instance from express
const router = express.Router();

//get all users route
router.get("/getAllUsers", getAllUsers);

//get single user by id route
router.get("/getOneUser/:id", getOneUser);

//create new user route
router.post("/newUser", newUser);

//update user route
router.patch("/updateUser/:id", updateUser); //use patch since you want to update only one or certain informations in your database, dont use put since put will update all data

//delete user route
router.delete("/deleteUser/:id", deleteUser);

//export router so it can be used in index.js
module.exports = router;
