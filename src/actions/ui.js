import { typeUI } from '../types/typeUI';

export const setError = (err) => ({
  type: typeUI.uiSetError,
  payload: err,
});

export const removeError = () => ({
  type: typeUI.uiRemoveError,
});
