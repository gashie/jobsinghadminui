import { RESET_PASSWORD_SUCCESS } from "../forgetpwd/actionTypes";
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  REGISTER_USER_FAILED,
  RESET_REGISTER_FLAG,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  ACTIVATE_USER,
  ACTIVATE_USER_ERROR,
  ACTIVATE_USER_SUCCESS,
  REDIRECT_TO_ROUTE,
  RESEND_ACTIVATION_CODE,
  RESEND_ACTIVATION_CODE_ERROR,
  RESEND_ACTIVATION_CODE_SUCCESS
} from "./actionTypes";

const initialState = {
  registrationError: null,
  message: null,
  loading: false,
  user: null,
  success: false,
  error: false, 
  activateInfo: null, 
  activateError: false, 
  activateLoading: false,
  resendInfo: null
};

const Account = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      state = {
        ...state,
        loading: true,
        registrationError: null,
      };
      break;
    case REGISTER_USER_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        user: action.payload,
        success: true,
        registrationError: null,

      };
      break;
    case REGISTER_USER_FAILED:
      state = {
        ...state,
        user: null,
        loading: false,
        registrationError: action.payload,
        error: true
      };
      break;
    case RESET_REGISTER_FLAG:
      state = {
        ...state,
        success: false,
        error: false
      };
      break;
    case SIGN_UP:
      state = {
        ...state,
        loading: true,
        error: false
      };
      break;
    case SIGN_UP_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false, 
        message: action.payload
      };
      break;
    case SIGN_UP_ERROR:
      state = {
        ...state,
        loading: false,
        error: false, 
        message: action.payload
      };
      break;


    case ACTIVATE_USER:
      state = {
        ...state,
        activateLoading: true,
        activateError: false
      };
      break;
    case ACTIVATE_USER_ERROR:
      state = {
        ...state,
        activateLoading: false,
        activateError: false, 
        activateInfo: action.payload
      };
      break;
    case ACTIVATE_USER_SUCCESS:
      state = {
        ...state,
        activateLoading: false,
        activateError: false, 
        activateInfo: action.payload
      };
      break;
    case RESEND_ACTIVATION_CODE:
      state = {
        ...state,
        loading: true,
        error: false
      };
      break;
    case RESEND_ACTIVATION_CODE_ERROR:
      state = {
        ...state,
        loading: false,
        error: false, 
        resendInfo: action.payload
      };
      break;
    case RESEND_ACTIVATION_CODE_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false, 
        resendInfo: action.payload
      };
      break;


      case REDIRECT_TO_ROUTE:
        return {
          ...state,
          navigateAction: action.payload,
        };
      
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Account;
