const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({

    //will contain the state abbreviation values
    stateCode:{
        type: String,
        required: true,
        unique: true
    },
    
    //will contain state name
    state: {
        type: String,
        required: true,
    },

    //will contain fun facts about the state
    funfacts: {
        type: [String] //array
    }
}, {
    collection: 'states'

});

module.exports = mongoose.model('State', stateSchema);