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
    FIND_COURSE,
    FIND_COURSE_SUCCESS,
    FIND_COURSE_ERROR,
    HOME_COURSE,
    HOME_COURSE_ERROR,
    HOME_COURSE_SUCCESS,
    } from "./actionTypes";
    
    // Action creators
  
  export function course(payload) {
    return {
      type: COURSE,
      payload: payload,
    };
  }
  
  export function courseError(error) {
    return {
      type: COURSE_ERROR,
      payload: error,
    };
  }
  
  export function courseSuccess(data) {
    return {
      type: COURSE_SUCCESS,
      payload: data,
    };
  }

  export function homeCourse(payload) {
    return {
      type: HOME_COURSE,
      payload: payload,
    };
  }
  
  export function homeCourseError(error) {
    return {
      type: HOME_COURSE_ERROR,
      payload: error,
    };
  }
  
  export function homeCourseSuccess(data) {
    return {
      type: HOME_COURSE_SUCCESS,
      payload: data,
    };
  }
  
  export function saveCourse(payload) {
    return {
      type: SAVE_COURSE,
      payload: payload,
    };
  }
  
  export function saveCourseError(error) {
    return {
      type: SAVE_COURSE_ERROR,
      payload: error,
    };
  }
  
  export function saveCourseSuccess(data) {
    return {
      type: SAVE_COURSE_SUCCESS,
      payload: data,
    };
  }
  
  export function updateCourse(payload) {
    return {
      type: UPDATE_COURSE,
      payload: payload,
    };
  }
  
  export function updateCourseError(error) {
    return {
      type: UPDATE_COURSE_ERROR,
      payload: error,
    };
  }
  
  export function updateCourseSuccess(data) {
    return {
      type: UPDATE_COURSE_SUCCESS,
      payload: data,
    };
  }
  
  export function approveCourse(payload) {
    return {
      type: APPROVE_COURSE,
      payload: payload,
    };
  }
  
  export function approveCourseError(error) {
    return {
      type: APPROVE_COURSE_ERROR,
      payload: error,
    };
  }
  
  export function approveCourseSuccess(data) {
    return {
      type: APPROVE_COURSE_SUCCESS,
      payload: data,
    };
  }
  
  export function courseSchedule(payload) {
    return {
      type: COURSE_SCHEDULE,
      payload: payload,
    };
  }
  
  export function courseScheduleError(error) {
    return {
      type: COURSE_SCHEDULE_ERROR,
      payload: error,
    };
  }
  
  export function courseScheduleSuccess(data) {
    return {
      type: COURSE_SCHEDULE_SUCCESS,
      payload: data,
    };
  }
  
  export function coursePartnership(payload) {
    return {
      type: COURSE_PARTNERSHIP,
      payload: payload,
    };
  }
  
  export function coursePartnershipError(error) {
    return {
      type: COURSE_PARTNERSHIP_ERROR,
      payload: error,
    };
  }
  
  export function coursePartnershipSuccess(data) {
    return {
      type: COURSE_PARTNERSHIP_SUCCESS,
      payload: data,
    };
  }
  
  export function courseContent(payload) {
    return {
      type: COURSE_CONTENT,
      payload: payload,
    };
  }
  
  export function courseContentError(error) {
    return {
      type: COURSE_CONTENT_ERROR,
      payload: error,
    };
  }
  
  export function courseContentSuccess(data) {
    return {
      type: COURSE_CONTENT_SUCCESS,
      payload: data,
    };
  }
  
  export function saveCourseContent(payload) {
    return {
      type: SAVE_COURSE_CONTENT,
      payload: payload,
    };
  }
  
  export function saveCourseContentError(error) {
    return {
      type: SAVE_COURSE_CONTENT_ERROR,
      payload: error,
    };
  }
  
  export function saveCourseContentSuccess(data) {
    return {
      type: SAVE_COURSE_CONTENT_SUCCESS,
      payload: data,
    };
  }
  
  export function saveCoursePartnership(payload) {
    return {
      type: SAVE_COURSE_PARTNERSHIP,
      payload: payload,
    };
  }
  
  export function saveCoursePartnershipError(error) {
    return {
      type: SAVE_COURSE_PARTNERSHIP_ERROR,
      payload: error,
    };
  }
  
  export function saveCoursePartnershipSuccess(data) {
    return {
      type: SAVE_COURSE_PARTNERSHIP_SUCCESS,
      payload: data,
    };
  }
  
  export function saveCourseSchedule(payload) {
    return {
      type: SAVE_COURSE_SCHEDULE,
      payload: payload,
    };
  }
  
  export function saveCourseScheduleError(error) {
    return {
      type: SAVE_COURSE_SCHEDULE_ERROR,
      payload: error,
    };
  }
  
  export function saveCourseScheduleSuccess(data) {
    return {
      type: SAVE_COURSE_SCHEDULE_SUCCESS,
      payload: data,
    };
  }
  
  export function updateCourseContent(payload) {
    return {
      type: UPDATE_COURSE_CONTENT,
      payload: payload,
    };
  }
  
  export function updateCourseContentError(error) {
    return {
      type: UPDATE_COURSE_CONTENT_ERROR,
      payload: error,
    };
  }
  
  export function updateCourseContentSuccess(data) {
    return {
      type: UPDATE_COURSE_CONTENT_SUCCESS,
      payload: data,
    };
  }
  
  export function updateCoursePartnership(payload) {
    return {
      type: UPDATE_COURSE_PARTNERSHIP,
      payload: payload,
    };
  }
  
  export function updateCoursePartnershipError(error) {
    return {
      type: UPDATE_COURSE_PARTNERSHIP_ERROR,
      payload: error,
    };
  }
  
  export function updateCoursePartnershipSuccess(data) {
    return {
      type: UPDATE_COURSE_PARTNERSHIP_SUCCESS,
      payload: data,
    };
  }
  
  export function updateCourseSchedule(payload) {
    return {
      type: UPDATE_COURSE_SCHEDULE,
      payload: payload,
    };
  }
  
  export function updateCourseScheduleError(error) {
    return {
      type: UPDATE_COURSE_SCHEDULE_ERROR,
      payload: error,
    };
  }
  
  export function updateCourseScheduleSuccess(data) {
    return {
      type: UPDATE_COURSE_SCHEDULE_SUCCESS,
      payload: data,
    };
  }

  export function frontCourse(data) {
    return {
      type: "FRONT_COURSE",
      payload: data,
    };
  }

  export function findCourse (data) {
    return {
      type: FIND_COURSE, 
      payload: data
    }
  }
  export function findCourseSuccess (data) {
    return {
      type: FIND_COURSE_SUCCESS, 
      payload: data
    }
  }
  export function findCourseError (data) {
    return {
      type: FIND_COURSE_ERROR, 
      payload: data
    }
  }
  