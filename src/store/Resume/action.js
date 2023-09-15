import {
  CREATE_CV,
  CREATE_CV_SUCCESS,
  CREATE_CV_ERROR,
  CREATE_RESUME,
  CREATE_RESUME_SUCCESS,
  CREATE_RESUME_ERROR,
  VIEW_CV,
  VIEW_CV_SUCCESS,
  VIEW_CV_ERROR,
  VIEW_RESUME,
  VIEW_RESUME_SUCCESS,
  VIEW_RESUME_ERROR,
  UPDATE_CV,
  UPDATE_CV_SUCCESS,
  UPDATE_CV_ERROR,
  UPDATE_RESUME,
  UPDATE_RESUME_SUCCESS,
  UPDATE_RESUME_ERROR,
} from "./actionTypes";

export const updateResumeError = (payload) => {
  return {
    type: UPDATE_RESUME_ERROR,
    payload: payload,
  };
};

export const updateResumeSuccess = () => {
  return {
    type: UPDATE_RESUME_SUCCESS,
  };
};

export const updateResume = (payload) => {
  return {
    type: UPDATE_RESUME,
    payload: payload,
  };
};

export const updateCvError = (payload) => {
  return {
    type: UPDATE_CV_ERROR,
    payload: payload,
  };
};

export const updateCvSuccess = () => {
  return {
    type: UPDATE_CV_SUCCESS,
  };
};

export const updateCv = (payload) => {
  return {
    type: UPDATE_CV,
    payload: payload,
  };
};

export const viewResumeError = (payload) => {
  return {
    type: VIEW_RESUME_ERROR,
    payload: payload,
  };
};

export const viewResumeSuccess = (payload) => {
  return {
    type: VIEW_RESUME_SUCCESS,
    payload: payload,
  };
};

export const viewResume = () => {
  return {
    type: VIEW_RESUME,
   
  };
};

export const viewCvError = (payload) => {
  return {
    type: VIEW_CV_ERROR,
    payload: payload,
  };
};

export const viewCvSuccess = (payload) => {
  return {
    type: VIEW_CV_SUCCESS,
    payload: payload,
  };
};

export const viewCv = () => {
  return {
    type: VIEW_CV,

  };
};

export const createResumeError = (payload) => {
  return {
    type: CREATE_RESUME_ERROR,
    payload: payload,
  };
};

export const createResumeSuccess = () => {
  return {
    type: CREATE_RESUME_SUCCESS,
  };
};

export const createResume = (payload) => {
  return {
    type: CREATE_RESUME,
    payload: payload,
  };
};

export const createCvError = (payload) => {
  return {
    type: CREATE_CV_ERROR,
    payload: payload,
  };
};

export const createCvSuccess = () => {
  return {
    type: CREATE_CV_SUCCESS,
  };
};

export const createCv = (payload) => {
  return {
    type: CREATE_CV,
    payload: payload,
  };
};
