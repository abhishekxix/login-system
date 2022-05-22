const {showCurrentUser} = require('../controllers/user');

const {authenticateUser} = require('../middleware');

const userRouter = require('express').Router();

userRouter.use(authenticateUser);
userRouter.route('/show-current-user').get(showCurrentUser);

module.exports = userRouter;
