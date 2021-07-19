const express=require('express');

const Item=require('../models/item');
const catchAsync=require('../utils/catchAsync')
const AppError=require('../utils/appError');

exports.checkBody=(req,res,next)=>{

    if(!req.body.name||!req.body.categoryId||!req.body.price||!req.body.postedBy||!req.body.location)
    {
       res.json({message:"missing main elemnets of an item "})
    }
    next();
 }
 
exports.addItem=(req,res,next)=>{

}

exports.deleteItem=(req,res,next)=>{
     // if(!item){
    //      return next(new AppError (`no item found with this ID` ,404));    //used for handling if there is no item found with the Id
    // }
}
exports.updateItem=(req,res,next)=>{}
exports.findItem=(req,res,next)=>{
     // if(!item){
    //      return next(new AppError (`no item found with this ID` ,404));    //used for handling if there is no item found with the Id
    // }
}

exports.getItem=catchAsync(async (req,res,next)=>{
    // if(!item){
    //      return next(new AppError (`no item found with this ID` ,404));    //used for handling if there is no item found with the Id
    // }

});
exports.findItemByOwner=(req,res,next)=>{}