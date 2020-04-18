const router = require('express').Router();
let Question = require('../models/question.model');

//get request
router.route('/').get((req, res) => {
  Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
});

//post request
router.route('/add').post((req, res) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const date = Date.parse(req.body.date);
  //create new Question
  const newQuestion = new Question({
    question,
    answer,
    date,
  });
  //new Question will be saved
  newQuestion.save()
    .then(() => res.json('Question added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//create endpoint
//object id created by mongoDB
//get the Question by id
router.route('/:id').get((req, res) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json('Error: ' + err));
});
//find by id and delete it
router.route('/:id').delete((req, res) => {
  Question.findByIdAndDelete(req.params.id)
    .then(() => res.json('Question deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//find by id and update it 
router.route('/update/:id').post((req, res) => {
  Question.findById(req.params.id)
    .then(question => {
      question.question = req.body.question;
      question.answer = req.body.answer;
      question.date = Date.parse(req.body.date);

      question.save()
        .then(() => res.json('Question updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;