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
  FULL_JOB_DETAILS, FULL_JOB_DETAILS_ERROR, FULL_JOB_DETAILS_SUCCESS, FIND_JOB, FIND_JOB_SUCCESS, FIND_JOB_ERROR
  
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

export const viewSavedJobs = (payload) => {
  return {
    type: VIEW_SAVED_JOBS,
    payload: payload,
  };
};

export const viewSavedJobsSuccess = (payload) => {
  return {
    type: VIEW_SAVED_JOBS_SUCCESS,
    payload: payload,
  };
};

export const viewSavedJobsError = (payload) => {
  return {
    type: VIEW_SAVED_JOBS_ERROR,
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

export const updateJobAlert = (payload) => {
  return {
    type: UPDATE_JOB_ALERT,
    payload: payload,
  };
};

export const updateJobAlertSuccess = () => {
  return {
    type: UPDATE_JOB_ALERT_SUCCESS,
  };
};

export const updateJobAlertError = (payload) => {
  return {
    type: UPDATE_JOB_ALERT_ERROR,
    payload: payload,
  };
};

export const saveJobs = (data) => ({
  type: SAVE_JOBS,
  payload: data,
});

export const saveJobsSuccess = (data) => ({
  type: SAVE_JOBS_SUCCESS,
  payload: data,
});

export const saveJobsError = (error) => ({
  type: SAVE_JOBS_ERROR,
  payload: error,
});

// Action creators for UPDATE_SAVED_JOBS
export const updateSavedJobs = (data) => ({
  type: UPDATE_SAVED_JOBS,
  payload: data,
});

export const updateSavedJobsSuccess = (data) => ({
  type: UPDATE_SAVED_JOBS_SUCCESS,
  payload: data,
});

export const updateSavedJobsError = (error) => ({
  type: UPDATE_SAVED_JOBS_ERROR,
  payload: error,
});

export const fullJobDetails = (data) => ({
  type: FULL_JOB_DETAILS,
  payload: data,
});

export const fullJobDetailsSuccess = (data) => ({
  type: FULL_JOB_DETAILS_SUCCESS,
  payload: data,
});

export const fullJobDetailsError = (error) => ({
  type: FULL_JOB_DETAILS_ERROR,
  payload: error,
});


export const findJob = (data) => ({
  type: FIND_JOB,
  payload: data,
});

export const findJobSuccess = (data) => ({
  type: FIND_JOB_SUCCESS,
  payload: data,
});

export const findJobError = (error) => ({
  type: FIND_JOB_ERROR,
  payload: error,
});



// Action creators for APPLY_FOR_JOBS
export const applyForJobs = (data) => ({
  type: APPLY_FOR_JOBS,
  payload: data,
});

export const applyForJobsSuccess = () => ({
  type: APPLY_FOR_JOBS_SUCCESS,
});

export const applyForJobsError = (error) => ({
  type: APPLY_FOR_JOBS_ERROR,
  payload: error,
});

