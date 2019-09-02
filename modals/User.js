const mongoose=require('mongoose');
const Schemas=mongoose.Schema;
const UserSchema=new Schemas({
    name: String,
    email:{
        type:String,
        required:true
    },
    age: Number,
    Adress:String,
    friendid:Array
    
})
const User=mongoose.model('User',UserSchema);

module.exports=User;