import {
    CREATE_QUESTION,
    CREATE_QUESTION_SUCCESS,
    CREATE_QUESTION_ERROR,
    CREATE_QUESTION_Y_N,
    CREATE_QUESTION_Y_N_SUCCESS,
    CREATE_QUESTION_Y_N_ERROR,
    CREATE_QUESTION_SINGLE,
    CREATE_QUESTION_SINGLE_SUCCESS,
    CREATE_QUESTION_SINGLE_ERROR,
    CREATE_QUESTION_MULTIPLE,
    CREATE_QUESTION_MULTIPLE_SUCCESS,
    CREATE_QUESTION_MULTIPLE_ERROR,
    CREATE_QUESTION_RANGE,
    CREATE_QUESTION_RANGE_SUCCESS,
    CREATE_QUESTION_RANGE_ERROR,
    CREATE_JOB_QUESTION,
    CREATE_JOB_QUESTION_SUCCESS,
    CREATE_JOB_QUESTION_ERROR,
    UNLINK_JOB_QUESTION,
    UNLINK_JOB_QUESTION_SUCCESS,
    UNLINK_JOB_QUESTION_ERROR,
    LINK_JOB_QUESTION,
    LINK_JOB_QUESTION_SUCCESS,
    LINK_JOB_QUESTION_ERROR,
    VIEW_MY_QUESTIONS,
    VIEW_MY_QUESTIONS_SUCCESS,
    VIEW_MY_QUESTIONS_ERROR,
    UPDATE_QUESTIONS_ERROR,
    UPDATE_QUESTIONS_SUCCESS,
    UPDATE_QUESTIONS,
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    error: null,
    data: null,
    questions: null,
    viewQuestionsLoading: false, 
    viewQuestionsError: false,
    errMssg: "",
    updateQuestionsError: false, 
    updateQuestionsLoading: false

  };
  
  const Questions = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_QUESTION:
      case CREATE_QUESTION_Y_N:
      case CREATE_QUESTION_SINGLE:
      case CREATE_QUESTION_MULTIPLE:
      case CREATE_QUESTION_RANGE:
      case CREATE_JOB_QUESTION:
      case UNLINK_JOB_QUESTION:
      case LINK_JOB_QUESTION:
        return {
          ...state,
          loading: true,
          error: null,
          data: null,
        };
      case CREATE_QUESTION_SUCCESS:
      case CREATE_QUESTION_Y_N_SUCCESS:
      case CREATE_QUESTION_SINGLE_SUCCESS:
      case CREATE_QUESTION_MULTIPLE_SUCCESS:
      case CREATE_QUESTION_RANGE_SUCCESS:
      case CREATE_JOB_QUESTION_SUCCESS:
      case UNLINK_JOB_QUESTION_SUCCESS:
      case LINK_JOB_QUESTION_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload,
        };
      case CREATE_QUESTION_ERROR:
      case CREATE_QUESTION_Y_N_ERROR:
      case CREATE_QUESTION_SINGLE_ERROR:
      case CREATE_QUESTION_MULTIPLE_ERROR:
      case CREATE_QUESTION_RANGE_ERROR:
      case CREATE_JOB_QUESTION_ERROR:
      case UNLINK_JOB_QUESTION_ERROR:
      case LINK_JOB_QUESTION_ERROR:
        return {
          ...state,
          loading: false,
          errMssg: action.payload,
          data: null,
          error: false
        };

        case VIEW_MY_QUESTIONS: 
        return {
            ...state, 
            viewQuestionsError: false, 
            viewQuestionsLoading: true
        }
        case VIEW_MY_QUESTIONS_SUCCESS: 
        return {
            ...state, 
            viewQuestionsError: false, 
            viewQuestionsLoading: false, 
            questions: action.payload
        }
        case VIEW_MY_QUESTIONS_ERROR: 
        return {
            ...state, 
            viewQuestionsError: false, 
            viewQuestionsLoading: false,
            errMssg: action.payload
        }
        case UPDATE_QUESTIONS: 
        return {
            ...state, 
            updateQuestionsLoading: true, 
            updateQuestionsError: false
        }
        case UPDATE_QUESTIONS_ERROR: 
        return {
            ...state, 
            updateQuestionsLoading: false, 
            updateQuestionsError: true, 
            errMssg: action.payload
        }
        case UPDATE_QUESTIONS_SUCCESS: 
        return {
            ...state, 
            updateQuestionsLoading: false, 
            updateQuestionsError: false,
            questions: action.payload
        }
      default:
        return state;
    }
  };
  
  export default Questions;
  


