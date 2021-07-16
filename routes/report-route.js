const express=require('express')

const router=express.Router();

const reportController=require('../controllers/report-controller');


router.route('/sendReport')
        .post(reportController.sendReport)
        .patch(reportController.updateReport)
router.route('/getReport')
        .get(reportController.getReport)
router.route('/addReportType')
        .post(reportController.addReportType)


module.exports=router;