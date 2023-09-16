import {
  VIEW_JOB_ALERTS,
  VIEW_JOB_ALERTS_SUCCESS,
  VIEW_JOB_ALERTS_ERROR,
  CREATE_JOB_ALERT,
  CREATE_JOB_ALERT_ERROR,
  CREATE_JOB_ALERT_SUCCESS,
  UPDATE_JOB_ALERT,
  UPDATE_JOB_ALERT_ERROR,
  UPDATE_JOB_ALERT_SUCCESS,
  VIEW_SAVED_JOBS_ERROR,
  VIEW_SAVED_JOBS_SUCCESS,
  VIEW_SAVED_JOBS,
} from "./actionTypes";

const initalState = {
  errorMsg: "",
  loading: false,
  error: false,
  jobAlerts: null,
  jobAlertsError: false,
  jobAlertsLoading: false,
  savedJobs: null,
};

const JobAlerts = (state = initalState, action) => {
  switch (action.type) {
    case VIEW_JOB_ALERTS:
      state = {
        ...state,
        jobAlertsLoading: true,
        jobAlertsError: false,
        loading: true,
      };
      break;
    case VIEW_JOB_ALERTS_ERROR:
      state = {
        ...state,
        jobAlertsError: true,
        jobAlertsLoading: false,
        loading: false,
        errorMsg: action.payload,
        error: true,
      };
      break;
    case VIEW_JOB_ALERTS_SUCCESS:
      state = {
        ...state,
        jobAlertsError: false,
        loading: false,
        jobAlertsLoading: false,
        jobAlerts: action.payload,
      };
      break;
    case VIEW_SAVED_JOBS:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case VIEW_SAVED_JOBS_ERROR:
      state = {
        ...state,

        loading: false,
        errorMsg: action.payload,
        error: true,
      };
      break;
    case VIEW_SAVED_JOBS_SUCCESS:
      state = {
        ...state,

        loading: false,
        error: false,
        savedJobs: action.payload,
      };
      break;
    case CREATE_JOB_ALERT:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case CREATE_JOB_ALERT_ERROR:
      state = {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
      break;
    case CREATE_JOB_ALERT_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case UPDATE_JOB_ALERT:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case UPDATE_JOB_ALERT_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case UPDATE_JOB_ALERT_ERROR:
      state = {
        ...state,
        loading: false,
        error: false,
        errorMsg: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default JobAlerts;
