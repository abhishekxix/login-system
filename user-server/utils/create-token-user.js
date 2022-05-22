const createTokenUser = ({ name, email, role, _id: userId }) => {
  return {
    name,
    email,
    role,
    userId,
  };
};

module.exports = createTokenUser;
