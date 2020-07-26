const express=require('express');
const router=express.Router();

console.log('In the second router!');

router.use('/',require('../components/password/routes'));

module.exports=router;