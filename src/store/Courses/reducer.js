import {
    COURSE,
    COURSE_ERROR,
    COURSE_SUCCESS,
    SAVE_COURSE,
    SAVE_COURSE_ERROR,
    SAVE_COURSE_SUCCESS,
    UPDATE_COURSE,
    UPDATE_COURSE_ERROR,
    UPDATE_COURSE_SUCCESS,
    APPROVE_COURSE,
    APPROVE_COURSE_ERROR,
    APPROVE_COURSE_SUCCESS,
    COURSE_SCHEDULE,
    COURSE_SCHEDULE_ERROR,
    COURSE_SCHEDULE_SUCCESS,
    COURSE_PARTNERSHIP,
    COURSE_PARTNERSHIP_ERROR,
    COURSE_PARTNERSHIP_SUCCESS,
    COURSE_CONTENT,
    COURSE_CONTENT_ERROR,
    COURSE_CONTENT_SUCCESS,
    SAVE_COURSE_CONTENT,
    SAVE_COURSE_CONTENT_ERROR,
    SAVE_COURSE_CONTENT_SUCCESS,
    SAVE_COURSE_PARTNERSHIP,
    SAVE_COURSE_PARTNERSHIP_ERROR,
    SAVE_COURSE_PARTNERSHIP_SUCCESS,
    SAVE_COURSE_SCHEDULE,
    SAVE_COURSE_SCHEDULE_ERROR,
    SAVE_COURSE_SCHEDULE_SUCCESS,
    UPDATE_COURSE_CONTENT,
    UPDATE_COURSE_CONTENT_ERROR,
    UPDATE_COURSE_CONTENT_SUCCESS,
    UPDATE_COURSE_PARTNERSHIP,
    UPDATE_COURSE_PARTNERSHIP_ERROR,
    UPDATE_COURSE_PARTNERSHIP_SUCCESS,
    UPDATE_COURSE_SCHEDULE,
    UPDATE_COURSE_SCHEDULE_ERROR,
    UPDATE_COURSE_SCHEDULE_SUCCESS,
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    error: false,
    errMssg: null,
    courseInfo: null,
    courseContent: null,
    coursePartnership: null,
    courseSchedule: null,
  };
  
  const Courses = (state = initialState, action) => {
    switch (action.type) {
      // Common loading and error handling for multiple actions
      case COURSE:
      case SAVE_COURSE:
      case UPDATE_COURSE:
      case APPROVE_COURSE:
      case COURSE_SCHEDULE:
      case COURSE_PARTNERSHIP:
      case COURSE_CONTENT:
      case SAVE_COURSE_CONTENT:
      case SAVE_COURSE_PARTNERSHIP:
      case SAVE_COURSE_SCHEDULE:
      case UPDATE_COURSE_CONTENT:
      case UPDATE_COURSE_PARTNERSHIP:
      case UPDATE_COURSE_SCHEDULE:
        return {
          ...state,
          loading: true,
          error: false,
        };
      // Common error handling for multiple actions
      case COURSE_ERROR:
      case SAVE_COURSE_ERROR:
      case UPDATE_COURSE_ERROR:
      case APPROVE_COURSE_ERROR:
      case COURSE_SCHEDULE_ERROR:
      case COURSE_PARTNERSHIP_ERROR:
      case COURSE_CONTENT_ERROR:
      case SAVE_COURSE_CONTENT_ERROR:
      case SAVE_COURSE_PARTNERSHIP_ERROR:
      case SAVE_COURSE_SCHEDULE_ERROR:
      case UPDATE_COURSE_CONTENT_ERROR:
      case UPDATE_COURSE_PARTNERSHIP_ERROR:
      case UPDATE_COURSE_SCHEDULE_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          errMssg: action.payload,
        };
      // Specific success and data handling for each action
      case COURSE_SUCCESS:
      case SAVE_COURSE_SUCCESS:
      case UPDATE_COURSE_SUCCESS:
      case APPROVE_COURSE_SUCCESS:
     
        return {
          ...state,
          loading: false,
          error: false,
          courseInfo: action.payload,
        };
      case COURSE_PARTNERSHIP_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          coursePartnership: action.payload,
        };
      case COURSE_CONTENT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          courseContent: action.payload,
        };
      case  COURSE_SCHEDULE_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          courseSchedule: action.payload,
        };
      // Default case
      default:
        return state;
    }
  };
  
  export default Courses;
  