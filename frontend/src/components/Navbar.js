import axios from 'axios';

const Navbar = ({
  greetingName,
  formType,
  setFormType,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <div className="navbar">
      <div className="title">
        <span className="navbar-title">
          {isLoggedIn ? `hello ${greetingName}` : formType}
        </span>
        <div className="title-underline"></div>
      </div>
      <div className="btn-container">
        <button
          className={`btn ${formType !== 'login' && 'btn-hipster'}`}
          onClick={() => setFormType('login')}
        >
          login
        </button>
        <button
          className={`btn ${formType !== 'signup' && 'btn-hipster'}`}
          onClick={() => setFormType('signup')}
        >
          sign up
        </button>
        <button
          className={`btn ${formType !== 'verification' && 'btn-hipster'}`}
          onClick={() => setFormType('verification')}
        >
          Verify Account
        </button>

        <button
          className={`btn ${isLoggedIn || 'btn-hipster'}`}
          onClick={async () => {
            if (!isLoggedIn) return alert('already logged out');
            try {
              const res = await axios.get(
                'http://localhost:3000/api/v1/auth/logout',
                {
                  withCredentials: true,
                },
              );
              console.log(res);
              setIsLoggedIn(false);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
