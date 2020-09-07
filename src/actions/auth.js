const { typeAuth } = require('../types/typeAuth');

export const login = (uid, displayName) => ({
  type: typeAuth.login,
  payload: {
    uid,
    displayName,
  },
});
