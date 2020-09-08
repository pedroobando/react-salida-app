import { typeUI } from '../types/typeUI';

export const setError = (err) => ({
  type: typeUI.uiSetError,
  payload: err,
});

export const removeError = () => ({
  type: typeUI.uiRemoveError,
});

export const startLoading = () => ({
  type: typeUI.uiStartLoading,
});

export const finishLoading = () => ({
  type: typeUI.uiFinishLoading,
});
