/**** External libraries ****/
const express = require("express"); // The express.js library for implementing the API
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

/**** Configuration ****/
const appName = "Express API Template"; // Change the name of your server app!
const port = process.env.PORT || 8080; // Pick port 8080 if the PORT env variable is empty.
const app = express(); // Get the express app object.
//connect the Connection String 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

//check if the connection is successfully connected
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(bodyParser.json()); // Add middleware that parses JSON from the request body.
app.use(morgan("combined")); // Add middleware that logs all http requests to the console.
app.use(cors()); // Avoid CORS errors. https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

/**** Some test data ****/
const questions = [
  {
    id: 1,
    question: "How to add Bootstrap to React?",
    answers: ["I don't know??", "Run npm i bootstrap in your project"],
  },
  {
    id: 2,
    question: "Class vs Functions in React?",
    answers: ["You how state classes but not in Functions", "See answer 1"],
  },
];

/**** Routes ****/

// Return all questions in data
app.get("/api/questions", (req, res) => res.json(questions));

// PostAnswer
app.post("/api/questions/:id/answers", (req, res) => {
  const id = parseInt(req.params.id);
  const text = req.body.text;
  const question = questions.find((q) => q.id === id);
  question.answers.push(text);
  console.log(question);
  res.json({ msg: "Answer added", question: question });
});

/**** Start! ****/
app.listen(port, () => console.log(`${appName} API running on port ${port}!`));
