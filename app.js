require('dotenv').config()

const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');


// middleware
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks);

const port = 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.error(error)
  }
}

start();
