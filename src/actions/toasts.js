import { ADD_TOASTS, REMOVE_TOASTS } from './constants';

export const addToast = toast => ({
  type: ADD_TOASTS,
  payload: toast
});

export const removeToast = toast => ({
  type: REMOVE_TOASTS,
  payload: toast
});