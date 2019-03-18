const express = require('express')
const router = express.Router();
const friends = require('../data/friends')
const bodyParser = require('body-parser')

const urlEncodedParser = bodyParser.urlencoded({ extended: true })


router.get('/api/cast', (req,res)=>{
    console.log('Get some json!');
    res.json(friends);
});

router.post('/survey', urlEncodedParser, (req,res)=>{
    let request = req.body;
    //Populating filled out user scores from request to iterable array
    let userScores = request.scores; 
    let userScoreArr = [];
    for(let score in userScores){
        userScoreArr.push(Number(userScores[score]))
    }

    //Initializing arr of differences between each friend and variable to hold the index of that friend, lastly, a variable to store the lowest difference or selected friend
    let friendDiffs = [];
    let friendIndex = 0;
    let lowestDiffIndex = 0;

    //Loops through all 4 friends to find a closest match, comparing all scores to an aggregate and pushing the lowest to the winning index
    while(friendIndex < 5){
        let totalDiff = 0;
        for(let i=0;i<userScoreArr.length;i++){
            let diff = Math.abs(friends[friendIndex].scores[i] - userScoreArr[i])
            totalDiff+=diff
        }
        friendDiffs.push(totalDiff);
        console.log(friendDiffs[friendIndex])
        console.log(friendDiffs[friendIndex-1])
        if(friendDiffs[friendIndex] <= friendDiffs[lowestDiffIndex]){
            console.log(lowestDiffIndex)
            lowestDiffIndex = friendIndex;
            console.log("Newest low diff index is " + lowestDiffIndex)
        }
        friendIndex++;
    }
    console.log(friendDiffs)

    console.log(`The selected friend is: ${friends[lowestDiffIndex].name}`)

    //Sending best matched friend to front end
    res.json(friends[lowestDiffIndex]);
});

module.exports = router;