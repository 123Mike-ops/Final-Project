const express=require('express')

const router=express.Router();
const authController=require('../controllers/auth-controller');



router.route('/signup')
        .post(authController.signUp)
router.route('/login')
      .post(authController.logIn)
router.route('/forgetPassword')
        .post(authController.forgetPassword)
router.route('/resetPassword')
        .post(authController.resetPassword)

        
module.exports=router;