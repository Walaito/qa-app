/**** External libraries ****/
const express = require("express"); // The express.js library for implementing the API
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

/**** Configuration ****/
const appName = "You Ask"; // Change the name of your server app!
const port = process.env.PORT || 8080; // Pick port 8080 if the PORT env variable is empty.
const app = express(); // Get the express app object.

//check if the connection is successfully connected
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(express.json()); // Add middleware that parses JSON from the request body.
app.use(morgan("combined")); // Add middleware that logs all http requests to the console.
app.use(cors()); // Avoid CORS errors. https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

/**** Database ****/
const questionDB = require("./question_db")(mongoose);

/**** Routes ****/

// Return all questions in data
app.get("/api/questions", async (req, res) => {
  const questions = await questionDB.getQuestions();
  res.json(questions);
});

app.get("/api/questions/:id", async (req, res) => {
  let id = req.params.id;
  const question = await questionDB.getQuestion(id);
  res.json(question);
});

//Post Question
app.post("/api/questions", async (req, res) => {
  let question = {
    question: req.body.question,
    answers: [] // Empty answers array
  };
  const newQuestion = await questionDB.createQuestion(question);
  res.json(newQuestion);
});

// PostAnswer
app.post("/api/questions/:id/answers", (req, res) => {
  const id = parseInt(req.params.id);
  const answertext = req.body.answertext;
  //const question = questions.find((q) => q.id === id);
  //question.answers.push(answertext);
  //console.log(question);

  res.json({ msg: "Answer added", question: question });
});

/**** Start! ****/
const url = process.env.ATLAS_URI || "mongodb://localhost/question_db";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    // await questionDB.bootstrap(); // Fill in test data if needed.
    await app.listen(port); // Start the API
    console.log(`QA API running on port ${port}!`);
  })
  .catch(error => console.error(error));
