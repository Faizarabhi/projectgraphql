const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    clientId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    name:{
        type : String,
    },
    description:{
    type: String
    },
   status: {
    enum :['Not Started', 'In Progress', 'Completed'],
    type : String
   },
})


module.exports = mongoose.model('Project', ProjectSchema)