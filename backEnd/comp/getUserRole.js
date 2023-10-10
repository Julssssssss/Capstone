const adminModels = require('../Models/admin')
const moderatorModels = require('../Models/moderators')

const getAdminRole = async () => {
    try {
        const result = await adminModels.find({});
        return result.email;
    } catch (err) {
        console.log(err);
    }
}

const getModRole = async () => {
    try {
        const result = await moderatorModels.find({});
        return result.email;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {getAdminRole, getModRole}