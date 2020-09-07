import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

const { typeAuth } = require('../types/typeAuth');

// export const startLoginEmailPassword = (email, password) => {
//   return (dispatch) => {
//     setInterval(() => {
//       dispatch(login('122', 'email'));
//     }, 3500);
//   };
// };

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: typeAuth.login,
  payload: {
    uid,
    displayName,
  },
});
