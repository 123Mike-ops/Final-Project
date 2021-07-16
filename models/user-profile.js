const mongoose=require('mongoose')

const userProfileSchema=mongoose.Schema({
    userId:{type:String},
    firstName:{type:String},
    lastName:{type:String},
    userName:{type:String},
    image:{type:String},
    birthDate:{type:Date},
    address:{type:String},
    gender:{type:String},
    phoneNo:{type:String},
    rate:{type:Number,defalut:1}

})

module.exports=mongoose.model("UserProfile",userProfileSchema);
