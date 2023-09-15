import {
  VIEW_JOB_ALERTS,
  VIEW_JOB_ALERTS_SUCCESS,
  VIEW_JOB_ALERTS_ERROR,
  CREATE_JOB_ALERT,
  CREATE_JOB_ALERT_SUCCESS,
  CREATE_JOB_ALERT_ERROR,
} from "./actionTypes";

export const viewjobAlerts = (payload) => {
  return {
    type: VIEW_JOB_ALERTS,
    payload: payload,
  };
};

export const viewjobAlertsSuccess = (payload) => {
  return {
    type: VIEW_JOB_ALERTS_SUCCESS,
    payload: payload,
  };
};

export const viewjobAlertsError = (payload) => {
  return {
    type: VIEW_JOB_ALERTS_ERROR,
    payload: payload,
  };
};

export const createJobAlert = (payload) => {
  return {
    type: CREATE_JOB_ALERT,
    payload: payload,
  };
};

export const createJobAlertSuccess = () => {
  return {
    type: CREATE_JOB_ALERT_SUCCESS,
  };
};

export const createJobAlertError = (payload) => {
  return {
    type: CREATE_JOB_ALERT_ERROR,
    payload: payload,
  };
};
