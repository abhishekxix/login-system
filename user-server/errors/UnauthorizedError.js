const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./CustomAPIError');

const UnauthorizedError = (message) => {
  return {
    code: StatusCodes.UNAUTHORIZED,
    ...CustomAPIError(message),
  };
};

module.exports = UnauthorizedError;
