const mongoose = require('mongoose');

const PrimaryObjectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "A title is required"]
    },

    description: {
        type:String,
        required:[3, "Description must be at least 3 characters"]
    },
    url:{
        type:String,
    },
    reviews:[{
        comment:String,
        rating:Number
    }]
}, {timestamps:true})

mongoose.model("PrimaryObject", PrimaryObjectSchema);