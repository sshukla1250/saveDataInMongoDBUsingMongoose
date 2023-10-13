const mongoose=require('mongoose');
const userSchema=new mongoose.Schema(
    {
        name:String,
        contact:String,
        email:String
    }
);
module.exports=mongoose.model('users',userSchema);