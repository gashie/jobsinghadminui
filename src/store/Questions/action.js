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
  VIEW_MY_QUESTIONS_ERROR,
  VIEW_MY_QUESTIONS_SUCCESS,
  UPDATE_QUESTIONS_ERROR,
  UPDATE_QUESTIONS_SUCCESS,
  UPDATE_QUESTIONS,
} from "./actionTypes";

// CREATE_QUESTION actions
export const createQuestion = (questionData) => ({
  type: "CREATE_QUESTION",
  payload: questionData,
});

export const createQuestionSuccess = (question) => ({
  type: "CREATE_QUESTION_SUCCESS",
  payload: question,
});

export const createQuestionError = (error) => ({
  type: "CREATE_QUESTION_ERROR",
  payload: error,
});

// CREATE_QUESTION_Y_N actions
export const createQuestionYN = (questionData) => ({
  type: "CREATE_QUESTION_Y_N",
  payload: questionData,
});

export const createQuestionYNSuccess = (question) => ({
  type: "CREATE_QUESTION_Y_N_SUCCESS",
  payload: question,
});

export const createQuestionYNError = (error) => ({
  type: "CREATE_QUESTION_Y_N_ERROR",
  payload: error,
});

// CREATE_QUESTION_SINGLE actions
export const createQuestionSingle = (questionData) => ({
  type: "CREATE_QUESTION_SINGLE",
  payload: questionData,
});

export const createQuestionSingleSuccess = (question) => ({
  type: "CREATE_QUESTION_SINGLE_SUCCESS",
  payload: question,
});

export const createQuestionSingleError = (error) => ({
  type: "CREATE_QUESTION_SINGLE_ERROR",
  payload: error,
});

// CREATE_QUESTION_MULTIPLE actions
export const createQuestionMultiple = (questionData) => ({
  type: "CREATE_QUESTION_MULTIPLE",
  payload: questionData,
});

export const createQuestionMultipleSuccess = (question) => ({
  type: "CREATE_QUESTION_MULTIPLE_SUCCESS",
  payload: question,
});

export const createQuestionMultipleError = (error) => ({
  type: "CREATE_QUESTION_MULTIPLE_ERROR",
  payload: error,
});

// CREATE_QUESTION_RANGE actions
export const createQuestionRange = (questionData) => ({
  type: "CREATE_QUESTION_RANGE",
  payload: questionData,
});

export const createQuestionRangeSuccess = (question) => ({
  type: "CREATE_QUESTION_RANGE_SUCCESS",
  payload: question,
});

export const createQuestionRangeError = (error) => ({
  type: "CREATE_QUESTION_RANGE_ERROR",
  payload: error,
});

// CREATE_JOB_QUESTION actions
export const createJobQuestion = (jobData) => ({
  type: "CREATE_JOB_QUESTION",
  payload: jobData,
});

export const createJobQuestionSuccess = (job) => ({
  type: "CREATE_JOB_QUESTION_SUCCESS",
  payload: job,
});

export const createJobQuestionError = (error) => ({
  type: "CREATE_JOB_QUESTION_ERROR",
  payload: error,
});

// UNLINK_JOB_QUESTION actions
export const unlinkJobQuestion = (data) => ({
  type: "UNLINK_JOB_QUESTION",
  payload: data,
});

export const unlinkJobQuestionSuccess = () => ({
  type: "UNLINK_JOB_QUESTION_SUCCESS",
});

export const unlinkJobQuestionError = (error) => ({
  type: "UNLINK_JOB_QUESTION_ERROR",
  payload: error,
});

// LINK_JOB_QUESTION actions
export const linkJobQuestion = (data) => ({
  type: "LINK_JOB_QUESTION",
  payload: data,
});

export const linkJobQuestionSuccess = () => ({
  type: "LINK_JOB_QUESTION_SUCCESS",
});

export const linkJobQuestionError = (error) => ({
  type: "LINK_JOB_QUESTION_ERROR",
  payload: error,
});

//VIEW My QUESTIONS
export const viewMyQuestions = () => ({
  type: VIEW_MY_QUESTIONS,
});

export const viewMyQuestionsSuccess = (data) => ({
  type: VIEW_MY_QUESTIONS_SUCCESS,
  payload: data,
});
export const viewMyQuestionsError = (data) => ({
  type: VIEW_MY_QUESTIONS_ERROR,
  payload: data,
});

  //Update My QUESTIONS
  export const updateQuestions = (data) => ({
    type: UPDATE_QUESTIONS,
    payload: data
  });
  
  export const updateQuestionsSuccess = (data) => ({
    type: UPDATE_QUESTIONS_SUCCESS,
    payload: data,
  });
  export const updateQuestionsError = (data) => ({
    type: UPDATE_QUESTIONS_ERROR,
    payload: data,
  });
