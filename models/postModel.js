//import mongoose
const mongoose=require("mongoose");

//route handler
const postSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",//reference to the post module

    },
    
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comment: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
    }]
})


//export
module.exports=mongoose.model("Post",postSchema)