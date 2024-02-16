const { DataTypes } = require('sequelize');
const UserRepository = require('../repositories/userRepository');

class UserService {
  static async getAllUsers() {
    return await UserRepository.getAllUsers();
  }

  static async getUsersById(userId) {
    return await UserRepository.getUserById(userId);
  }

  static async createUser(userData) {
    return await UserRepository.createUser(userData);
  }

  static async updateUser(userId, userData) {
    return await UserRepository.updateUser(userId, userData);
  }

  static async deleteUser(userId) {
    return await UserRepository.deleteUser(userId);
  }
}

module.exports = UserService;
