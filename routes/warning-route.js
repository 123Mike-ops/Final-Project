const express=require('express')

const router=express.Router()
const warningController=require('../controllers/warning-controller');


router.route('/sendWarning')
        .post(warningController.sendWarning)
router.route('/getWarning')
        .get(warningController.getWarning)
router.route('/addWarningType')
        .post(warningController.addWarningType)



module.exports=router;