const express=require('express')

const router=express.Router();

const requestController=require('../controllers/request-controller');


router.route('/')
        .post(requestController.sendRequest)
        .delete(requestController.deleteRequest)
        .patch(requestController.updateRequest)
router.route('/replyrequest')
        .post(requestController.replyRequest)
router.route('/getRequest')
        .get(requestController.getRequest)

module.exports=router;