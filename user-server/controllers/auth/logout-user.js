const {StatusCodes} = require('http-status-codes');

const logOutUser = async (req, res) => {
  res.clearCookie('token');
  res.status(StatusCodes.OK).json({msg: 'logged out'});
};

module.exports = logOutUser;
