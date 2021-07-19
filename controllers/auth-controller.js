const express=require('express')

const User=require('../models/user');
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken');

const catchAsync=require('../utils/catchAsync');

exports.protect=async(req,res,next)=>{
  let token;
   
    
  //1)check if there is a token
 
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
           token= req.headers.authorization.split(' ')[1];
              }

     if(!token){
        return next(new Error("you are not logged in to access"),401);
     }

  //2)verification token
   const decoded=await promisify(jwt.verify)(token,'my-secrete-of-long-character-ker');

     
  //3)check if the user still exists

   const  currentUser=await User.findById(decoded.id);

    if(!currentUser){
       return next( res.json({status:"fail",message:"no user is belonging to this token"}));
     }



  //4)check if the user changes password after the token was issued

  if(currentUser.passwordChangedAfter(decoded.iat)){
     
     return next(res.json({status:"fail",message:"user changed password! Login Again!"}));

  }
  req.user=currentUser; //gives users info for next middle ware after protect lalew middlware yestewal
  next();

}

exports.restrictTo= (...roles)=>{
     
  return (req,res,next)=>{

  

         if(! roles.includes(req.user.roles)){
            
             console.log(req.user.roles)

             return next(res.json({message:"you didnt have permission to this Action"}));
         }

         next();
     }

  }

exports.isSuspended=catchAsync(async (req,res,next)=>{
  if(req.user.isSuspended){
    return res.json({message:"your account has been suspended for 15 days due to too many reports !"});
  }else
 return next();
})

exports.signUp=catchAsync(async (req,res,next)=>{

    const {email,password}=req.body;
   
    const salt=await bcrypt.genSalt();
    const passwordHash=await bcrypt.hash(password,salt);
    const newUser=new User({
            email,passwordHash
        })
        const savedUser=await newUser.save();


        const sessUser = { id: savedUser.id, name: savedUser.name, email: savedUser.email };
    req.session.user = sessUser; // Auto saves session data in mongo store

    res.json({ msg: " Logged In Successfully", sessUser }); // sends cookie with sessionID automatically in response

 


})
exports.logIn=catchAsync (async (req,res,next)=>
{
    
    const {email,password}=req.body;
   
    if(!email||!password){
      return res.json({message:"please enter valid credentials"});
    }

    const user=await User.findOne({email}).select('+password');
      if (!user||!(await user.correctPassword(password,user.passwordHash)))
      {

        return res.json({message:"invalid email or password"})

      }

    const sessUser = { id: user._id,  email: user.email };
    req.session.user = sessUser; // Auto saves session data in mongo store

    res.json({ msg: " Logged In Successfully", sessUser }); // sends cookie with sessionID automatically in response
})
exports.logout=catchAsync(async(req,res,next)=>{


    //this function used with delete method route 
    req.session.destroy((err) => {
        //delete session data from store, using sessionID in cookie
        if (err) throw err;
        res.clearCookie("session-id"); // clears cookie containing expired sessionID
        res.send("Logged out successfully");
      });

}
)
exports.forgetPassword=async(req,res,next)=>{}

exports.resetPassword=async (req,res,next)=>{}
