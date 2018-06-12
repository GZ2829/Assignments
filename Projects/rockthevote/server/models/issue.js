const mongoose = require('mongoose');
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
    counter: {
        type: Number,

    }

})


module.exports = mongoose.model('Issues', issueSchema)