const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
//create express server
const app = express();
const port = process.env.PORT || 5000;
//middleware
app.use(cors());
app.use(express.json());

//connect the Connection String 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

//check if the connection is successfully connected
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const questionsRouter = require('./routes/questions');
const answersRouter = require('./routes/answers');
//tell the server to use these files
app.use('/questions', questionsRouter);
app.use('/answers', answersRouter);

//start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});