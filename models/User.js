const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');
const userSchema = require('../schemas/userSchema');
const roleSchema = require('../schemas/roleSchema')

const User = mongoose.model('User', userSchema);
const Role = mongoose.model('Role', roleSchema);

class UserModel {
    async getAll() {
        try {
          const users = await User.find().populate('roles');
          return users;
        } catch (error) {
          throw error
        }
    }

    async createNew({ username, password, lastName, firstName, middleName, address, email, roles }) {
        try {
            const userId = nanoid(10);
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ userId, username, password: hashedPassword, lastName, firstName, middleName, address, email, roles });
            console.log(user)
            await user.save();
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(id) {
      try {
          const user = await User.findOneAndDelete({ userId: id });
          return user;
      } catch (error) {
          throw error;
      }
  }
}

module.exports = UserModel;