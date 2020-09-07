import { typeAuth } from '../types/typeAuth';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case typeAuth.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case typeAuth.logout:
      return {};

    default:
      return state;
  }
};
