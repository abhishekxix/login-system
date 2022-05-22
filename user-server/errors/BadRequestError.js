const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./CustomAPIError');

const BadRequestError = (message) => {
  return {
    code: StatusCodes.BAD_REQUEST,
    ...CustomAPIError(message),
  };
};

module.exports = BadRequestError;
