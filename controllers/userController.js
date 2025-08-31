let users = require('../models/userModel');

// Get all users
const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

// Get user by ID
const getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.status(200).json(user);
};

// Add new user
const createUser = (req, res) => {
  const { id, firstName, lastName, hobby } = req.body;
  if (!id || !firstName || !lastName || !hobby) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const newUser = { id, firstName, lastName, hobby };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Update user
const updateUser = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  const { firstName, lastName, hobby } = req.body;
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (hobby) user.hobby = hobby;

  res.status(200).json(user);
};

// Delete user
const deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
   if (index === -1) {
    res.status(404);
    return next(new Error("User not found"));
  }

  const deletedUser = users.splice(index, 1);
  res.status(200).json({ message: "User deleted successfully", user: deletedUser[0] });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
