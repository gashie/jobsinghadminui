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
  SAVE_JOBS,
  SAVE_JOBS_SUCCESS,
  SAVE_JOBS_ERROR,
  UPDATE_SAVED_JOBS,
  UPDATE_SAVED_JOBS_SUCCESS,
  UPDATE_SAVED_JOBS_ERROR,
  APPLY_FOR_JOBS, 
  APPLY_FOR_JOBS_ERROR, 
  APPLY_FOR_JOBS_SUCCESS, 
  FULL_JOB_DETAILS, FULL_JOB_DETAILS_ERROR, FULL_JOB_DETAILS_SUCCESS
} from "./actionTypes";

const initalState = {
  errorMsg: "",
  loading: false,
  error: false,
  jobAlerts: null,
  jobAlertsError: false,
  jobAlertsLoading: false,
  savedJobs: null,
  savedJobsLoading: false, 
  savedJobsError: false, 
  fullJobDetails: null,
  fullJobDetailsLoading: false,
  fullJobDetailsError: false,
  applyForJobsLoading: false,
  applyForJobsError: false,
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
        savedJobsLoading: true,
        savedJobsError: false,
      };
      break;
    case VIEW_SAVED_JOBS_ERROR:
      state = {
        ...state,

        savedJobsLoading: false,
        errorMsg: action.payload,
        savedJobsError: true,
      };
      break;
    case VIEW_SAVED_JOBS_SUCCESS:
      state = {
        ...state,

        savedJobsLoading: false,
        savedJobsError: false,
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
      case SAVE_JOBS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SAVE_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    case SAVE_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case UPDATE_SAVED_JOBS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case UPDATE_SAVED_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case UPDATE_SAVED_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
      case FULL_JOB_DETAILS:
        return {
          ...state,
          fullJobDetailsLoading: true,
          fullJobDetailsError: false,
        };
      case FULL_JOB_DETAILS_SUCCESS:
        return {
          ...state,
          fullJobDetailsLoading: false,
          fullJobDetailsError: false,
          fullJobDetails: action.payload,
        };
      case FULL_JOB_DETAILS_ERROR:
        return {
          ...state,
          fullJobDetailsLoading: false,
          fullJobDetailsError: true,
          errorMsg: action.payload,
        };
      case APPLY_FOR_JOBS:
        return {
          ...state,
          applyForJobsLoading: true,
          applyForJobsError: false,
        };
      case APPLY_FOR_JOBS_SUCCESS:
        return {
          ...state,
          applyForJobsLoading: false,
          applyForJobsError: false,
        };
      case APPLY_FOR_JOBS_ERROR:
        return {
          ...state,
          applyForJobsLoading: false,
          applyForJobsError: true,
          errorMsg: action.payload,
        };
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default JobAlerts;
