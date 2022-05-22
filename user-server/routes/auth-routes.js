const {
  registerUser,
  logInUser,
  logOutUser,
  verifyAccountEmail,
  resetPassword,
  verifyAndResetPassword,
} = require('../controllers/auth');

const authRouter = require('express').Router();

authRouter.route('/register').post(registerUser);
authRouter.route('/login').post(logInUser);
authRouter.route('/logout').get(logOutUser);
authRouter.route('/verify-email/:token').get(verifyAccountEmail);
authRouter
  .route('/reset-password')
  .get(resetPassword)
  .patch(verifyAndResetPassword);

module.exports = authRouter;
