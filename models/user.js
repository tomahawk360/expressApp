var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : { type : String, required: true },
    password : { type : String, require : true }
}, {
    collection : 'users'
});

const User = mongoose.model("User", UserSchema);

module.exports = User;