const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    }
  
})
userSchema.plugin(passportLocalMongoose);   
/*above method automatically created 
  the username and password so we do not 
 need to initalie it*/
module.exports=mongoose.model('UserDelicious',userSchema);