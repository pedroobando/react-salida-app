const { typeAuth } = require('../types/typeAuth');

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setInterval(() => {
      dispatch(login('122', 'email'));
    }, 3500);
  };
};

export const login = (uid, displayName) => ({
  type: typeAuth.login,
  payload: {
    uid,
    displayName,
  },
});
