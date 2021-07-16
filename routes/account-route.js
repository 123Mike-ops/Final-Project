const express=require('express')

const router=express.Router();


router.route('/upgradeAccount')
        .post()
        .patch()
router.route('/getAccount')
router.route('/suspendAccount')
router.route('/deleteAccount')


        
module.exports=router;