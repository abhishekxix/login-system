const sendVerificationMail = require('./send-verification-mail');
const createTokenUser = require('./create-token-user');
const createJWT = require('./create-jwt');
const attachTokenCookie = require('./attach-token-cookie');
const sendPasswordResetMail = require('./send-reset-password-mail');
const verifyToken = require('./verify-token');

module.exports = {
  sendVerificationMail,
  createTokenUser,
  createJWT,
  attachTokenCookie,
  sendPasswordResetMail,
  verifyToken,
};
