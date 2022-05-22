const { StatusCodes } = require('http-status-codes');
const User = require('../../models/User');

const showCurrentUser = async (req, res) => {
  const user = await User.findOne(
    { _id: req.user.userId },
    { password: 0, isVerified: 0 }
  );
  res.status(StatusCodes.OK).json({ user });
};

module.exports = showCurrentUser;
