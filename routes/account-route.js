const express=require('express')

const router=express.Router();
const authController=require('../controllers/auth-controller')
const accountController=require('../controllers/account-controller')

router.route('/upgradeAccount')
        .post(authController.restrictTo('admin'),accountController.upgradeAccount)
       
router.route('/getAccount')
        .get(authController.restrictTo('admin'),accountController.getAccount)

router.route('/suspendAccount')
        .patch(authController.restrictTo('admin'),accountController.suspendAccount)

router.route('/deleteAccount')
        .post(authController.restrictTo('admin'),accountController.deleteAccount)
router.route('/getProfile')
        .get(authController.restrictTo('classCustomer','broker','seller'),accountController.getProfile)
router.route('/getProfile')
        .patch(authController.restrictTo('classCustomer','broker','seller'),accountController.updateProfile)      
module.exports=router;