const express=require('express')

const router=express.Router();
const itemController=require('../controllers/item-controller');
const authController=require('../controllers/auth-controller');



router.route('/')
        .post(authController.restrictTo('seller','broker'),itemController.addItem)
        .get(itemController.getItem)
        .delete(authController.restrictTo('seller','broker'),itemController.deleteItem)
        .patch(itemController.updateItem)
router.route('/findItemById')
        .get(itemController.findItem)
        
router.route('/findItemByOwner')
        .get(itemController.findItemByOwner)



module.exports=router;