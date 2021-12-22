const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const wishSchema = new Schema({
    description: {
        type: String
    },
    date: {
        type: String
    },
    image: {
        type: String
    }

});

mongoose.model('Wish', wishSchema);