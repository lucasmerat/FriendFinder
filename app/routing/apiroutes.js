const express = require('express')
const router = express.Router();
const path = require('path');
const friends = require('../data/friends')

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/api/friends', (req,res)=>{
    console.log('Get some json!');
    res.json(friends);
});

router.post('/api/friends', (req,res)=>{
    console.log('Send some json!');
    res.end();
});

module.exports = router;