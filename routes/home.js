const express = require('express');
const router = express.Router();


router.route('/')
    .get((req,res)=>{
        res.render('home');
    }).post((req,re)=>{

    });


module.exports = router;