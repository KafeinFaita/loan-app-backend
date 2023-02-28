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

    async show(req, res) {
        try {
            const role = await Role.getOne(req.params.id);
            res.json(role);
        } catch (error) {
            throw error
        }
    }

    async create(req, res) {
        try {
            await Role.createNew(req.body);
            res.status(200).json({msg:'ok'});
        } catch (error) {
            throw error;
        }
    }

    async delete(req, res) {
        try {
            await Role.deleteOne(req.params.id)
            res.json({ deleted: true })
        } catch (error) {
            throw error
        }
    }
}

module.exports = new RoleController;