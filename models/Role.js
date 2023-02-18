const mongoose = require('mongoose');
const roleSchema = require('../schemas/roleSchema');

const Role = mongoose.model('Role', roleSchema);

class RoleModel { // coincidental pun btw

    async getAll() {
        try {
            const roles = await Role.find();
            return roles;
        } catch (error) {
            throw error
        }
    }

    async createNew ({ title, privileges }) {
        try {
            const role = new Role({ title, privileges });
            await role.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RoleModel;