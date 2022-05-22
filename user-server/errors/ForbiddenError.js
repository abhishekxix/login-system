const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./CustomAPIError');

const ForbiddenError = (message) => {
  return {
    code: StatusCodes.FORBIDDEN,
    ...CustomAPIError(message),
  };
};

module.exports = ForbiddenError;
