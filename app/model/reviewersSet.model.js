var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var ReviewerSchema = new Schema({
    user_id: Number,

    username: {
        type: String
    },
    
    repo: {
        type: String
    },

    repo_id: Number

});


mongoose.model('Reviewer', ReviewerSchema);

module.exports = ReviewerSchema;