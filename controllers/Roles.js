const RoleModel = require('../models/Role');
const Role = new RoleModel;

class RoleController {
    async index(req, res) {
        try {
            const roles = await Role.getAll();
            res.json(roles);
        } catch (error) {
            throw error;
        }
    }

    async create(req, res) {
        try {
            console.log(req.body)
            await Role.createNew(req.body);
            res.status(200).json({msg:'ok'});
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new RoleController;