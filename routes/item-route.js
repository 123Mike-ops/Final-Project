const express=require('express')

const router=express.Router();
const itemController=require('../controllers/item-controller');




router.route('/')
        .post(itemController.addItem)
        .get(itemController.getItem)
        .delete(itemController.deleteItem)
        .patch(itemController.updateItem)
router.route('/findItemById')
        .get(itemController.findItem)
        
router.route('/findItemByOwner')
        .get(itemController.findItemByOwner)



module.exports=router;