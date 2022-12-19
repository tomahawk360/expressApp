var userModel = require('../models/user');

exports.user_create = async (data) => {
    const model = new userModel(JSON.parse(data));
    
    try{
        await model.save();
    } catch (error) {
        return error;
    }
}