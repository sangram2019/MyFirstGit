const express = require('express');
const router = express.Router();


router.get('/product',(request,response)=>{
        response.send('Get operation');
    });
module.exports=router;
