const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please add the email"],
        unique: [true, "Email already existed, please use other email"]
    },
    password: {
        type: String,
        required: [true, "Please add the password"],
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);