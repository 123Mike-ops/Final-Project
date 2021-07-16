const mongoose=require('mongoose')

const itemSchema=mongoose.Schema({
    name:{type:String},
    categoryId:{type:String},
    quantity:{type:Number},
    price:{type:String},
    postedBy:{type:String},
    date:{type:Date,default:Date.now()},
    image:{type:String},
    location:{type:String},
    rate:{type:String}

});

module.exports=mongoose.model("Item",itemSchema);