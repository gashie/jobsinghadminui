import {
  CREATE_JOB_STATUS,
  CREATE_JOB_STATUS_SUCCESS,
  CREATE_JOB_STATUS_ERROR,
  JOB_STATUS,
  JOB_STATUS_SUCCESS,
  JOB_STATUS_ERROR,
  UPDATE_JOB_STATUS,
  UPDATE_JOB_STATUS_SUCCESS,
  UPDATE_JOB_STATUS_ERROR,
  CREATE_JOB,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  UPDATE_JOB,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_ERROR,
  JOBS,
  JOBS_SUCCESS,
  JOBS_ERROR,
  APPROVE_JOBS,
  APPROVE_JOBS_SUCCESS,
  APPROVE_JOBS_ERROR,
} from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  infoLoading: false,
  infoError: false,
  errMssg: null,
  jobStatusInfo: null,
  jobsInfo: null,
};

const Jobs = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_JOB:
    case UPDATE_JOB:
    case JOBS:
    case APPROVE_JOBS:
      return {
        ...state,
        infoLoading: true,
        infoError: false,
      };

    case CREATE_JOB_STATUS:
    case JOB_STATUS:
    case UPDATE_JOB_STATUS:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case CREATE_JOB_ERROR:
    case UPDATE_JOB_ERROR:
    case JOBS_ERROR:
    case APPROVE_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errMssg: action.payload,
      };

    case CREATE_JOB_STATUS_ERROR:
    case JOB_STATUS_ERROR:
    case UPDATE_JOB_STATUS_ERROR:
      return {
        ...state,
        infoLoading: false,
        infoError: true,
        errMssg: action.payload,
      };

    case CREATE_JOB_SUCCESS:
    case UPDATE_JOB_SUCCESS:
    case JOBS_SUCCESS:
    case APPROVE_JOBS_SUCCESS:
      return {
        ...state,
        infoLoading: false,
        infoError: false,
        jobsInfo: action.payload,
      };
    case CREATE_JOB_STATUS_SUCCESS:
    case JOB_STATUS_SUCCESS:
    case UPDATE_JOB_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        jobStatusInfo: action.payload,
      };

    default:
      return state;
  }
};

export default Jobs;
