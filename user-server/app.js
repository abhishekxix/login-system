// import packages
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create app express instance
const app = express();

// import db connection function
const connectDB = require('./db/connect');

// import middleware
const {errorHandlerMiddleware} = require('./middleware');

// use middleware
app.use(
  cors({
    origin: 'http://localhost:5000',
    credentials: true,
  }),
);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());

// import routes
const authRouter = require('./routes/auth-routes');
const userRouter = require('./routes/user-routes');

// set up routes
const apiRoot = '/api/v1/';

app.get('/', (req, res) => {
  res.send('lmao');
});

app.use(apiRoot + 'auth', authRouter);
app.use(apiRoot + 'users', userRouter);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
  });
};

start();
