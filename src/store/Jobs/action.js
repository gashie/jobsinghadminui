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
  } from './actionTypes';
  
  // Action creators for CREATE_JOB_STATUS
  export const createStatus = (data) => ({
    type: CREATE_JOB_STATUS,
    payload: data
  });
  
  export const createStatusSuccess = (data) => ({
    type: CREATE_JOB_STATUS_SUCCESS,
    payload: data,
  });
  
  export const createStatusError = (error) => ({
    type: CREATE_JOB_STATUS_ERROR,
    payload: error,
  });
  
  // Action creators for JOB_STATUS
  export const jobStatus = (data) => ({
    type: JOB_STATUS,
    payload: data
  });
  
  export const jobStatusSuccess = (data) => ({
    type: JOB_STATUS_SUCCESS,
    payload: data,
  });
  
  export const jobStatusError = (error) => ({
    type: JOB_STATUS_ERROR,
    payload: error,
  });
  
  // Action creators for UPDATE_JOB_STATUS
  export const updateStatus = (data) => ({
    type: UPDATE_JOB_STATUS,
    payload: data
  });
  
  export const updateStatusSuccess = (data) => ({
    type: UPDATE_JOB_STATUS_SUCCESS,
    payload: data,
  });
  
  export const updateStatusError = (error) => ({
    type: UPDATE_JOB_STATUS_ERROR,
    payload: error,
  });
  
  // Action creators for CREATE_JOB
  export const createJob = (data) => ({
    type: CREATE_JOB,
    payload: data
  });
  
  export const createJobSuccess = (data) => ({
    type: CREATE_JOB_SUCCESS,
    payload: data,
  });
  
  export const createJobError = (error) => ({
    type: CREATE_JOB_ERROR,
    payload: error,
  });
  
  // Action creators for UPDATE_JOB
  export const updateJob = (data) => ({
    type: UPDATE_JOB,
    payload: data
  });
  
  export const updateJobSuccess = (data) => ({
    type: UPDATE_JOB_SUCCESS,
    payload: data,
  });
  
  export const updateJobError = (error) => ({
    type: UPDATE_JOB_ERROR,
    payload: error,
  });
  
  // Action creators for JOBS
  export const jobs = (data) => ({
    type: JOBS,
    payload: data
  });
  
  export const jobsSuccess = (data) => ({
    type: JOBS_SUCCESS,
    payload: data,
  });
  
  export const jobsError = (error) => ({
    type: JOBS_ERROR,
    payload: error,
  });
  
  // Action creators for APPROVE_JOBS
  export const approveJobs = (data) => ({
    type: APPROVE_JOBS,
    payload: data
  });
  
  export const approveJobsSuccess = (data) => ({
    type: APPROVE_JOBS_SUCCESS,
    payload: data,
  });
  
  export const approveJobsError = (error) => ({
    type: APPROVE_JOBS_ERROR,
    payload: error,
  });
  