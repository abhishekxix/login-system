const errorHandlerMiddleware = require('./errorHandler');
const { authenticateUser, authorizePermissions } = require('./authentication');

module.exports = {
  errorHandlerMiddleware,
  authenticateUser,
  authorizePermissions,
};
