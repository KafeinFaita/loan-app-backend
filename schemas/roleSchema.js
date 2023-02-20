const mongoose = require('mongoose');
const userSchema = require('./userSchema');

const User = mongoose.model('User', userSchema);

const roleSchema = new mongoose.Schema({
    roleId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    privileges: {
        type: [String],
        required: true
    }
}, { timestamps: true });

roleSchema.pre('deleteOne', async function(next) {
    const query = await this.model.findOne(this.getQuery())
    const id = query._id

    await User.updateMany({ roles: { $in: [id] }}, { $pull: { roles: id } });
    console.log(this.getQuery());
    next();
})

module.exports = roleSchema;