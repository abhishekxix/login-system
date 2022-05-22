const nodemailer = require('nodemailer');
const createJWT = require('./create-jwt');
const createTokenUser = require('./create-token-user');

const sendPasswordResetMail = async (target, user) => {
  const tokenUser = createTokenUser(user);
  const verificationToken = createJWT(
    tokenUser,
    process.env.JWT_VERIFICATION_LIFETIME
  );

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'p2g23fc6y72qbt2z@ethereal.email',
      pass: 'c4pTKBWgfVRJn74ue4',
    },
  });

  let info = await transporter.sendMail({
    from: `"No reply" <verification@ecommercestore.com>`,
    to: target,
    subject: 'Reset password',
    html: `Enter the following code to reset password: <br/>
    <code>${verificationToken}</code>`,
  });
};
module.exports = sendPasswordResetMail;
