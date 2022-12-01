const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true},
    email: { type: String, required: true,unique: true},
    account: {type: String, unique: true, required: true},
    password: { type: String, minlength: 8, required: true},
    phone:{type:Number,length:10,require:true},
    avt: {type: String,}
}, { timestamps: true }, { collection: 'users' })

//ma hoa password
userSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        if (error) {
            return next(error);
        } else {
            user.password = hash;
            next();
        }
    })
})

const User = mongoose.model('users', userSchema);

module.exports = User;