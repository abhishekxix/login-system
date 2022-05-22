const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { UnauthorizedError, BadRequestError } = require('../../errors');
const User = require('../../models/User');
const {
  createTokenUser,
  attachTokenCookie,
  sendVerificationMail,
} = require('../../utils');

const verifyAndResetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  let payload = undefined;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw UnauthorizedError('Invalid verification token');
  }

  const user = await User.findOne({ email: payload.email });

  if (!user.isVerified) {
    sendVerificationMail(payload.email, user);
    throw BadRequestError('User is not verified.');
  }

  if (newPassword.length < 6) {
    throw BadRequestError('Password length should be atleast 6 characters.');
  }

  user.password = newPassword;
  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Password changed successfully.' });
};

module.exports = verifyAndResetPassword;
