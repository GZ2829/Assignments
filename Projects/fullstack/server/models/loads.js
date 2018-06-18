var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const loadSchema = new Schema({
    originCity: {
        type: String,
        required: true
    },
    originState: {
        type: String,
        required: true
    },
    destinationCity: {
        type: String,
        required: true
    },
    destinationState: {
        type: String,
        required: true
    },
    typeOfTrailer:{
        type: String,
        required: true
    },
    isPalletized:{
        type: Boolean 
    },
    needAssistanceLoading: {
        type: Boolean
    },
    isGPSRequired: {
        type: Boolean,
        required: true
    }

})