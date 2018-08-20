const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const userSchema = new Scheme({
    googleId: {
        type: string,
        unique: true
    },
    name: String,
    surname: String,
    profilePhotoUrl: String
});

module.exports = mongoose.model('Users', userSchema);