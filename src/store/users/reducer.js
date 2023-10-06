import {
  EMPLOYERS,
  EMPLOYERS_ERROR,
  EMPLOYERS_SUCCESS,
  UPDATE_PROILE,
  UPDATE_PROILE_ERROR,
  UPDATE_PROILE_SUCCESS,
  JOBSEEKER,
  JOBSEEKER_ERROR,
  JOBSEEKER_SUCCESS,
  SEND_SERVICE,
  SEND_SERVICE_ERROR,
  SEND_SERVICE_SUCCESS,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: "",
  employersInfo: null,
  jobseekerInfo: null,
  errMssg: "",
  serviceLoading: false,
  serviceError: false,
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYERS:
      state = {
        ...state,
        error: false,
        loading: true,
      };
      break;
    case EMPLOYERS_SUCCESS:
      state = {
        ...state,
        error: false,
        loading: false,
        employersInfo: action.payload,
      };
      break;
    case EMPLOYERS_ERROR:
      state = {
        ...state,
        errMssg: action.payload,
        loading: false,
        error: false,
      };
      break;

    case JOBSEEKER:
      state = {
        ...state,
        error: false,
        loading: true,
      };
      break;
    case JOBSEEKER_SUCCESS:
      state = {
        ...state,
        error: false,
        loading: false,
        jobseekerInfo: action.payload,
      };
      break;
    case JOBSEEKER_ERROR:
      state = {
        ...state,
        errMssg: action.payload,
        loading: false,
        error: false,
      };
      break;

    case UPDATE_PROILE:
      state = {
        ...state,
        error: false,
        loading: true,
      };
      break;
    case UPDATE_PROILE_SUCCESS:
      state = {
        ...state,
        error: false,
        loading: false,
      };
      break;
    case UPDATE_PROILE_ERROR:
      state = {
        ...state,
        errMssg: action.payload,
        loading: false,
        error: false,
      };
      break;
    case SEND_SERVICE:
      state = {
        ...state,
        serviceError: false,
        serviceLoading: true,
      };
      break;
    case SEND_SERVICE_ERROR:
      state = {
        ...state,
        serviceError: true,
        serviceLoading: false,
        errMssg: action.payload,
      };
      break;
    case SEND_SERVICE_SUCCESS:
      state = {
        ...state,
        serviceError: false,
        serviceLoading: false,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Users;
