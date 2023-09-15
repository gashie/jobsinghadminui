import {
    VIEW_JOB_ALERTS,
    VIEW_JOB_ALERTS_SUCCESS,
    VIEW_JOB_ALERTS_ERROR,
  } from "./actionTypes";

  export const viewjobAlerts = payload => {
    return {
        type: VIEW_JOB_ALERTS, 
        payload: payload
    }
  }

  export const viewjobAlertsSuccess = payload =>{
    return {
        type: VIEW_JOB_ALERTS_SUCCESS, 
        payload: payload
    }
  }

  export const viewjobAlertsError = payload =>{
    return {
        type: VIEW_JOB_ALERTS_ERROR, 
        payload: payload
    }
  }