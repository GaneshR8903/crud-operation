const UserModel = require('../models/userModel');


class UserRepository {
    static async getAllUsers(){
        return await UserModel.findAll();
    }
    static async getUserById(userId){
        return await UserModel.findByPk(userId);
    }
    static async createUser(userData){
        return await UserModel.create(userData);
    }
    static async updateUser(userId, userData){
        const user= await UserModel.findByPk(userId);
        if(user){
            await user.update(userData);
            return user;
        }
        return null;
    }
    static async deleteUser(userId) {
        try {
          const user = await UserModel.findByPk(userId);
      
          if (user) {
            await user.destroy();
            console.log('Deleted Successfully');
            return true;
          }
      
          return false;
        } catch (error) {
          console.error('Error deleting user:', error);
          return false;
        }
    }
}
module.exports = UserRepository;