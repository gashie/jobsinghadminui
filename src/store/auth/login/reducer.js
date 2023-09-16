import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_RESET,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  RESET_LOGIN_FLAG,
  TEST_VERIFY,
  TEST_VERIFY_SUCCESS,
  TEST_VERIFY_FAIL,
  GET_ME_SUCCESS,
  GET_ME_FAIL,
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
} from "./actionTypes";

const initialState = {
  errorMsg: "",
  loading: false,
  error: false,
  userInfo: null,
  isloggedIn: false,
  loggedIn: false,
  errorUserinfo: null,
  loadingUserinfo: null,
  verifyInfo: false,
  verifyLoading: false,
  verifyError: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
        logeedIn: true,
        userInfo: action.payload,
      };
      break;
    case LOGIN_RESET:
      state = {
        ...state,
        loading: false,
        loggedIn: true,
        error: false,
      };
      break;
    case GET_ME_SUCCESS:
      state = {
        ...state,
        loadingUserinfo: false,
        userInfo: action.payload,
        isloggedIn: true,
        errorUserinfo: null,
      };
      break;

    case GET_ME_FAIL:
      state = {
        ...state,
        loadingUserinfo: false,
        errorUserinfo: action.payload,
      };
      break;

    case TEST_VERIFY:
      state = {
        ...state,
        verifyLoading: true,
        verifyError: null,
      };
      break;

    case TEST_VERIFY_FAIL:
      state = {
        ...state,
        verifyLoading: false,
        verifyError: action.payload,
      };
      break;

    case TEST_VERIFY_SUCCESS:
      state = {
        ...state,
        verifyLoading: false,
        verifyInfo: action.payload,
        verifyError: null,
      };
      break;

    case LOGOUT_USER:
      state = { ...state, isUserLogout: false };
      break;
    case LOGOUT_USER_SUCCESS:
      state = { ...state, isUserLogout: true };
      break;
    case API_ERROR:
      state = {
        ...state,
        errorMsg: action.payload.data,
        loading: true,
        error: true,
        isUserLogout: false,
      };
      break;
    case RESET_LOGIN_FLAG:
      state = {
        ...state,
        errorMsg: null,
        loading: false,
        error: false,
      };
      break;

    case UPDATE_PROFILE:
      state = {...state, 
        loading: true,
        error: false,
      };
      break;
    case UPDATE_PROFILE_ERROR:
      state = {...state, 
        loading: false,
        errorMsg: action.payload,
        error: false,
      };
      break;
      case UPDATE_PROFILE_SUCCESS: 
      state={
        ...state, 
        loading: false, 
        error: false
      }
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default login;
