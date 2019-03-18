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

    let userScores = request.scores;

    
    let userScoreArr = [];
    for(let score in userScores){
        userScoreArr.push(Number(userScores[score]))
    }

    console.log(userScoreArr)
    let friendDiffs = [];

    let friendIndex = 0;
    lowestDiffIndex = 0;
    while(friendIndex < 4){
        let totalDiff = 0;
        console.log(friends[friendIndex].scores)
        for(let i=0;i<userScoreArr.length;i++){
            let diff = Math.abs(friends[friendIndex].scores[i] - userScoreArr[i])
            totalDiff+=diff
        }
        friendDiffs.push(totalDiff);
        if(friendDiffs[friendIndex] < friendDiffs[friendIndex-1]){
            lowestDiffIndex = friendIndex;
        }
        friendIndex++;
    }
    console.log(friendDiffs)
    console.log(lowestDiffIndex)

    //Here I will send back the object of the friend that is the closest match
    res.json(friends[lowestDiffIndex]);
});

module.exports = router;