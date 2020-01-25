const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
   phone:{
       type: Number
   }
})

const user = mongoose.model('users', UserSchema);

module.exports = user;