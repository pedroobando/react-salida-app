import { typeUI } from '../types/typeUI';

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeUI.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };

    case typeUI.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };

    default:
      return state;
  }
};
