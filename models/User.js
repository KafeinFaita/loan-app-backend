const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const userSchema = require('../schemas/userSchema');

const User = mongoose.model('User', userSchema);

class UserModel {
    async createNew({ username, password, lastName, firstName, middleName, address, email, roles }) {
        try {
            const userId = nanoid(10);
            const user = new User({ userId, username, password, lastName, firstName, middleName, address, email, roles });
            console.log(user)
            await user.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserModel;