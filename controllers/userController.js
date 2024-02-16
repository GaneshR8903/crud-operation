const { deleteUser } = require('../repositories/userRepository');
const UserService = require('../services/userServices');
const { DataTypes } = require('sequelize');
const UserModel = require('../models/userModel');
class UserController{
    static async getAllUsers(req,res){
        const users = await UserService.getAllUsers();
        res.json(users);
    }
    static async getUsersById(req,res){
        const userId = req.params.id;
        try {
            const user = await UserService.getUsersById(userId);
            if (user) {
              res.json(user);
            } else {
              res.status(404).json({ message: 'User not found' });
            }
          } catch (error) {
            console.error('Error getting user by ID:', error);
            res.status(500).json({ message: 'Internal server error' });
          }
    }
    static async createUser(req,res){
        const userData = req.body;
        try{
            const newUser = await UserService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error){
            res.status(400).json({ message:'Failed to create user', error: error.message});
        }
    }
    static async updateUser(req,res){
        const userId =req.params.id;
        const userData =req.body;
        try{
            const updatedUser = await UserService.updateUser(userId, userData);
            if(updatedUser){
                res.json(updatedUser);
            }else {
                res.status(404).json({ message: 'User not found'});
            }
        } catch(error){
            res.status(400).json({ message:'Faied to update user', error: error.messgae});
        }
    }
    static async deleteUser(req, res) {
        const userId = req.params.id;
    
        try {
          const success = await UserService.deleteUser(userId);
    
          if (success) {
            res.json({ message: 'User deleted successfully' });
          } else {
            res.status(404).json({ message: 'User not found' });
          }
        } catch (error) {
          console.error('Error deleting user:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      }
    }
    module.exports = UserController;
    