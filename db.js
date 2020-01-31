var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Numsabia');

var postSchema = new mongoose.Schema({
    "id": String,
    "content": String,
    "source": String,
    "image": String,
}, { collection: 'posts' }
);

module.exports = { Mongoose: mongoose, postSchema: postSchema }