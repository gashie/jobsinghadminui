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

const initalState = {
  loading: false,
  error: false,
  errMssg: null,
  resumeInfo: null,
  cvInfo: null,
  resumeInfoLoading: false,
  cvInfoLoading: false,
  resumeInfoError: null,
  cvInfoError: null,
  updateResumeLoading: false,
  updateResumeError: false,
  updateCvLoading: false,
  updateCvError: false,
};

const Resumes = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_CV:
      state = {
        ...state,
        loading: true,
        error: false,
        cvInfoLoading: true,
        cvInfoError: null,
      };
      break;
    case CREATE_CV_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
        cvInfoLoading: false,
      };
      break;
    case CREATE_CV_ERROR:
      state = {
        ...state,
        loading: false,
        error: false,
        cvInfoLoading: false,
        cvInfoError: action.payload,
        errMssg: action.payload,
      };
      break;
    case CREATE_RESUME:
      state = {
        ...state,
        loading: true,
        error: false,
        resumeInfoLoading: true,
      };
      break;
    case CREATE_RESUME_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
        resumeInfoLoading: false,
      };
      break;
    case CREATE_RESUME_ERROR:
      state = {
        ...state,
        loading: false,
        error: false,
        cvInfoLoading: false,
        cvInfoError: action.payload,
        errMssg: action.payload,
      };
      break;

    case VIEW_RESUME:
      state = {
        ...state,
        loading: true,
        error: false,
        resumeInfoLoading: true,
      };
      break;
    case VIEW_RESUME_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
        resumeInfoLoading: false,
        resumeInfo: action.payload,
      };
      break;
    case VIEW_RESUME_ERROR:
      state = {
        ...state,
        loading: false,
        error: false,
        resumeInfoLoading: false,
        resumeInfoError: action.payload,
        errMssg: action.payload,
      };
      break;

    case VIEW_CV:
      state = {
        ...state,
        loading: true,
        error: false,
        cvInfoLoading: true,
      };
      break;
    case VIEW_CV_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
        cvInfoLoading: false,
        cvInfo: action.payload,
      };
      break;
    case VIEW_CV_ERROR:
      state = {
        ...state,
        loading: false,
        error: false,
        cvInfoLoading: false,
        cvInfoError: action.payload,
        errMssg: action.payload,
      };
      break;

    case UPDATE_CV:
      state = {
        ...state,
        loading: true,
        error: false,
        updateCvLoading: true,
      };
      break;
    case UPDATE_CV_SUCCESS:
      state = {
        ...state,
        loading: false,
        updateCvLoading: false,
        error: false,
      };
      break;

    case UPDATE_CV_ERROR:
      state = {
        ...state,
        loading: false,
        updateCvLoading: false,
        error: true,
        errMssg: action.payload,
        updateCvError: action.payload,
      };
      break;

    case UPDATE_RESUME:
      state = {
        ...state,
        loading: true,
        error: false,
        updateResumeLoading: true,
      };
      break;
    case UPDATE_RESUME_SUCCESS:
      state = {
        ...state,
        loading: false,
        updateResumeLoading: false,
        error: false,
      };
      break;

    case UPDATE_RESUME_ERROR:
      state = {
        ...state,
        loading: false,
        updateResumeLoading: false,
        error: true,
        errMssg: action.payload,
        updateResumeError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Resumes;
