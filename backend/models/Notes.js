const mongoose = require("mongoose");
const {Schema} = require9('mongoose')
const NotesSchema = new Schema({

title:{

type: Stirng,
required: true

},
description:{

    type: Stirng,
    required: true
},
tag: {

    type: String,
    default: "general"
},
date:{

     type : Date,
     default: Date.now
}


})


module.exports= mongoose.model("notes", NotesSchema)