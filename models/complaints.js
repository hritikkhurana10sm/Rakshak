const mongoose = require('mongoose');

const complaintsSchema = mongoose.Schema({
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
    ,authorName:{
        type: String
    },
    authorEmail:{
        type: String
    },
    authorPhone:{
        type: String
    },
    accused:[{
        type: String
    }],
    files:[{
        type: String,
        default: ""
    }],
    date:{
        type: Date
    },
    department:{
        type: String
    },
    description:{
        type: String
    },
    status:{
        type: String,
        default: 'pending'
    }
});

const complaints= mongoose.model('complaints', complaintsSchema);
module.exports = complaints;