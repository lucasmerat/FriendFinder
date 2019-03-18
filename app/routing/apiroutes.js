const express = require('express')
const router = express.Router();
const path = require('path');
const friends = require('../data/friends')
const bodyParser = require('body-parser')

const urlEncodedParser = bodyParser.urlencoded({ extended: true })


router.get('/api/friends', (req,res)=>{
    console.log('Get some json!');
    res.json(friends);
});

router.post('/survey', urlEncodedParser, (req,res)=>{
    let request = req.body;
    console.log(request);
    res.json(request);
});

module.exports = router;