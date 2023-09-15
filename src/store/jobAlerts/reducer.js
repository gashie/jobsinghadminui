import {
  VIEW_JOB_ALERTS,
  VIEW_JOB_ALERTS_SUCCESS,
  VIEW_JOB_ALERTS_ERROR,
  CREATE_JOB_ALERT,
  CREATE_JOB_ALERT_ERROR,
  CREATE_JOB_ALERT_SUCCESS,
} from "./actionTypes";

const initalState = {
  errorMsg: "",
  loading: false,
  error: false,
  jobAlerts: null,
  jobAlertsError: false,
  jobAlertsLoading: false,
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
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default JobAlerts;
