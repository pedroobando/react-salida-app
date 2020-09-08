import { typeUI } from '../types/typeUI';

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeUI.uiSetError:
      break;

    default:
      break;
  }
};
