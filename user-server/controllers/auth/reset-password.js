const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../../errors');
const User = require('../../models/User');
const { sendPasswordResetMail } = require('../../utils');

const resetPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw BadRequestError('Please provide email address.');
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw NotFoundError(`No user found with email: ${email}`);
  }
  sendPasswordResetMail(email, user);

  res
    .status(StatusCodes.ACCEPTED)
    .json({ msg: 'password reset mail sent with token' });
};

module.exports = resetPassword;
