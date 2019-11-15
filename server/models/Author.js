const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "You had one job!"]},
}, {timestamps: true});
mongoose.model('Author', AuthorSchema);