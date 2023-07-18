// import asyncHandler from "../middleware/import asyncHandler.js";
// import User from "../models/userModel.js";

// //User Authentication
// //@route post/api/users/loging
// //access is Public
// const authUser = asyncHandler (async (req, res) => { 
//     res.send('auth user');
// });

// //User Registration
// //@route post/api/users
// //access is Public
// const registerUser = asyncHandler (async (req, res) => { 
//     res.send('register User');
// });

// //User Logout
// //@route post/api/users/loging out
// //access is Private
// const logoutUser = asyncHandler (async (req, res) => { 
//     res.send('logout User');
// });

// //User profile
// //@route get/api/users/profile
// //access is Privte
// const getUserProfile = asyncHandler (async (req, res) => { 
//     res.send(' get User profile');
// });

// //User update
// //@route get/api/users/profile
// //access is private
// const updateUserProfile = asyncHandler (async (req, res) => { 
//     res.send(' update User profile');
// });

// //Users
// //@route get/api/users
// //access is private/Admin
// const getUsers = asyncHandler (async (req, res) => { 
//     res.send('get users');
// });

// //Users by id
// //@route get/api/users/:id
// //access is private/Admin
// const getUserByID = asyncHandler (async (req, res) => { 
//     res.send('get user by id');
// });

// //User deletes
// //@route delete/api/users/:id
// //access is private/Admin
// const deleteUser = asyncHandler (async (req, res) => { 
//     res.send(' delete user');
// });

// //User updates
// //@route put/api/users/:id
// //access is private/Admin
// const updateUser = asyncHandler (async (req, res) => { 
//     res.send(' update user');
// });

// export{
//     authUser,
//     registerUser,
//     logoutUser,
//     getUserProfile,
//     updateUserProfile,
//     getUsers,
//     deleteUser,
//     getUserByID,
//     updateUser
// }