const router = require('express').Router();
let Answer = require('../models/answer.model');

//get request
router.route('/').get((req, res) => {
  Answer.find()
    .then(answers => res.json(answers))
    .catch(err => res.status(400).json('Error: ' + err));
});

//post request
router.route('/add').post((req, res) => {
  const answertext = req.body.answertext;

  //create new exercise
  const newAnswer = new Answer({ answertext });
  //new exercise will be saved
  newAnswer.save()
    .then(() => res.json('Answer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//export the router
module.exports = router;