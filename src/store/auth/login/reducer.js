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
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  RESET_PASSWORD_CODE,
  RESET_PASSWORD_CODE_SUCCESS,
  RESET_PASSWORD_CODE_ERROR,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_IMAGE,
  UPDATE_PROFILE_IMAGE_SUCCESS,
  UPDATE_PROFILE_IMAGE_ERROR,
  UPDATE_LOGO,
  UPDATE_LOGO_SUCCESS,
  UPDATE_LOGO_ERROR,
  GET_ME,
  CHANGE_PASSWORD_FAIL,
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
  logoutLoading: false,
  logoutError: false,
  logoutData: null,
  token: null,
  tokenLoading: false,
  tokenError: false,
  tkMssg: null,
  changeLoading: false,
  changeError: false,
  changeMssg: null,
  updateProfileImageLoading: false,
  updateProfileImageError: false,
  updateProfileImageInfo: null,
  updateLogoLoading: false,
  updateLogoError: false,
  updateLogoInfo: null,
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
        inter: false,
      };
      break;
    case GET_ME:
      state = {
        ...state,
        loggedIn: false,
        loadingUserinfo: true,
        loading: true,
        error: false,
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

    case LOGOUT:
      state = {
        ...state,
        logoutError: false,
        logoutLoading: true,
      };
      break;
    case LOGOUT_SUCCESS:
      state = {
        ...state,
        logoutError: false,
        logoutLoading: false,
        logoutData: action.payload,
      };
      break;
    case LOGOUT_ERROR:
      state = {
        ...state,
        logoutError: false,
        logoutLoading: false,
        logoutData: action.payload,
      };
      break;

    case RESET_LOGIN_FLAG:
      state = {
        ...state,
        errorMsg: null,
        loading: false,
        error: false,
        inter: false,
      };
      break;

    case UPDATE_PROFILE:
      state = { ...state, loading: true, error: false };
      break;
    case UPDATE_PROFILE_ERROR:
      state = {
        ...state,
        loading: false,
        errorMsg: action.payload,
        error: false,
      };
      break;
    case UPDATE_PROFILE_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case CHANGE_PASSWORD:
      state = { ...state, passwordLoading: true, passwordError: false };
      break;
    case CHANGE_PASSWORD_FAIL:
      state = {
        ...state,
        passwordLoading: false,
        errorMsg: action.payload,
        passwordError: false,
      };
      break;
    case CHANGE_PASSWORD_SUCCESS:
      state = {
        ...state,
        passwordLoading: false,
        passwordError: false,
      };
      break;
    case UPDATE_PROFILE_IMAGE:
      state = {
        ...state,
        updateProfileImageError: false,
        updateProfileImageLoading: true,
      };
      break;
    case UPDATE_PROFILE_IMAGE_SUCCESS:
      state = {
        ...state,
        updateProfileImageError: false,
        updateProfileImageLoading: false,
        updateProfileImageInfo: action.payload,
      };
      break;
    case UPDATE_PROFILE_IMAGE_ERROR:
      state = {
        ...state,
        updateProfileImageError: false,
        updateProfileImageLoading: false,
        updateProfileImageInfo: action.payload,
      };
      break;
    case UPDATE_LOGO:
      state = {
        ...state,
        updateLogoError: false,
        updateLogoLoading: true,
      };
      break;
    case UPDATE_LOGO_SUCCESS:
      state = {
        ...state,
        updateLogoError: false,
        updateLogoLoading: false,
        updateLogoInfo: action.payload,
      };
      break;
    case UPDATE_LOGO_ERROR:
      state = {
        ...state,
        updateLogoError: false,
        updateLogoLoading: false,
        updateLogoInfo: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default login;
