import { ADD_TOASTS, REMOVE_TOASTS } from 'actions/constants';

export const toastReducer = (toasts = [], action) => {
  switch (action.type) {
    case ADD_TOASTS:
      return [...toasts, action.payload];
    case REMOVE_TOASTS:
      return toasts.filter(t => t !== action.payload);
    default:
      return toasts
  }
}