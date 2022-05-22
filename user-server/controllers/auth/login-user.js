const { StatusCodes } = require('http-status-codes');
const {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} = require('../../errors');
const User = require('../../models/User');
const {
  attachTokenCookie,
  createTokenUser,
  sendVerificationMail,
} = require('../../utils');

const logInUser = async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    throw BadRequestError('Provide both email and password');
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw NotFoundError(`No user found with email: ${email}`);
  }

  if (!user.isVerified) {
    sendVerificationMail(user.email, user);
    throw UnauthorizedError('Please verify your email id before you log in.');
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw UnauthorizedError('Wrong password.');
  }

  const tokenUser = createTokenUser(user);

  attachTokenCookie(res, tokenUser);
  res.status(StatusCodes.OK).json({ user: tokenUser });
};

module.exports = logInUser;
