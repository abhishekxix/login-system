const createJWT = require('./create-jwt');

const attachTokenCookie = (res, tokenUser) => {
  const token = createJWT(tokenUser, process.env.JWT_LIFETIME);
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
};

module.exports = attachTokenCookie;
