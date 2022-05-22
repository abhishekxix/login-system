const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./CustomAPIError');

const NotFoundError = (message) => {
  return {
    code: StatusCodes.NOT_FOUND,
    ...CustomAPIError(message),
  };
};

module.exports = NotFoundError;
