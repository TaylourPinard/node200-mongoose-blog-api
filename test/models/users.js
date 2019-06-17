const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: string, required: true}, 
});

module.exports = mongoose.model('User', UserSchema);