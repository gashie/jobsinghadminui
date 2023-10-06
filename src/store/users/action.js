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

export const employers = (data) => {
  return {
    type: EMPLOYERS,
    payload: data,
  };
};
export const employersSuccess = (data) => {
  return {
    type: EMPLOYERS_SUCCESS,
    payload: data,
  };
};
export const employersError = (data) => {
  return {
    type: EMPLOYERS_ERROR,
    payload: data,
  };
};

export const jobseekers = (data) => {
  return {
    type: JOBSEEKER,
    payload: data,
  };
};
export const jobseekersSuccess = (data) => {
  return {
    type: JOBSEEKER_SUCCESS,
    payload: data,
  };
};
export const jobseekersError = (data) => {
  return {
    type: JOBSEEKER_ERROR,
    payload: data,
  };
};

export const updateUserProfile = (data) => {
  return {
    type: UPDATE_PROILE,
    payload: data,
  };
};
export const updateUserProfileSuccess = () => {
  return {
    type: UPDATE_PROILE_SUCCESS,
  };
};
export const updateUserProfileError = (data) => {
  return {
    type: UPDATE_PROILE_ERROR,
    payload: data,
  };
};

export const sendService = (data) => {
  return {
    type: SEND_SERVICE,
    payload: data,
  };
};
export const sendServiceError = () => {
  return {
    type: SEND_SERVICE_ERROR,
  };
};
export const sendServiceSuccess = (data) => {
  return {
    type: SEND_SERVICE_SUCCESS,
    payload: data,
  };
};
