
const express=require('express')

const authRoute=require('./routes/auth-route');
const itemRoute=require('./routes/item-route');
const ratingRoute=require('./routes/rating-route');
const reportRoute=require('./routes/report-route');
const requestRoute=require('./routes/request-route');
const accountRoute=require('./routes/account-route');
const warningRoute=require('./routes/warning-route');
const bodyparser=require('body-parser');

const app =express();
app.use(express.json());
app.use(bodyparser.json());

app.use('api/user/',authRoute);
app.use('api/user/account',accountRoute);
app.use('api/item',itemRoute);
app.use('api/rate',ratingRoute);
app.use('api/report',reportRoute);
app.use('api/request',requestRoute);
app.use('api/warning',warningRoute);




module.exports=app;