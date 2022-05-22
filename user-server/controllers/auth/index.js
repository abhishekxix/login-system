const logInUser = require('./login-user');
const registerUser = require('./register-user');
const logOutUser = require('./logout-user');
const verifyAccountEmail = require('./verify-account');
const resetPassword = require('./reset-password');
const verifyAndResetPassword = require('./verify-and-reset-password');

module.exports = {
  logInUser,
  registerUser,
  logOutUser,
  verifyAccountEmail,
  resetPassword,
  verifyAndResetPassword,
};
