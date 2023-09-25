import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
} from "./actionTypes";

const initialState = {
  resetLoading: false,
  resetError: false,
  resetInfo: null,
  loading: false,
  error: false,
  errMssg: null
};

const forgetPassword = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      state = {
        ...state,
        resetLoading: false,
        resetError: false,
      };
      break;
    case RESET_PASSWORD_ERROR:
      state = {
        ...state,
        resetLoading: false,
        resetError: false, 
        errMssg: action.payload
      };
      break;
    case RESET_PASSWORD_SUCCESS:
      state = {
         ...state,
         resetLoading: false,
         resetError: false, 
         resetInfo: action.payload
         };
      break;
    case CHANGE_PASSWORD:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case CHANGE_PASSWORD_ERROR:
      state = {
        ...state,
        loading: false,
        error: false, 
        errMssg: action.payload
      };
      break;
    case CHANGE_PASSWORD_SUCCESS:
      state = {
         ...state,
         loading: false,
         error: false, 
         resetInfo: action.payload
         };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default forgetPassword;
