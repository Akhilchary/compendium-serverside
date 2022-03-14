const mongoose =require('mongoose');

const PostidSchema = new mongoose.Schema({
    postid:{
        type:String,
        required:true
    },
    posttitle:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("Postid",PostidSchema);