const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, require: true},
    password: {type: String, require: true}
}, {
    timeseries: true
})

const User = mongoose.model("User", userSchema); // This creates the model

module.exports = User; 
