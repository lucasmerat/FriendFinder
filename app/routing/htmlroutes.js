const express = require('express')
const router = express.Router();
const path = require('path')

router.get('/', (req,res)=>{
    console.log('Home page!')
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

router.get('/survey', (req,res)=>{
    console.log('Survey page!')
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

module.exports = router;