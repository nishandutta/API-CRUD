// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser = require('../middleware/validateUser');

// Routes
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.post('/api/user', validateUser, userController.createUser);
router.put('/api/user/:id', validateUser, userController.updateUser);
router.delete('/api/user/:id', userController.deleteUser);

module.exports = router;
